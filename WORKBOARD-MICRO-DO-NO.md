# Workboard - Micro do no

## Vinculo com o workboard principal

Este workboard desdobra o bloco `produzir-primeiro-exemplo-completo-de-fluxo` registrado em `WORKBOARD.md`.

O recorte atual e deliberado:

- congelar provisoriamente o macro da criacao de `DFI` ou `DFIP` ate a ocorrencia do no
- mergulhar no micro do no antes de voltar ao macro entre um no e outro
- usar esse mergulho para descobrir dinamicas, registros intermediarios e requisitos minimos de um futuro `MVP`

## Objetivo

Organizar o aprofundamento do projeto no funcionamento interno do no, com foco em dinamicas, capturabilidade do encontro, saidas intermediarias e possibilidades de sintese posterior por pipeline.

## Contexto consolidado

- o macro fase 1 foi considerado suficientemente estavel para uso provisiorio
- o micro do no passou a ser a frente de maior ganho marginal para o projeto
- os documentos intermediarios ainda nao devem ser definidos cedo demais em abstrato
- as dinamicas devem vir primeiro, e os registros intermediarios devem emergir delas
- um caminho promissor para eficiencia futura e desenhar nos que sejam legiveis para pipeline automatizada

## Leitura atual do problema

O desafio central deixou de ser apenas descrever o fluxo em alto nivel.

Agora o foco e entender como um no pode ser conduzido de modo que:

- participantes foquem na conversa
- contrapontos, alternativas, duvidas e respostas fiquem identificaveis
- artefatos intermediarios possam surgir durante o no sem exigir digitacao manual intensa
- o material produzido seja aproveitavel em tempo quase real e tambem apos o encontro

## Estado atual do micro

Ja foi consolidado um primeiro esqueleto do no em `operacao/esqueleto-inicial-do-no.md`, com cinco etapas:

1. `Checagem de quorum`
2. `Exposicao inicial do propositor`
3. `Conversa de bar controlada`
4. `Rodada de leitura e resposta`
5. `Fechamento e encaminhamentos`

Tambem ja existem dinamicas-base registradas em `dinamicas/exemplos/` e um primeiro exemplo preenchido de `DPN` em `artefatos/dpn/estrutura-minima.md`.

## Hipoteses de trabalho atualmente aceitas

- a melhor porta de entrada para o micro e o desenho das dinamicas
- documentos intermediarios devem ser descobertos a partir do uso, nao impostos cedo demais
- o maior gargalo futuro nao e produzir documentos depois do no, mas produzir artefatos uteis durante o no
- tempos de fala bem definidos favorecem tanto a conducao humana quanto a futura automacao
- bate-boca, resenha e fala fora de dinamica tendem a piorar a legibilidade do encontro para analise posterior
- a automacao pos-no parece factivel cedo; a geracao durante o no exige desenho de interacao mais cuidadoso

## Frentes abertas

### 1. Dinamicas-base do no

Consolidar e refinar as dinamicas iniciais ja registradas, avaliando ordem, condicoes de uso, variacoes e limites.

### 2. Micro do micro

Definir como o no pode ser observado em unidades menores do que a propria dinamica.

Neste momento, tres ideias passaram a ser centrais:

- `unidades de captura`
- `eventos do no`
- `saidas intermediarias`

### 3. Gramaticas minimas de intervencao

Trabalhar com um recorte simples de tipos de intervencao que o no consiga produzir de forma identificavel.

Recorte minimo atual:

1. `apresentacao de ponto`
2. `duvida`
3. `contraponto`
4. `alternativa`
5. `resposta`
6. `encaminhamento`

### 4. Quadro vivo do no

Explorar a hipotese de que o principal artefato intermediario durante o encontro talvez nao seja um documento tradicional, mas um quadro vivo que acompanhe o estado dos pontos trabalhados.

Hipotese provisoria de conteudos do quadro:

- pontos levantados
- pontos em disputa
- alternativas propostas
- respostas dadas
- pontos ainda abertos
- encaminhamentos

Risco percebido:

- o quadro pode ficar generico demais se os pontos forem pequenos demais
- o quadro pode gerar poluicao visual se depender de texto explicativo longo
- isso sugere cuidado para nao introduzir cedo demais uma necessidade pesada de interface

### 5. Pipeline e MVP

Preparar terreno conceitual para um `MVP` que consiga:

- capturar falas relevantes com base em dinamicas e tempos definidos
- gerar artefatos intermediarios durante o no, quando possivel
- gerar sinteses e documentos de fechamento logo apos o encontro
- aproveitar o material gerado para abrir novos `DFIs`, ajustar documentos existentes ou preparar novos nos

## Blocos

| Bloco | Status | Prioridade | Motivo | Base atual |
|---|---|---|---|---|
| refinar-esqueleto-inicial-do-no | in_progress | alta | o projeto ja tem um esqueleto inicial, mas ainda precisa validar tempos, condicoes de uso e variacoes sem inflar demais o processo | `operacao/esqueleto-inicial-do-no.md`, `dinamicas/exemplos/` |
| definir-unidades-de-captura-do-no | ready | alta | sem unidades de captura mais claras, fica dificil pensar em artefatos intermediarios durante o encontro | este workboard |
| definir-eventos-minimos-do-no | ready | alta | o projeto precisa distinguir mudancas de estado do encontro para orientar pipeline e registros | este workboard |
| definir-saidas-intermediarias-do-no | ready | alta | ainda nao esta claro o que exatamente deve aparecer em tempo real durante o encontro | `operacao/esqueleto-inicial-do-no.md` |
| consolidar-gramatica-minima-de-intervencao | ready | alta | os seis tipos minimos parecem suficientes para comecar sem inflar o sistema | este workboard |
| explorar-hipotese-de-quadro-vivo | ready | media | o quadro vivo parece promissor, mas ainda carrega riscos de genericidade e poluicao visual | este workboard |
| mapear-requisitos-minimos-de-pipeline-pos-no | pending | media | a sintese automatizada logo apos o encontro parece uma frente tecnica plausivel e de alto valor | este workboard |
| mapear-requisitos-minimos-de-pipeline-durante-no | pending | alta | gerar artefatos durante o no parece ser o caminho de maior eficiencia, mas exige desenho de interacao mais cuidadoso | este workboard |
| desenhar-primeiro-mvp-operacional-do-no | pending | alta | depois de consolidar a teoria minima, o projeto deve testar um fluxo simples em ambiente controlado | workboard + artefatos atuais |

## Ordem sugerida

1. `definir-unidades-de-captura-do-no`
2. `definir-eventos-minimos-do-no`
3. `definir-saidas-intermediarias-do-no`
4. `consolidar-gramatica-minima-de-intervencao`
5. `explorar-hipotese-de-quadro-vivo`
6. `mapear-requisitos-minimos-de-pipeline-pos-no`
7. `mapear-requisitos-minimos-de-pipeline-durante-no`
8. `desenhar-primeiro-mvp-operacional-do-no`

## Observacoes atuais

- o projeto interrompeu propositalmente o aprofundamento do macro para ganhar clareza no micro
- o macro nao foi abandonado; ele foi apenas congelado temporariamente ate que o interior do no fique mais inteligivel
- ha uma boa chance de o desenho do micro alterar depois a forma ideal de pensar o macro entre nos
- a principal exigencia nova nao e apenas documental; e tambem de capturabilidade e legibilidade operacional
- o no precisa funcionar bem para pessoas e tambem ser analisavel por sistema, se a direcao de pipeline for mantida
- a eficiencia maxima desejada depende menos de escrever durante a reuniao e mais de estruturar o encontro para que os artefatos certos possam emergir dele

## Checklist por bloco

- objetivo do bloco explicitado
- relacao com dinamicas registrada
- relacao com futuras pipelines explicitada quando relevante
- impactos sobre artefatos intermediarios observados
- complexidade mantida em nivel compativel com um `MVP`
