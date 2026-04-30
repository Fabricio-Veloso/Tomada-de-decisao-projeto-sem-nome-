# DFIB - Estrutura minima de DPN

## Identificacao

- tipo: DFIB (Documento de Formalizacao Informacional Bruta)
- publico: interno
- status: consolidado
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: estrutura minima
- tem origem em: estudo do micro do no
- documentos relacionados: `biblioteca/dfis/artefatos/dpn/o-que-sao-nos.md`, `biblioteca/dpns/no-meta.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`
- proximo passo: revisar quando DPN voltar a ser frente ativa
- data da ultima consolidacao: 2026-04-30

## Objetivo do documento

Definir a estrutura minima de um `DPN` (`Documento de Projeto de No`).

O `DPN` deve registrar como um no deve ser montado e conduzido, sem repetir definicoes ja estabilizadas em outros documentos quando um link resolver.

## Logica semantica das secoes

| Secao | Objetivo real | O que ela quer saber |
| --- | --- | --- |
| `Identificacao` | permitir triagem | que documento e, para quem e, em que estado esta |
| `Objetivo do no` | dar finalidade ao encontro | para que este no existe |
| `Documento-alvo do no` | fixar foco | qual DFI, DFIP, DPN, dinamica ou material sera trabalhado |
| `Papeis` | distribuir responsabilidade | quem arbitra, cria, propoe ou executa funcoes relevantes |
| `Participantes e quorum` | definir condicao de inicio | quem precisa estar presente e qual dinamica de checagem sera usada |
| `Regras minimas` | explicitar compromisso | quais regras ja aceitas orientam a participacao |
| `Dinamicas em ordem` | dar forma reproduzivel | quais dinamicas compoem o no e em que sequencia |
| `Saidas esperadas` | explicitar entregaveis | o que deve existir ao final do no |
| `Materiais relacionados` | apoiar preparacao | que documentos devem ser lidos ou usados |

## Exemplo preenchido

```md
# DPN - No de leitura de interpretacao em circulacao

## Identificacao

- tipo: DPN (Documento de Projeto de No)
- publico: interno
- status: preparado para apresentar no no
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: rascunho
- passo atual: pronto para uso no no
- tem origem em: DFIP ou demanda que justificou o no
- documentos relacionados: DFI, DFIP, dinamicas e materiais usados no no
- proximo passo: realizar no
- data da ultima consolidacao: a definir

## Objetivo do no

Examinar uma interpretacao ou problematica ja colocada em circulacao por `DFI` ou `DFIP`, identificando duvidas centrais, contrapontos relevantes e encaminhamentos para os proximos passos do fluxo.

## Documento-alvo do no

- `DFI` ou `DFIP` em circulacao a definir no DPN pratico de cada encontro

## Dinamicas em ordem

1. `Abertura formal do no`
2. `Checagem de quorum`
3. `Apresentacao inicial do propositor`
4. `Rodada de duvidas e esclarecimentos`
5. `Rodada de contrapontos e propostas`
6. `Fechamento e encaminhamentos`

Ordem sugerida:

- a abertura formal marca o inicio oficial, relembra disciplina minima de fala e explicita papeis
- a checagem de quorum confirma se o no pode acontecer
- a apresentacao inicial cria base comum minima
- a rodada de duvidas e esclarecimentos limpa ambiguidades antes do exame critico
- a rodada de contrapontos e propostas organiza exame critico, alternativas e possiveis caminhos derivados
- o fechamento consolida clarificacoes, divergencias e proximos passos

## Papeis

- papeis minimos definidos em `biblioteca/dfis/nos-e-papeis/papeis-minimos-em-nos.md`
- especificidades deste no registradas aqui sem repetir definicoes longas

## Participantes e quorum

- participantes necessarios presentes, quando o no depender de quorum especifico
- checagem feita por `biblioteca/dinamicas/exemplos/checagem-de-quorum.md`, quando aplicavel

## Regras minimas

- regras minimas referenciadas em `biblioteca/dfis/nos-e-papeis/regras-minimas-de-participacao-em-nos.md`
- excecoes ou acrescimos especificos do no registrados aqui

## Saidas esperadas

- clarificacao minima do foco trabalhado no no
- lista de duvidas, contrapontos e tensoes que permaneceram relevantes
- indicacao do que pode ser resolvido por ajuste no documento atual
- identificacao de pontos que merecem novo `DFI`
- encaminhamento para novo no, consolidacao ou arquivamento, quando couber

## Materiais relacionados

- `biblioteca/dfis/nos-e-papeis/papeis-minimos-em-nos.md`
- `biblioteca/dfis/nos-e-papeis/regras-minimas-de-participacao-em-nos.md`
- `biblioteca/dinamicas/exemplos/`
```

## Direcao ja registrada

- um no formal deve poder ser descrito por um documento proprio
- esse documento tende a precisar de objetivo, dinamicas, papeis, quorum, entregaveis e regras do encontro

## Recorte consolidado

- o `DPN` descreve a estrutura reproduzivel de um no
- ele pode ser montado ou ajustado a partir de um `DFIP`
- ele nao substitui o `DFIP`, porque nao existe principalmente para articular a problematica previa
- ele nao substitui o `DFI`, porque nao existe principalmente para formalizar a interpretacao produzida pelo encontro

## Para que serve

- registrar a estrutura de um no de modo reproduzivel
- compilar objetivo, documento-alvo, dinamicas, papeis, quorum, regras minimas e saidas esperadas
- permitir catalogacao, comparacao, reutilizacao e adaptacao de nos

## Para que nao serve principalmente

- substituir a articulacao do problema que o no vai tratar
- substituir a formalizacao interpretativa do que emerge do encontro

## Relacao com outros artefatos

- um `DPN` pode ser montado ou ajustado a partir de um `DFIP`
- um `DPN` pode apontar para dinamicas e outros documentos de apoio
- um `DPN` pode dar origem a `DFIs` quando o no acontecer, mas nao se confunde com eles

## Estrutura minima sugerida

No estado atual do projeto, um `DPN` parece precisar destes blocos centrais.

1. `Identificacao`
2. `Objetivo do no`
3. `Documento-alvo do no`
4. `Papeis`
5. `Participantes e quorum`
6. `Regras minimas`
7. `Dinamicas em ordem`
8. `Saidas esperadas`
9. `Materiais relacionados`

## Descricao dos blocos

### 1. Identificacao

Deve informar que o documento e um `DPN`, para quem ele vale, seu status e sua regra de uso de siglas.

Esse bloco permite triagem rapida e evita que um roteiro de no seja confundido com `DFI`, `DFIP` ou registro de encontro.

### 2. Objetivo do no

Deve explicar de forma curta para que esse no existe.

Esse bloco ajuda a diferenciar um no de outro mesmo quando eles compartilham dinamicas parecidas.

Tambem pode apontar, quando fizer sentido, para o `DFIP` que motivou sua montagem.

### 3. Documento-alvo do no

Deve indicar qual documento ou material sera trabalhado no encontro.

Esse alvo pode ser um `DFI`, `DFIP`, `DPN`, dinamica, registro ou outro material relevante.

### 4. Papeis

Deve apontar os papeis usados no no.

Quando os papeis forem os minimos ja registrados, o DPN deve referenciar `biblioteca/dfis/nos-e-papeis/papeis-minimos-em-nos.md` e registrar apenas especificidades.

### 5. Participantes e quorum

Deve indicar participantes necessarios, participantes facultativos e criterio de inicio.

Quando houver quorum especifico, o DPN deve apontar para `biblioteca/dinamicas/exemplos/checagem-de-quorum.md` ou para dinamica equivalente.

### 6. Regras minimas

Deve indicar quais regras de participacao valem para o no.

Quando bastar o conjunto minimo, o DPN deve apontar para `biblioteca/dfis/nos-e-papeis/regras-minimas-de-participacao-em-nos.md` e registrar apenas excecoes ou acrescimos.

### 7. Dinamicas em ordem

Este e o nucleo do `DPN`.

Deve registrar:

- quais dinamicas compoem o no
- em que ordem elas entram
- se alguma dinamica e obrigatoria, opcional ou adaptavel

O objetivo aqui e permitir reproducao minimamente confiavel do no, e nao apenas listar tecnicas soltas.

### 8. Saidas esperadas

Deve deixar claro o que esse no busca produzir ao final.

As saidas podem variar, por exemplo, entre:

- clarificacoes
- decisoes
- criterios
- registros para um `DFI`
- encaminhamentos para novos documentos ou novos nos

### 9. Materiais relacionados

Deve listar os documentos, dinamicas, registros ou referencias necessarias para preparar ou conduzir o no.

## Limites da estrutura

- o `DPN` nao precisa capturar toda a riqueza contextual do problema, porque isso tende a ficar melhor em `DFIP`
- o `DPN` nao deve virar manual excessivamente detalhado se isso prejudicar reutilizacao
- nem todo no precisa ter regras complexas para ser reproduzivel
- se a reproducao depender demais de contexto tacito, o documento ainda estara insuficiente
- o DPN deve preferir links para papeis, regras e dinamicas ja documentadas, em vez de duplicar texto

## Em aberto

- qual grau de detalhe deve ser exigido na descricao das dinamicas
- quando um `DPN` deve registrar variantes de aplicacao do mesmo no
- como diferenciar, no futuro, versoes normais, experimentais e meta
