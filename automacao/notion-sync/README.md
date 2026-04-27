# Notion Sync

## Spec curta

- objetivo: publicar `publicacao/` no Notion com `Git` como fonte da verdade
- contexto atual: repositorio documental com branch curada separada para leitura publica
- entrada: arquivos `.md` listados em `publicacao/SUMMARY.md`
- saida esperada: pagina raiz no Notion com subpaginas sincronizadas
- restricoes: automacao isolada fora da raiz principal; conteudo do Notion pode ser sobrescrito pelo repo
- casos principais: criar, atualizar e arquivar paginas sincronizadas
- casos de borda: rename, reordenacao de paginas ja existentes, suporte parcial de Markdown e comentarios em blocos reescritos
- criterio de aceite: push na `main` atualiza apenas camada `publicacao/`

## Estrutura

- `src/index.js`: orquestracao do sync
- `src/notion-client.js`: chamadas para API do Notion
- `src/markdown-to-notion.js`: parser Markdown -> blocos Notion
- `src/sync-manifest.js`: leitura de `SUMMARY.md` e manifesto tecnico
- `ARQUITETURA.md`: fluxo detalhado e arquitetura minima do projeto

## Variaveis esperadas

- `NOTION_TOKEN`: token da integracao no Notion
- `NOTION_ROOT_PAGE_ID`: pagina raiz onde as subpaginas publicadas serao criadas
- `NOTION_SYNC_ROOT_DIR`: opcional, padrao `publicacao`

## Como configurar no Notion

1. criar uma integracao interna no Notion
2. compartilhar a pagina raiz com essa integracao
3. copiar o token da integracao para `NOTION_TOKEN`
4. copiar o ID da pagina raiz para `NOTION_ROOT_PAGE_ID`

## Como o sync funciona

1. le `publicacao/SUMMARY.md`
2. monta arvore de paginas desejada
3. cria pagina tecnica `_sync-index` sob a pagina raiz, se ela ainda nao existir
4. usa esse indice tecnico para mapear `source_path -> page_id`
5. atualiza apenas paginas cujo hash de conteudo mudou
6. arquiva paginas removidas do sumario

## Organizacao fisica no repo

Voce pode criar pastas dentro de `publicacao/` e referenciar arquivos nelas pelo `SUMMARY.md`.

Exemplo:

```md
- [Texto A](debates/texto-a.md)
- [Texto B](cadernos/texto-b.md)
```

Isso funciona porque o sync le cada arquivo a partir do `relativePath` definido no sumario. Entao caminhos como `debates/texto-a.md` ou `cadernos/texto-b.md` sao aceitos normalmente.

Em outras palavras:

- a estrutura fisica dentro de `publicacao/` pode usar subpastas
- os arquivos nao precisam ficar todos na raiz de `publicacao/`

## Hierarquia no Notion

Voce tambem pode criar hierarquia de subpaginas no Notion usando indentacao no `SUMMARY.md`.

Exemplo:

```md
- [Debates](debates/README.md)
  - [Texto A](debates/texto-a.md)
  - [Texto B](debates/texto-b.md)
- [Cadernos](cadernos/README.md)
  - [Texto C](cadernos/texto-c.md)
```

Com esse formato:

- `Debates` vira uma pagina filha da raiz
- `Texto A` e `Texto B` viram subpaginas de `Debates`
- `Cadernos` vira outra pagina filha da raiz
- `Texto C` vira subpagina de `Cadernos`

Importante:

- no Notion, isso nao vira "pasta" real; vira pagina-pai com paginas filhas
- a ordem e a hierarquia publicadas seguem o que estiver em `SUMMARY.md`
- se um item mudar de pai no `SUMMARY.md`, o sync atual tende a arquivar pagina antiga e recriar no novo lugar

## Processo editorial com comentarios

Enquanto a curadoria manual for o modo principal, o fluxo mais seguro e tratar o repositorio como fonte oficial e usar o Notion como janela controlada de leitura e comentario.

Fluxo recomendado:

1. publicar texto a partir do repo
2. abrir uma janela de comentarios no Notion
3. evitar rodar sync nesse texto durante essa janela, se houver edicoes manuais no corpo
4. consolidar manualmente as alteracoes aprovadas de volta no arquivo do repo
5. depois disso, voltar a sincronizar normalmente

Observacoes importantes:

- comentarios ancorados em blocos do texto podem se perder se a pagina for reescrita pelo sync
- o sync atual substitui integralmente o conteudo da pagina quando detecta mudanca relevante
- por isso, comentarios no Notion funcionam melhor como insumo editorial temporario do que como historico permanente do texto sincronizado

## Limites do MVP

- suporte inicial de Markdown: titulos, paragrafos, listas, links, negrito, italico, codigo inline, blocos de codigo, quotes e divisores
- reordenacao de paginas ja existentes no Notion nao e totalmente garantida pela API
- comentarios ancorados em blocos reescritos podem se perder quando a pagina e atualizada por substituicao completa do conteudo
- alteracoes manuais no texto sincronizado podem ser sobrescritas no proximo sync

## Validacao local

Para validar parser, leitura do sumario e arquivos sem chamar API do Notion:

```bash
npm run validate
```
