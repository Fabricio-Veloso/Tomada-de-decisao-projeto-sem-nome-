# DFI - Consolidacao de interpretacoes em DFIs

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: preparado para apresentar no no
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: aberto para consideracao
- passo atual: preparado para apresentar no no
- tem origem em: reorganizacao de conteudo conceitual sobre DFIs e discussao sobre chains, nos e DFIPs
- documentos relacionados: `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`, `biblioteca/dfis/modelo-minimo-de-dfi.md`, `biblioteca/dfis/fluxo-documental/circulacao-revisao-e-consolidacao-de-dfis.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`
- proximo passo: usar para orientar secoes opcionais-contextuais em DFIs
- data da ultima consolidacao:

## Titulo da interpretacao

Quando um DFI consolida material interpretativo vindo de um processo maior

## Visao rapida

Nem todo DFI precisa nascer como texto isolado.

Um DFI pode consolidar partes relevantes de um processo interpretativo maior, como uma chain, uma sequencia de nos ou um conjunto de DFIPs, preservando contrapontos, propostas alternativas e reformulacoes importantes quando isso ajudar a entender a interpretacao consolidada.

## Contexto

Chains e nos podem produzir varios documentos intermediarios.

Durante esse processo, surgem contrapontos, alternativas, reformulacoes, criterios e pontos de contexto que talvez nao caibam bem em um unico `DFIP`, mas tambem nao deveriam se perder quando uma interpretacao final ou provisoria for consolidada.

## Interpretacao central

No estado atual, parece melhor nao criar um novo tipo de DFI para interpretacoes consolidadas.

A solucao mais simples e manter `DFI` como documento interpretativo geral e permitir secoes opcionais-contextuais quando o DFI precisar preservar a memoria relevante do processo.

Secoes opcionais sugeridas:

- `Origem do processo interpretativo`
- `Contrapontos relevantes considerados`
- `Propostas alternativas consideradas`
- `Reformulacoes importantes`
- `Material absorvido de documentos anteriores`

Essas secoes nao devem ser obrigatorias em todo DFI. Elas servem quando a ausencia desse registro deixaria a consolidacao opaca demais.

## Justificativa interpretativa

Criar um novo tipo de documento para cada caso de consolidacao aumentaria a complexidade cedo demais.

Como o DFI ja formaliza interpretacoes, ele consegue absorver essa funcao se o modelo permitir secoes opcionais. Isso mantem a simplicidade de um tipo principal para interpretacoes e preserva a capacidade de registrar partes importantes do processo.

## Fragilidades, limites e riscos

- secoes opcionais podem inflar documentos simples se forem usadas sem necessidade
- consolidar um processo grande em um DFI pode apagar divergencias importantes se a curadoria for ruim
- pode ser necessario criar tipos novos no futuro se o uso real mostrar fronteiras mais fortes

## Relacao com outros artefatos

- este DFI justifica as secoes opcionais-contextuais no modelo de DFI
- `DFIPs` podem servir como material absorvido em um DFI de consolidacao
- uma chain pode gerar um DFI de consolidacao ao final ou durante seu processo
- `DFIBs` podem guardar dados brutos usados pelo DFI consolidado
