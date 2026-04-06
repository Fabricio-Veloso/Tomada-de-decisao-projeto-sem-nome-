# DFI - Protocolo provisorio de circulacao de DFI

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo:
  - rascunho
  - aberto para consideracao
  - em debate
  - CONSOLIDADO
  - arquivado
- passo atual:
  - DEFINICAO PROVISORIA
  - em teste
  - em revisao
  - consolidado
  - arquivado
- tem origem em: `operacao/mvp-do-fluxo-documental.md`
- documentos relacionados: `artefatos/dfi/estrutura-minima.md`, `backlog/linhagem-historico-e-referencias.md`
- proximo passo:
  - TESTAR COM EXEMPLO REAL
  - revisar
  - consolidar
  - bifurcar em novo DFI
  - arquivar
- data da ultima consolidacao:

## Titulo da interpretacao

Protocolo minimo para circulacao, revisao e consolidacao de DFIs

## Visao rapida

Este DFI transforma a intuicao geral do fluxo em um procedimento curto para criar, abrir, comentar, ajustar, bifurcar, consolidar e arquivar `DFIs`.

Ele nao tenta resolver toda a teoria da linhagem documental. Ele apenas define um circuito minimo testavel no ambiente de `MVP` ja escolhido.

## Contexto

Depois de definida uma proposta de `MVP` com `Google Drive` e `Google Docs`, ainda faltava uma camada curta de orientacao operacional.

Sem isso, o projeto corria o risco de ter um ambiente escolhido, mas sem criterio claro para dizer:

- quando um `DFI` esta pronto para circular
- quando um comentario vira ajuste local
- quando um comentario justifica novo `DFI`
- como um documento retorna ao fluxo e ao `no`

## Interpretacao central

Um `DFI` em circulacao deve ter ao menos:

- `Identificacao`
- `Posicao no encadeamento`
- `Titulo da interpretacao`
- `Visao rapida`
- `Contexto`
- `Interpretacao central`
- `Justificativa interpretativa`
- `Fragilidades, limites e riscos`
- `Relacao com outros artefatos`

Durante o MVP, a `Posicao no encadeamento` parece precisar de:

- `estado do fluxo`
- `passo atual`
- `tem origem em`
- `documentos relacionados`
- `proximo passo`
- `data da ultima consolidacao`

Estados de fluxo usados neste protocolo:

- `rascunho`
- `aberto para consideracao`
- `em debate`
- `consolidado`
- `arquivado`

Passo a passo minimo:

### 1. Criacao

Um `DFI` pode nascer:

- a partir de um `no`
- a partir de uma dinamica
- como resposta elaborada a outro `DFI`
- como formalizacao posterior de uma intuicao relevante

Ao nascer, o documento deve receber:

- titulo provisoriamente claro
- `estado do fluxo: rascunho`
- `passo atual: definicao provisoria`
- preenchimento inicial de `tem origem em`, quando isso fizer sentido

### 2. Preparacao para circular

Antes de abrir o documento, vale revisar ao menos:

- se a `Visao rapida` permite triagem
- se o `Contexto` esta suficiente
- se a `Interpretacao central` aparece com clareza
- se a `Posicao no encadeamento` nao depende apenas da memoria das pessoas

Quando esse minimo estiver aceitavel, o documento pode passar para:

- `estado do fluxo: aberto para consideracao`
- `passo atual: em circulacao`

### 3. Circulacao

O documento circula no publico previsto, preferencialmente por `Google Docs`, com comentarios e sugestoes.

Durante essa fase, comentarios tendem a cair em tres grupos:

- `correcao`: aponta erro, imprecisao ou ajuste local
- `contraponto`: discorda de parte relevante da interpretacao
- `extensao`: acrescenta elemento novo sem negar o nucleo do documento

### 4. Regra provisoria para decidir entre ajustar ou criar novo DFI

Parece razoavel ajustar o mesmo documento quando o comentario:

- corrige erro factual ou formulacao
- melhora clareza sem mudar a espinha dorsal do texto
- adiciona detalhe que reforca a mesma interpretacao central

Parece razoavel criar um novo `DFI` quando o comentario:

- muda a interpretacao central
- oferece contraproposta relevante
- corrige projecao de modo estrutural
- abre um subtema que ganhou autonomia suficiente

Nesses casos, o novo documento deve apontar em `tem origem em` para o anterior, ou para o artefato que de fato o originou.

### 5. Consolidacao

Quando a rodada de leitura e comentarios se encerra, alguem em papel de curadoria ou facilitacao deve decidir se o documento:

- volta para `rascunho`
- permanece `em debate`
- vai para `consolidado`
- gera um ou mais novos `DFIs`
- vai para `arquivado`

Ao consolidar, vale atualizar ao menos:

- `estado do fluxo`
- `passo atual`
- `documentos relacionados`, se surgiram novos documentos
- `proximo passo`
- `data da ultima consolidacao`

### 6. Retorno para o no

Quando houver `no` seguinte, o que volta para o encontro nao precisa ser o documento inteiro em todos os casos.

Na pratica, podem voltar:

- a `Visao rapida`
- os pontos centrais de dissenso
- os novos `DFIs` surgidos no intervalo
- o que ainda precisa de deliberacao coletiva

## Justificativa interpretativa

Este protocolo parece razoavel porque reduz a distancia entre teoria e uso real sem exigir uma camada tecnica sofisticada.

Ele ajuda a preservar diferencas importantes:

- nem todo comentario precisa virar novo documento
- nem toda mudanca precisa ficar resumida dentro do proprio `DFI`
- nem todo `DFI` precisa voltar inteiro para o proximo `no`

Ao mesmo tempo, ele mantem um minimo de legibilidade para leitores nao tecnicos por meio de campos como `estado do fluxo`, `passo atual`, `tem origem em` e `documentos relacionados`.

O campo `proximo passo` entra aqui para sinalizar o encaminhamento mais imediato do documento no fluxo.

Exemplos de preenchimento:

- `abrir para comentarios internos`
- `levar para o proximo no da chain`
- `consolidar depois da rodada atual`
- `gerar DFI especifico para contraponto`
- `arquivar apos registro de aprendizado`

## Fragilidades, limites e riscos

- os criterios entre ajuste local e novo `DFI` ainda sao provisoriamente simples
- a nocao de linhagem ainda nao distingue bem origem, derivacao e centralidade
- o uso de opcoes em `CAPS` pode ajudar preenchimento, mas tambem pode inflar vocabulario se crescer demais
- se `proximo passo` gerar mais ruido do que clareza, ele deve ser revisto

## Relacao com outros artefatos

- este DFI operacionaliza a direcao proposta em `operacao/mvp-do-fluxo-documental.md`
- este DFI depende da leitura registrada em `artefatos/dfi/estrutura-minima.md`
- este DFI pode gerar novos `DFIs` se o uso real revelar lacunas no criterio de bifurcacao, consolidacao ou retorno ao `no`
