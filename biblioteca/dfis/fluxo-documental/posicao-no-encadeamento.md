# DFI - Posicao no encadeamento

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: consolidado
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: referencia conceitual
- tem origem em: dificuldade de legibilidade causada por listas de opcoes dentro da propria secao
- documentos relacionados: `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`, `biblioteca/dfis/modelo-minimo-de-dfi.md`
- proximo passo: orientar revisao dos modelos e documentos que usam esta secao
- data da ultima consolidacao: 2026-04-30

## Titulo da interpretacao

Funcao da secao Posicao no encadeamento

## Visao rapida

A secao `Posicao no encadeamento` existe para mostrar onde um documento esta no fluxo documental e como ele se relaciona com outros documentos.

Ela nao deve virar uma lista de todas as opcoes possiveis. O documento deve mostrar apenas os valores atualmente escolhidos e apontar para um DFIB de opcoes quando o leitor precisar entender o repertorio disponivel.

## Contexto

O projeto passou a usar documentos encadeados: um DFI pode nascer de outro DFI, um DFIP pode preparar um no, um DPN pode organizar esse no e novos DFIs podem consolidar o que emergiu depois.

Sem uma camada minima de localizacao, o leitor depende de memoria oral, historico do Git ou contexto externo para entender origem, relacoes e proximo passo de cada documento.

A primeira tentativa de resolver isso colocou listas de opcoes dentro da propria secao e destacou a escolha em `CAPS`. Essa solucao ajudou no preenchimento inicial, mas piorou a leitura dos documentos reais.

## Interpretacao central

`Posicao no encadeamento` deve ser uma secao curta de navegacao e rastreabilidade.

Ela deve responder, de forma direta:

- em que estado o documento esta
- qual e o passo atual dele no fluxo
- de onde ele veio
- com quais documentos ele se relaciona
- qual tende a ser o proximo passo
- quando ocorreu a ultima consolidacao relevante, se houver

As opcoes possiveis devem ficar em um `DFIB` proprio: `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`.

Nos documentos reais, a secao deve mostrar apenas os valores selecionados. Isso reduz ruido, melhora leitura e preserva a possibilidade de padronizacao.

## Justificativa interpretativa

O ganho principal da secao e tornar a linhagem documental legivel sem transformar cada documento em historico completo.

Ela tambem ajuda a diferenciar documentos que estao em rascunho, circulacao, consolidacao, referencia conceitual, uso pratico ou arquivo historico.

Quando uma secao tiver muitas opcoes possiveis, a mesma logica pode ser reutilizada: o documento principal registra o valor escolhido e aponta para um DFIB de opcoes, em vez de carregar todo o repertorio dentro da secao.

## Fragilidades, limites e riscos

- a taxonomia de estados e passos ainda pode evoluir com o uso real
- documentos antigos podem manter formatos diferentes ate serem revisados
- excesso de campos pode voltar a tornar a secao pesada
- a secao nao substitui historico de commits, atas, registros de no ou documentos de consolidacao

## Relacao com outros artefatos

- modelos de `DFI`, `DFIP`, `DPN`, `DPD`, `DPC` e `DFIB` devem apontar para esta interpretacao quando usarem a secao
- o repertorio de valores fica no DFIB de opcoes, nao nos documentos finais
- workboards e registros operacionais podem usar a mesma logica quando precisarem marcar estado e linhagem
