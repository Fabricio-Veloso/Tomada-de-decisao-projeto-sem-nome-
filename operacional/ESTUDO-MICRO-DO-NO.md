# Estudo - Micro do no

## Objetivo

Registrar o estudo que aprofundou o funcionamento interno do no, sem manter este documento como quadro ativo de tarefas.

Este estudo serviu para descobrir dinamicas, registros intermediarios e requisitos futuros ligados a capturabilidade do encontro.

## Vinculo com o workboard principal

Este documento nasceu como desdobramento do bloco `produzir-primeiro-exemplo-completo-de-fluxo` registrado em `operacional/WORKBOARD.md`.

- data do estudo registrada no historico Git: 2026-04-27
- commit de referencia: `01ca545`

O recorte foi deliberado:

- congelar provisoriamente o macro da criacao de `DFI` ou `DFIP` ate a ocorrencia do no
- mergulhar no funcionamento interno do no antes de voltar ao macro entre um no e outro
- usar esse mergulho para descobrir dinamicas, registros intermediarios e requisitos minimos de um futuro MVP operacional

Esse papel exploratorio foi cumprido. As pendencias que nao foram concluidas foram movidas para `operacional/ideias-abertas.md` e `operacional/decisoes-em-aberto.md`.

## Contexto consolidado

- o macro fase 1 foi considerado suficientemente estavel para uso provisorio
- o micro do no passou temporariamente a ser a frente de maior ganho marginal para o projeto
- documentos intermediarios nao deveriam ser definidos cedo demais em abstrato
- as dinamicas deveriam vir primeiro, e os registros intermediarios deveriam emergir delas
- um caminho promissor para eficiencia futura seria desenhar nos legiveis para pipeline automatizada

## Leitura do problema estudado

O desafio central deixou de ser apenas descrever o fluxo em alto nivel.

O foco passou a ser entender como um no pode ser conduzido de modo que:

- participantes foquem na conversa
- contrapontos, alternativas, duvidas e respostas fiquem identificaveis
- artefatos intermediarios possam surgir durante o no sem exigir digitacao manual intensa
- o material produzido seja aproveitavel em tempo quase real e tambem apos o encontro

## Resultado consolidado

O estudo ajudou a consolidar um microfluxo inicial que depois foi absorvido por `biblioteca/dfibs/artefatos/dpn/estrutura-minima-de-dpn.md` e `biblioteca/dpns/no-meta.md`:

1. `Abertura formal do no`
2. `Checagem de quorum`
3. `Apresentacao inicial do propositor`
4. `Rodada de duvidas e esclarecimentos`
5. `Conversa de bar controlada`
6. `Rodada de contrapontos e propostas`
7. `Fechamento e encaminhamentos`

Tambem foram registradas dinamicas-base em `biblioteca/dinamicas/exemplos/`:

- `biblioteca/dinamicas/exemplos/abertura-formal-do-no.md`
- `biblioteca/dinamicas/exemplos/checagem-de-quorum.md`
- `biblioteca/dinamicas/exemplos/apresentacao-inicial-do-propositor.md`
- `biblioteca/dinamicas/exemplos/rodada-de-duvidas-e-esclarecimentos.md`
- `biblioteca/dinamicas/exemplos/conversa-de-bar-controlada.md`
- `biblioteca/dinamicas/exemplos/rodada-de-contrapontos-e-propostas.md`
- `biblioteca/dinamicas/exemplos/fechamento-e-encaminhamentos.md`

## Hipoteses de trabalho que sobreviveram ao estudo

- a melhor porta de entrada para o micro foi o desenho das dinamicas
- documentos intermediarios devem ser descobertos a partir do uso, nao impostos cedo demais
- tempos de fala bem definidos favorecem tanto a conducao humana quanto futura automacao
- bate-boca, resenha e fala fora de dinamica tendem a piorar a legibilidade do encontro para analise posterior
- automacao pos-no parece mais factivel cedo do que geracao de artefatos durante o no
- o arbitro deve preservar rito, tempo, fala e regras, sem concentrar sozinho classificacoes substantivas que alterem o resultado interpretativo do no

## Aprendizados sobre dinamicas e registros

O estudo indicou que cada dinamica precisa explicitar pelo menos:

- objetivo
- papeis e responsabilidades
- entregaveis de entrada e saida
- passo a passo
- tempo investido
- contexto de uso
- materiais relacionados
- notas e variacoes

Tambem ficou importante distinguir entregaveis documentais e abstratos.

Essa distincao reduz a tendencia de transformar todo resultado do encontro em novo documento. Algumas dinamicas produzem clareza, alinhamento, mapa de disputa, decisao de roteamento ou encaminhamento sem necessariamente produzir um artefato documental proprio naquele momento.

## Ideias que nao foram fechadas

As ideias abaixo nao devem ser tratadas como decisoes consolidadas:

- `unidades de captura`
- `eventos do no`
- `saidas intermediarias`
- `gramatica minima de intervencao`
- `quadro vivo do no`
- pipeline pos-no
- pipeline durante o no

Elas permanecem uteis como trilhas de investigacao futura, mas nao devem bloquear o checkpoint de publicacao.

## Observacoes finais

- o macro nao foi abandonado; ele foi apenas congelado enquanto o interior do no ficava mais inteligivel
- o desenho do micro pode alterar depois a forma ideal de pensar o macro entre nos
- a principal exigencia revelada nao e apenas documental; e tambem de capturabilidade e legibilidade operacional
- o no precisa funcionar bem para pessoas antes de ser otimizado para sistema
- a eficiencia desejada depende menos de escrever durante a reuniao e mais de estruturar o encontro para que os registros certos possam emergir dele
