# Workboard - Checkpoint de publicacao

## Objetivo

Organizar o checkpoint atual do repositorio para permitir curadoria da camada `publicacao/`, preparacao de um PR e envio do material ao Notion para leitura e comentarios da comunidade.

## Spec curta do checkpoint

- objetivo: sair do mergulho no micro do no e voltar a um quadro principal de trabalho
- contexto atual: a base documental ja possui artefatos, dinamicas, microfluxo inicial, camada de publicacao e automacao inicial para Notion
- entrada: documentos ja consolidados no repositorio, especialmente `publicacao/`, `dinamicas/`, `operacao/`, `artefatos/` e `registros/`
- saida esperada: selecao curada de textos para publicacao e PR com escopo claro
- restricoes: nao transformar hipoteses futuras em decisoes fechadas; nao inflar a camada publica com detalhe interno demais
- casos principais: revisar textos publicos, escolher o que entra no Notion, manter Git como fonte da verdade
- casos de borda: conteudo ainda experimental, siglas com pouco contexto, comentarios no Notion que podem se perder se a pagina for sobrescrita
- criterio de aceite: `publicacao/SUMMARY.md` representar a selecao curada e os textos estarem bons o suficiente para primeira leitura externa

## Estado atual

- `AGENTS.md` reflete o foco documental e conceitual do projeto
- o repositorio saiu do arquivao unico e esta organizado por dominio, artefatos, operacao, dinamicas, publicacao, backlog e registros
- `DFI`, `DFIP`, `DPN`, `DPD` e `DPC` possuem estruturas minimas ou direcoes registradas
- `artefatos/mapa-de-artefatos.md` diferencia o foco de `DFI`, `DFIP` e `DPN`
- `operacao/esqueleto-inicial-do-no.md` registra um microfluxo inicial de no com sete etapas
- `dinamicas/exemplos/` possui dinamicas-base alinhadas ao microfluxo atual
- `publicacao/` possui uma primeira camada curada para leitura externa
- `automacao/notion-sync/` possui uma automacao inicial para publicar `publicacao/` no Notion
- `registros/nos/14-04-2026.md` registra decisoes e proximos passos de um encontro real
- o antigo workboard do micro do no foi encerrado como quadro ativo e preservado como estudo em `ESTUDO-MICRO-DO-NO.md`

## Leitura rapida de status

- `pending`: ainda nao iniciado
- `ready`: suficientemente entendido para execucao
- `in_progress`: em andamento
- `done`: consolidado nesta iteracao
- `deferred`: registrado para investigacao posterior
- `blocked`: depende de decisao conceitual ou contexto adicional

## Blocos ativos

| Bloco | Status | Prioridade | Motivo | Base atual |
|---|---|---|---|---|
| curar-publicacao-para-pr-e-notion | ready | alta | o repositorio ja possui material suficiente para uma primeira camada publica, mas o usuario precisa selecionar ideias e textos antes do PR | `publicacao/`, `publicacao/SUMMARY.md` |
| revisar-consistencia-da-camada-publica | ready | alta | textos publicos precisam reduzir siglas, evitar detalhe interno excessivo e manter uma narrativa clara para a comunidade | `publicacao/README.md`, `publicacao/guia-operacional-para-publicar-dfis.md`, `publicacao/em-circulacao/` |
| preparar-pr-de-publicacao | pending | alta | depois da curadoria, o PR deve mostrar claramente o que sera levado ao Notion e comentado pela comunidade | `publicacao/`, `automacao/notion-sync/` |
| consolidar-feedback-do-notion | pending | media | comentarios externos devem voltar para o repositorio como ajustes, novas ideias ou decisoes em aberto | `publicacao/guia-operacional-para-publicar-dfis.md`, `backlog/` |

## Blocos concluidos ou encerrados

| Bloco | Status | Resultado | Base atual |
|---|---|---|---|
| reescrever-agents-para-fase-documental | done | instrucoes do projeto passaram a refletir fase documental e conceitual | `AGENTS.md` |
| separar-arquivao-em-estrutura-inicial | done | conhecimento foi separado por dominio, artefatos, operacao, dinamicas e backlog | pastas atuais |
| revisar-fronteiras-entre-dfi-dfip-e-dpn | done | distincao inicial entre interpretacao, problema e estrutura do no ficou mais explicita | `artefatos/mapa-de-artefatos.md` |
| criar-mapa-de-artefatos-e-relacoes | done | mapa rapido de artefatos foi criado | `artefatos/mapa-de-artefatos.md` |
| formalizar-modelo-de-cabecalho-documental | done | cabecalho provisorio de documentos internos foi testado | `dfis/cabecalho-documental.md` |
| propor-mvp-de-fluxo-documental | done | fluxo documental inicial foi emulado antes de plataforma propria | `operacao/mvp-do-fluxo-documental.md` |
| definir-protocolo-provisorio-de-circulacao-de-dfi | done | protocolo minimo para abrir, comentar, ajustar e bifurcar DFIs foi registrado | `operacao/protocolo-provisorio-de-circulacao-de-dfi.md` |
| produzir-modelo-minimo-de-dfi | done | modelo copiavel de DFI foi criado | `dfis/modelo-minimo-de-dfi.md` |
| consolidar-estrutura-minima-de-dfi | done | estrutura minima de DFI foi consolidada | `artefatos/dfi/estrutura-minima.md` |
| consolidar-estrutura-minima-de-dfip | done | estrutura minima de DFIP ganhou recorte operacional | `artefatos/dfip/estrutura-minima.md` |
| consolidar-estrutura-minima-de-dpn | done | DPN ganhou estrutura minima reproduzivel | `artefatos/dpn/estrutura-minima.md` |
| produzir-primeiro-exemplo-completo-de-fluxo | done | bloco cumpriu sua funcao exploratoria ao gerar microfluxo, dinamicas-base e requisitos futuros; o restante fica como backlog | `ESTUDO-MICRO-DO-NO.md`, `operacao/esqueleto-inicial-do-no.md`, `dinamicas/exemplos/` |
| criar-camada-curada-de-publicacao | done | primeira porta de entrada publica foi criada | `publicacao/` |
| automatizar-sync-curado-para-notion | done | MVP de sync para Notion foi registrado | `automacao/notion-sync/` |

## Blocos adiados para depois da publicacao

| Bloco | Status | Motivo | Base atual |
|---|---|---|---|
| definir-politica-de-nomenclatura-e-siglas | deferred | importante, mas nao deve bloquear primeira publicacao se os textos publicos forem claros | `dominio/glossario.md`, `dfis/cabecalho-documental.md` |
| decidir-estrategia-dos-dois-tipos-de-conteudo | deferred | a pasta `publicacao/` ja cobre a primeira camada acessivel; a camada aprofundada pode ser definida depois do feedback | `dominio/visao-geral.md`, `backlog/ideias-abertas.md` |
| definir-regra-de-precedencia-entre-valores-chain-no-e-dinamica | deferred | ainda relevante para maturidade interna, mas nao essencial ao PR de publicacao | `dominio/chains.md`, `dominio/nos.md`, `operacao/regras-gerais.md` |
| definir-estados-de-maturidade-dos-documentos | deferred | necessario para governanca futura, mas pode aguardar a primeira rodada de uso externo | repositorio atual |
| explicitar-capacidade-assincrona-na-preparacao-de-nos | deferred | ja existe DFI provisoria; falta decidir incorporacao operacional | `dfis/capacidade-assincrona-na-preparacao-de-nos.md` |
| incorporar-contrapropostas-e-projecoes-no-fluxo-documental | deferred | ja existe DFI provisoria; falta mecanismo concreto | `dfis/contrapropostas-projecoes-e-exame-por-pares.md` |
| investigar-mecanismos-de-retomada-de-contexto-entre-encontros | deferred | ja existe DFI provisoria; falta escolher se vira documento, dinamica ou procedimento | `dfis/reconstrucao-de-contexto-entre-encontros.md` |
| revisar-redundancias-entre-dominio-operacao-e-artefatos | deferred | limpeza util, mas secundaria diante da publicacao | `dominio/`, `operacao/`, `artefatos/` |

## Ordem sugerida

1. `curar-publicacao-para-pr-e-notion`
2. `revisar-consistencia-da-camada-publica`
3. `preparar-pr-de-publicacao`
4. `consolidar-feedback-do-notion`
5. retomar blocos adiados conforme o feedback revelar prioridade

## Observacoes atuais

- o projeto tem material suficiente para uma primeira rodada de leitura externa
- a prioridade agora e curadoria, nao abrir novas frentes conceituais internas
- `publicacao/` deve funcionar como porta de entrada, nao como espelho completo do repositorio
- Notion deve ser tratado como interface de leitura e comentarios; Git continua sendo fonte da verdade
- comentarios externos devem virar ajuste de texto, decisao em aberto ou novo item de backlog, conforme o caso
- o estudo do micro do no preserva aprendizados, mas nao deve continuar competindo com este workboard como quadro ativo

## Checklist para o proximo PR

- `publicacao/SUMMARY.md` lista apenas textos escolhidos para a primeira rodada
- textos publicos explicam siglas quando elas aparecem
- textos publicos nao dependem de leitura previa do repositorio interno
- limites da fase atual estao claros
- Notion aparece como interface, nao como fonte principal
- feedback esperado da comunidade esta descrito de forma simples
