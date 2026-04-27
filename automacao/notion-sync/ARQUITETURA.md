# Arquitetura minima do notion-sync

## Objetivo

Este pequeno projeto pega o conteudo curado em `publicacao/`, interpreta a ordem definida em `publicacao/SUMMARY.md` e espelha esse conjunto como paginas filhas no Notion.

Regra central: `Git` e `publicacao/` sao a fonte da verdade. O Notion e destino sincronizado.

## Visao em uma frase

O fluxo e:

1. ler `SUMMARY.md`
2. descobrir quais arquivos `.md` devem existir no Notion e em que hierarquia
3. transformar cada Markdown em blocos do Notion
4. comparar com manifesto tecnico salvo no Notion
5. criar, atualizar ou arquivar paginas
6. salvar manifesto novo

## Entradas e saidas

Entradas locais:

- `publicacao/SUMMARY.md`: define ordem e hierarquia editorial
- `publicacao/*.md`: define conteudo de cada pagina

Entradas de ambiente:

- `NOTION_TOKEN`: autentica na API do Notion
- `NOTION_ROOT_PAGE_ID`: pagina raiz onde tudo sera criado
- `NOTION_SYNC_ROOT_DIR`: opcional; por padrao, `publicacao`

Saida remota:

- paginas filhas sob `NOTION_ROOT_PAGE_ID`
- uma pagina tecnica `_sync-index` com manifesto JSON do sync

## Modulos

### `src/index.js`

Camada de orquestracao. Decide ordem do processo.

Responsabilidades:

- resolver diretorio raiz da publicacao
- montar lista de documentos gerenciados
- entrar em modo `--validate` ou modo sync real
- garantir existencia da pagina tecnica `_sync-index`
- carregar manifesto anterior
- sincronizar documentos
- persistir manifesto novo

### `src/sync-manifest.js`

Camada de leitura estrutural local e serializacao do manifesto.

Responsabilidades:

- parsear `SUMMARY.md`
- achatar arvore editorial em lista ordenada
- ler Markdown bruto de cada arquivo
- calcular hash de conteudo
- montar objeto de documento gerenciado
- ler e escrever manifesto tecnico em JSON com marcador de versao

### `src/markdown-to-notion.js`

Camada de traducao Markdown -> blocos da API do Notion.

Responsabilidades:

- quebrar textos longos em chunks aceitos pela API
- interpretar inline basico: negrito, italico, codigo inline e links
- interpretar blocos: paragrafos, headings, listas, quotes, divisores e code fences
- extrair titulo principal do arquivo a partir de `# ...`

### `src/notion-client.js`

Camada fina de acesso HTTP a API do Notion.

Responsabilidades:

- fazer requests autenticados
- paginar leitura de blocos
- criar paginas filhas
- atualizar titulo
- arquivar pagina
- apagar blocos existentes
- anexar novos blocos em lotes
- localizar pagina filha por titulo

## Fluxo completo passo a passo

## 1. Entrada do processo

Tudo comeca em `main()` em `src/index.js`.

Ordem real:

1. checa se `--validate` foi passado
2. define `rootDir` com `NOTION_SYNC_ROOT_DIR` ou `publicacao`
3. sobe tres niveis a partir de `src/` para achar raiz do repositorio
4. resolve caminho absoluto de `rootDir`
5. chama `readDocuments(rootDirAbsolute)`

## 2. Descoberta dos documentos gerenciados

`readDocuments(rootDir)` faz duas coisas:

1. chama `readSummaryTree(rootDir)`
2. transforma cada item com `buildManagedDocument(...)`

### `readSummaryTree(rootDir)`

- abre `SUMMARY.md`
- le texto inteiro
- passa conteudo para `parseSummary(summaryContent)`

### `parseSummary(summaryContent)`

Essa funcao interpreta linhas no formato:

```md
- [Titulo](arquivo.md)
```

Ela:

1. normaliza fim de linha para `\n`
2. separa em linhas
3. usa regex para aceitar apenas itens de lista com link Markdown
4. mede indentacao de cada linha
5. usa uma pilha (`stack`) para montar arvore pai-filho
6. retorna uma arvore com objetos:

```js
{
  title: "Visao do projeto",
  relativePath: "visao-do-projeto.md",
  children: []
}
```

No caso atual de `publicacao/SUMMARY.md`, resultado pratico e lista plana de 5 paginas de primeiro nivel.

### `flattenSummaryTree(nodes, parentRelativePath, target)`

Depois da arvore, essa funcao achata tudo em lista ordenada, preservando relacao com pai.

Cada item final fica assim:

```js
{
  title: "Fluxo geral",
  relativePath: "fluxo-geral.md",
  parentRelativePath: null
}
```

Se houvesse pagina filha dentro de outra, `parentRelativePath` guardaria caminho do pai.

### `buildManagedDocument(rootDir, item, parser)`

Para cada item do sumario:

1. chama `readMarkdownDocument(rootDir, item.relativePath)`
2. le Markdown bruto do arquivo
3. passa conteudo para `parseMarkdown(markdown)`
4. calcula hash com `hashContent(...)`
5. devolve documento gerenciado com:

```js
{
  title,
  relativePath,
  parentRelativePath,
  blocks,
  hash
}
```

Detalhe importante: hash usa `relativePath + "\n" + markdown`.

Consequencia:

- mudar conteudo muda hash
- renomear arquivo tambem muda hash, mesmo com texto igual

## 3. Parse do Markdown

`parseMarkdown(markdown)` em `src/markdown-to-notion.js` e parser manual, linear, linha por linha.

### Regras gerais

1. normaliza quebras de linha
2. separa em linhas
3. percorre com indice manual `index`
4. tenta reconhecer blocos em ordem de prioridade

### `title`

Primeira linha que comeca com `# ` vira titulo da pagina. Ela nao vira bloco normal naquele momento; passa a preencher `parsed.title`.

Se nenhum `# ` existir, titulo vira `Sem titulo`.

### Code fences

Trechos iniciados por ````` ou `~~~` entram em bloco `code`.

Processo:

1. detecta abertura
2. extrai linguagem depois da cerca
3. acumula linhas ate cerca de fechamento
4. cria bloco `code`

### Dividers

Linhas `---`, `***` ou `___` viram `divider`.

### Headings

- `# ` -> `heading_1`
- `## ` -> `heading_2`
- `### ` -> `heading_3`

### Quotes

Linhas consecutivas iniciadas por `> ` viram um bloco `quote` unico com linhas unidas por `\n`.

### Listas

- `- ` e `* ` -> varios blocos `bulleted_list_item`
- `1. `, `2. ` etc -> varios blocos `numbered_list_item`

Parser atual nao monta lista aninhada. Cada item vira bloco simples.

### Paragrafos

Se linha nao bater em nenhum caso acima, parser junta linhas consecutivas como um unico paragrafo, separando por espaco.

## 4. Parse inline dentro de texto

Sempre que um bloco textual precisa de `rich_text`, o codigo usa `parseInline(text)`.

Ele reconhece:

- `**negrito**`
- `*italico*`
- `` `codigo` ``
- `[texto](url)`

Fluxo interno:

1. percorre matches por regex
2. empurra trechos sem formatacao com `pushText(...)`
3. empurra trechos formatados com anotacoes adequadas

### `pushText(target, text, annotations, link)`

Essa funcao existe porque Notion limita tamanho de cada item em `rich_text`.

Ela chama `splitLongText(text)` e cria varios segmentos menores, cada um com formato aceito pela API.

### `splitLongText(text)`

Quebra texto em blocos de ate `1800` caracteres, preferindo quebrar em espaco antes do limite.

## 5. Modo de validacao

De volta a `main()`: depois de montar `documents`, script imprime lista no terminal.

Se `--validate` existir:

1. nao instancia `NotionClient`
2. nao chama API
3. encerra apos confirmar que leitura e parse funcionaram

## 6. Entrada na API do Notion

Se nao estiver em `--validate`, `main()`:

1. le `NOTION_TOKEN`
2. le `NOTION_ROOT_PAGE_ID`
3. falha se um deles estiver ausente
4. cria `new NotionClient(notionToken)`

## 7. Garantia da pagina tecnica `_sync-index`

`ensureIndexPage(notion, rootPageId)`:

1. chama `notion.findChildPageByTitle(rootPageId, "_sync-index")`
2. se existir, retorna `id`
3. se nao existir, cria pagina filha com `notion.createChildPage(...)`
4. retorna `id` da nova pagina

Essa pagina nao e editorial. Ela guarda estado tecnico do sync.

## 8. Carga do manifesto anterior

`loadManifest(notion, indexPageId, rootDir)`:

1. lista blocos dentro de `_sync-index`
2. procura primeiro bloco do tipo `code`
3. concatena `plain_text` de todos os fragmentos dele
4. passa texto para `parseManifestCodeBlock(text)`

### `parseManifestCodeBlock(codeText)`

So aceita conteudo que comece com marcador:

```txt
notion-sync-manifest:v1
```

Depois desse marcador, espera JSON puro.

Se bloco valido existir, retorna objeto manifesto. Senao, `loadManifest(...)` cai para `createEmptyManifest(rootDir)`.

### `createEmptyManifest(rootDir)`

Gera estrutura inicial:

```js
{
  version: 1,
  root_dir: "publicacao",
  updated_at: null,
  entries: {}
}
```

## 9. Sync pagina por pagina

`syncDocuments(...)` e coracao do processo.

Objetivo: produzir `nextEntries` novo e fazer Notion refletir exatamente documentos atuais.

Estruturas usadas:

- `currentEntries`: copia do manifesto antigo
- `nextEntries`: estado novo a ser salvo
- `pageIdsBySourcePath`: mapa temporario `relativePath -> pageId`, usado para localizar pai de paginas filhas durante mesma execucao

### Loop principal

Para cada `document` em ordem do `SUMMARY.md`:

1. resolve `parentPageId`
2. se documento nao tem pai, usa `rootPageId`
3. se documento tem pai, busca em `pageIdsBySourcePath[parentRelativePath]`
4. se pai nao foi resolvido, lança erro

Depois disso:

1. busca `previous = currentEntries[document.relativePath]`
2. tenta reaproveitar `previous.page_id`

### Caso: pai mudou

Se `previous.parent_relative_path !== document.parentRelativePath`:

1. pagina antiga e arquivada
2. `pageId` e zerado
3. script vai recriar pagina no novo pai

Isso trata move na hierarquia.

### Caso: pagina nao existe ainda

Se nao houver `pageId`:

1. chama `ensurePage(notion, parentPageId, document.title)`
2. `ensurePage(...)` tenta achar pagina filha com aquele titulo
3. se nao achar, cria nova

### Caso: titulo mudou

Se pagina existe e `previous.title !== document.title`:

1. chama `notion.updatePageTitle(pageId, document.title)`

### Caso: conteudo nao mudou

Se `previous.hash === document.hash` e titulo igual:

1. `shouldRewrite = false`
2. conteudo da pagina nao e reescrito

### Caso: conteudo mudou

Se precisa reescrever:

1. chama `notion.replacePageContent(pageId, document.blocks)`

### Registro do estado novo

Depois de sincronizar pagina atual:

1. guarda `pageIdsBySourcePath[document.relativePath] = pageId`
2. registra em `nextEntries`:

```js
{
  page_id,
  title,
  hash,
  parent_relative_path,
  source_path
}
```

`source_path` vira algo como `publicacao/guia-operacional-para-publicar-dfis.md`.

## 10. Arquivamento de paginas removidas

Depois do loop, `syncDocuments(...)` percorre tudo que existia em `currentEntries`.

Se algum `relativePath` antigo nao apareceu em `nextEntries`:

1. chama `notion.archivePage(entry.page_id)`

Ou seja: saiu de `SUMMARY.md` ou deixou de existir no conjunto gerenciado -> pagina vai para arquivo no Notion.

## 11. Persistencia do manifesto novo

No fim de `syncDocuments(...)`:

1. atualiza `manifest.updated_at`
2. troca `manifest.entries` por `nextEntries`

Depois `main()` chama `saveManifest(notion, indexPageId, manifest)`.

### `saveManifest(...)`

Essa funcao monta dois blocos:

1. um paragrafo avisando que pagina e tecnica
2. um bloco `code` com manifesto serializado

O bloco `code` vem de `makeCodeBlock(stringifyManifest(manifest))`.

### `stringifyManifest(manifest)`

Concatena:

1. marcador `notion-sync-manifest:v1`
2. JSON formatado do manifesto

### `replacePageContent(...)`

Na pratica, salvar manifesto sobrescreve pagina tecnica inteira.

## 12. Como `NotionClient` executa isso

### `request(path, { method, body })`

Base de tudo.

1. chama `fetch` para `https://api.notion.com/v1...`
2. injeta headers de autenticacao e versao da API
3. serializa `body` quando existe
4. se status nao for `2xx`, le corpo e lança erro detalhado
5. se status for `204`, retorna `null`
6. senao, retorna JSON

### `listBlockChildren(blockId)`

Le todos os blocos filhos de uma pagina ou bloco, cuidando de paginacao por `start_cursor`.

### `createChildPage(parentPageId, title)`

Cria pagina filha sob outra pagina, usando propriedade `title`.

### `updatePageTitle(pageId, title)`

Atualiza propriedade `title` da pagina.

### `archivePage(pageId)`

Marca pagina como arquivada no Notion.

### `deleteAllBlockChildren(blockId)`

Lista todos os blocos filhos e chama `DELETE` em cada um.

### `appendBlockChildren(blockId, children)`

Acrescenta novos blocos em lotes de `100`, respeitando limite da API.

### `replacePageContent(pageId, children)`

Estrategia atual de atualizacao completa:

1. apaga todos os blocos filhos antigos
2. recria todos os blocos novos

Vantagem: simples e previsivel.

Custo: comentarios ancorados e edicoes manuais no corpo podem se perder.

### `listChildPages(parentPageId)`

Lista blocos filhos e filtra apenas `child_page`.

### `findChildPageByTitle(parentPageId, title)`

Procura pagina filha com titulo exato.

## Exemplo concreto com estado atual

Hoje `npm run validate` retorna:

```txt
Documentos gerenciados: 5
- README.md
- visao-do-projeto.md
- piramide-de-eventos.md
- fluxo-geral.md
- como-comentar-e-acompanhar.md
```

Entao sync tenta manter, sob `NOTION_ROOT_PAGE_ID`:

1. pagina `_sync-index`
2. pagina `Publicacao para comunidade`
3. pagina `Visao do projeto`
4. pagina `Piramide de eventos`
5. pagina `Fluxo geral`
6. pagina `Como comentar e acompanhar`

Todas como filhas diretas da raiz, porque `SUMMARY.md` atual nao define aninhamento.

## Arquitetura minima recomendada

Projeto ja tem uma arquitetura minima boa. Melhor leitura vem de nomear camadas explicitamente assim:

1. `src/index.js`
   ponto de entrada e caso de uso `sync publicacao -> notion`
2. `src/sync-manifest.js`
   leitura estrutural local + estado tecnico do sync
3. `src/markdown-to-notion.js`
   tradutor de formato
4. `src/notion-client.js`
   gateway de infraestrutura remota

Em termos conceituais:

- entrada editorial: `SUMMARY.md` + `.md`
- transformacao: parser estrutural + parser Markdown
- estado tecnico: manifesto salvo em `_sync-index`
- saida remota: paginas e blocos no Notion

## Limites importantes para voce considerar em `publicacao/`

1. `SUMMARY.md` manda na ordem e hierarquia. Se algo nao estiver nele, sync nao considera.
2. Titulo final da pagina vem do `# titulo` dentro do arquivo, se existir. O titulo do link em `SUMMARY.md` pode ser sobrescrito por esse `#`.
3. Parser suporta Markdown simples. Tabelas, imagens complexas, HTML e listas aninhadas nao estao implementados.
4. Atualizacao de conteudo e por substituicao completa. Notion nao e lugar para editar manualmente texto sincronizado.
5. Pagina removida do conjunto gerenciado sera arquivada.

## Melhor forma de pensar `publicacao/`

Para organizar conteudo curado, trate `publicacao/` como camada editorial publicada:

1. `SUMMARY.md` define navegacao publica
2. cada arquivo `.md` define uma pagina publica autocontida
3. `# titulo` do arquivo deve ser considerado titulo canonico
4. mudancas manuais no Notion devem ser evitadas; mudanca deve nascer no repo

Se quiser evoluir depois sem aumentar muito complexidade, proximo passo natural e separar no codigo duas ideias que hoje convivem em `sync-manifest.js`:

1. `summary-reader`
2. `manifest-store`

Mas hoje isso ainda e opcional. Para tamanho atual, divisao existente segue pequena e legivel.
