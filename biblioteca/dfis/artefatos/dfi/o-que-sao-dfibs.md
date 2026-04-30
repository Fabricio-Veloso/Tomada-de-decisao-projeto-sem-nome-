# DFI - O que sao DFIBs

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: preparado para apresentar no no
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: aberto para consideracao
- passo atual: preparado para apresentar no no
- tem origem em: reorganizacao da antiga pasta de artefatos e necessidade de registrar dados brutos
- documentos relacionados: `biblioteca/dfibs/artefatos/mapa-de-artefatos.md`, `biblioteca/dfibs/artefatos/dfib/estrutura-minima-de-dfib.md`, `biblioteca/dfis/artefatos/dfi/o-que-sao-dfis.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`
- proximo passo: testar uso com estruturas de artefatos migradas
- data da ultima consolidacao:

## Titulo da interpretacao

DFIB como documento para informacoes brutas ou referenciais

## Visao rapida

`DFIB` significa Documento de Formalizacao Informacional Bruta.

Ele existe para guardar dados, estruturas, listas, modelos e informacoes referenciais que precisam estar no ecossistema documental, mas nao pedem desenvolvimento interpretativo completo.

## Contexto

Durante a reorganizacao, ficou claro que nem todo conteudo util do projeto e uma interpretacao.

Alguns documentos guardam dados diretos, estruturas praticas, modelos, medidas, custos, links ou informacoes referenciais. Forcar tudo isso dentro de `DFI` pode inflar interpretacoes e misturar conteudo bruto com raciocinio.

## Interpretacao central

O `DFIB` deve ser usado quando o foco principal do documento for guardar informacao bruta ou referencial.

Sua estrutura minima atual e:

1. `Identificacao`
2. `Posicao no encadeamento`
3. `Conteudo`

Exemplos possiveis:

- estrutura minima de um documento
- modelo preenchivel
- mapa de artefatos
- custos, medidas, quantidades, localizacao ou especificacoes de uma proposta
- dados usados por um DFI, DFIP, DPN, DPD ou DPC

O `DFIB` nao precisa defender uma interpretacao completa. Ele precisa ser claro, consultavel e referenciavel.

## Justificativa interpretativa

Separar `DFI` e `DFIB` evita dois problemas:

- transformar dados brutos em texto interpretativo artificial
- esconder informacoes importantes dentro de documentos argumentativos longos

No exemplo de uma proposta de piscina, o processo pode produzir `DFIPs`, contrapontos, propostas alternativas e um `DFI` consolidando a interpretacao final. O `DFIB` pode guardar dados como custo, tamanho, litros, localizacao, lista de equipamentos e outras especificacoes diretas.

Assim, `DFIs` e `DFIPs` podem referenciar o `DFIB`, e o `DFIB` pode apontar de volta para os documentos que explicam por que aqueles dados importam.

## Fragilidades, limites e riscos

- o `DFIB` pode virar deposito desorganizado se nao tiver titulo e escopo claros
- alguns dados brutos ainda podem precisar de contexto interpretativo em um `DFI` relacionado
- a fronteira entre dado bruto e interpretacao pode exigir julgamento caso a caso

## Relacao com outros artefatos

- `DFI`: interpreta ou consolida significado; pode referenciar `DFIBs`
- `DFIP`: prepara uma problematica; pode usar `DFIBs` como base factual
- `DPN`, `DPD` e `DPC`: podem usar `DFIBs` como modelos, estruturas ou referencias operacionais
- `DFIB`: guarda informacao bruta ou referencial sem tentar substituir interpretacao
