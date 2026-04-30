# DFIB - Estrutura minima de DFI

## Identificacao

- tipo: DFIB (Documento de Formalizacao Informacional Bruta)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: definicao provisoria
- tem origem em: `biblioteca/dfis/cabecalho-documental.md`
- documentos relacionados: `operacional/vocabulario-para-estrutura-de-dfi.md`, `biblioteca/dfis/modelo-minimo-de-dfi.md`, `biblioteca/dfis/artefatos/dfi/consolidacao-de-interpretacoes-em-dfis.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`
- proximo passo: levar para uso do modelo minimo de DFI
- data da ultima consolidacao: 2026-04-30

## Titulo da interpretacao

Estrutura minima viavel para um DFI geral

## Visao rapida

Este DFI consolida a leitura atual sobre quais secoes parecem minimamente necessarias para que um `DFI` seja legivel, examinavel por pares e util no fluxo documental.

Ele tambem assume, por enquanto, que um bom `DFI` precisa servir a duas leituras: uma rapida, para triagem, e outra aprofundada, para exame.

## Contexto

O repositorio ja reconhece `DFIs` como artefatos centrais do projeto, mas sua estrutura minima ainda nao estava fechada.

Ao longo desta sessao, surgiram varias pistas relevantes:

- a necessidade de baratear assimilacao com uma secao curta de entrada
- a necessidade de mostrar localizacao do documento no fluxo
- a necessidade de evitar depender apenas de `Git` para historicidade legivel
- a necessidade de nao transformar o `DFI` em formulario grande demais

O projeto tambem produziu um `DFI` proprio sobre cabecalho documental. Isso tornou possivel usar esse material como insumo para esta consolidacao, em vez de manter as duas conversas totalmente separadas.

## Interpretacao central

Definir uma estrutura minima viavel para `DFIs` que favoreca:

- leitura rapida inicial
- exame por pares
- boa relacao com o fluxo entre documentos
- clareza sem excesso de formalizacao

Direcao ja registrada:

- o documento deve ter tom de escrita minimamente adequado
- a organizacao interna precisa favorecer clareza, precisao e boa conducao do conteudo
- o DFI deve ajudar a congelar uma interpretacao no tempo para permitir exame por pares
- palavras importantes para o contexto tratado devem ser definidas com clareza quando isso reduzir ambiguidade

No estado atual do projeto, parece razoavel que um `DFI` tenha uma estrutura curta, mas nao rasa.

Ele precisa permitir duas leituras diferentes:

- uma leitura rapida, para a pessoa decidir se aquele documento merece atencao imediata
- uma leitura detalhada, para a pessoa examinar a interpretacao com mais cuidado

Por isso, faz sentido distinguir:

- cabecalho e posicao no encadeamento
- visao rapida
- desenvolvimento principal

## Justificativa interpretativa

Essa estrutura parece boa neste momento porque distribui funcoes diferentes sem inflar o documento.

O `DFI` nao precisa ser apenas um texto corrido. Ele tambem precisa ajudar o leitor a decidir rapidamente se vale investir tempo naquele documento.

Ao mesmo tempo, ele nao deve esconder o raciocinio central atras de metadados demais. Por isso, as secoes de cabecalho e de `posicao no encadeamento` devem ser curtas, e a `visao rapida` deve servir apenas como porta de entrada, nao como substituta do desenvolvimento principal.

Outro ponto importante e que o fluxo documental comecou a exigir uma camada minima de legibilidade sobre origem, relacoes e momento do documento. Isso justifica a existencia de `posicao no encadeamento` sem transformar essa secao em historico completo.

## Estrutura minima sugerida

### 1. Identificacao

Camada curta para informar o que o documento e.

Campos ja aceitos como boa direcao provisoria:

- `tipo`
- `publico`
- `status`
- `uso de siglas`

### 2. Posicao no encadeamento

Camada curta para situar o documento no ciclo documental.

Campos atualmente sugeridos:

- `estado do fluxo`
- `passo atual`
- `tem origem em`
- `documentos relacionados`
- `proximo passo`
- `data da ultima consolidacao`

Os documentos finais devem registrar apenas os valores atualmente selecionados. Opcoes possiveis devem ficar em `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`.

Esses campos nao devem tentar substituir todo o historico. O papel deles e apenas dar localizacao minima ao leitor.

### 3. Titulo da interpretacao

Titulo curto e suficientemente especifico para diferenciar o documento de outros proximos.

### 4. Visao rapida

Secao curta para baratear o custo de assimilacao inicial.

Papel da visao rapida:

- permitir triagem rapida
- ajudar a decidir se vale seguir para a leitura completa
- deixar visivel a tese central ou o ponto principal do documento

A visao rapida nao deve tentar condensar todos os detalhes. Ela deve apenas responder, de forma economica, algo como:

- sobre o que e este DFI
- qual e a interpretacao principal aqui
- por que ele importa ou a que ele responde

### 5. Contexto

Secao para situar o leitor no problema, no recorte e nas condicoes em que a interpretacao faz sentido.

### 6. Interpretacao central

Secao principal do `DFI`.

Aqui o documento deve apresentar a leitura, proposta, contraponto, projecao ou articulacao interpretativa que justifica sua existencia.

### 7. Justificativa interpretativa

Secao para explicar por que a interpretacao parece razoavel, que raciocinio a sustenta e que elementos a tornam examinavel por pares.

### 8. Fragilidades, limites e riscos

Secao curta para explicitar fragilidades, condicoes, duvidas ou pontos que talvez precisem de resposta posterior.

### 9. Relacao com outros artefatos

Secao para explicitar consequencias praticas e conexoes com `DFIPs`, `nos`, `chains`, dinamicas ou outros `DFIs`.

### Secoes opcionais-contextuais

Alguns DFIs consolidam material vindo de um processo interpretativo maior, como uma chain, sequencia de nos ou conjunto de DFIPs.

Nesses casos, podem ser usadas secoes opcionais para preservar partes importantes do processo sem criar outro tipo de documento. Ver `biblioteca/dfis/artefatos/dfi/consolidacao-de-interpretacoes-em-dfis.md`.

Secoes opcionais sugeridas:

- `Origem do processo interpretativo`
- `Contrapontos relevantes considerados`
- `Propostas alternativas consideradas`
- `Reformulacoes importantes`
- `Material absorvido de documentos anteriores`

## Exemplo de esqueleto

```md
## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: aberto para consideracao
- passo atual: em circulacao
- tem origem em:
- documentos relacionados:
- proximo passo: revisar
- data da ultima consolidacao:

## Titulo da interpretacao

## Visao rapida

## Contexto

## Interpretacao central

## Justificativa interpretativa

## Fragilidades, limites e riscos

## Relacao com outros artefatos

## Origem do processo interpretativo

<opcional; usar quando o DFI consolidar material vindo de no, chain, DFIP ou sequencia de trocas>

## Contrapontos relevantes considerados

<opcional; registrar contrapontos que influenciaram a consolidacao>

## Propostas alternativas consideradas

<opcional; registrar alternativas avaliadas e sua relacao com a interpretacao consolidada>

## Reformulacoes importantes

<opcional; registrar mudancas relevantes de formulacao ocorridas durante o processo>

## Material absorvido de documentos anteriores

<opcional; listar DFIPs, DFIs, registros ou outros documentos incorporados>
```

## Criterios praticos de qualidade

Um `DFI` minimo parece bom quando:

- da para entender rapidamente se vale aprofundar a leitura
- a interpretacao principal aparece sem o leitor precisar adivinhar o ponto do texto
- o contexto relevante esta presente sem virar digressao excessiva
- existe material suficiente para exame por pares
- o leitor consegue se localizar minimamente no fluxo documental

## Pontos em aberto

- se `visao rapida` deve permanecer melhor do que `resumo` ou `sintese`
- se `posicao no encadeamento` deve permanecer melhor do que `acompanhamento do fluxo`
- se `fragilidades, limites e riscos` deve permanecer melhor do que alternativas mais curtas
- quando uma alteracao deve atualizar o mesmo `DFI` e quando deve gerar um novo `DFI`
- como representar melhor linhagem, bifurcacao e centralidade entre documentos relacionados
- quando as secoes opcionais-contextuais devem ser exigidas em DFIs de consolidacao

Para comparacao inicial de nomes candidatos, ver `operacional/vocabulario-para-estrutura-de-dfi.md`.

## Relacao com outros artefatos

- este DFIB absorve parte do aprendizado estabilizado em `biblioteca/dfis/cabecalho-documental.md`
- este DFIB se relaciona diretamente com `biblioteca/dfis/modelo-minimo-de-dfi.md`
- este DFIB dialoga com `biblioteca/dfis/fluxo-documental/circulacao-revisao-e-consolidacao-de-dfis.md` para manter coerencia entre estrutura e uso
- este DFIB deve ser lido junto de `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md` para entender a funcao da secao de localizacao documental
