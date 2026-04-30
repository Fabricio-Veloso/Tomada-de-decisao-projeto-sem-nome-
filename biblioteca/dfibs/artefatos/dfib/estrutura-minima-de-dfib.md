# DFIB - Estrutura minima de DFIB

## Identificacao

- tipo: DFIB (Documento de Formalizacao Informacional Bruta)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: definicao provisoria
- tem origem em: necessidade de registrar dados brutos sem transforma-los em interpretacao
- documentos relacionados: `biblioteca/dfis/artefatos/dfi/o-que-sao-dfibs.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`
- proximo passo: usar como referencia para criar e revisar DFIBs
- data da ultima consolidacao: 2026-04-30

## Conteudo

Um `DFIB` deve registrar informacao bruta, estrutural ou operacional que precisa ser consultada por outros documentos sem virar interpretacao propria.

A estrutura minima de um `DFIB` e:

1. `Identificacao`
2. `Posicao no encadeamento`
3. `Conteudo`

O `Conteudo` pode assumir formatos diferentes conforme a funcao do documento:

- lista de opcoes
- mapa de navegacao
- tabela de referencia
- estrutura minima de artefato
- registro de blocos concluidos
- registro de itens em aberto
- especificacao bruta ainda nao interpretada

O `DFIB` nao deve tentar defender uma interpretacao. Quando o documento precisar explicar sentido, justificar uma leitura ou consolidar entendimento, o formato tende a ser `DFI`.

Quando o `DFIB` servir como repertorio de opcoes para uma secao de outro documento, o documento que usa a secao deve apontar para ele em vez de repetir todas as opcoes no corpo principal.
