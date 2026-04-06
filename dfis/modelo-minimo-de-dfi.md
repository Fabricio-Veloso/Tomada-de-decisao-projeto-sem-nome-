# DFI - Modelo minimo de DFI

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: definicao provisoria
- tem origem em: `artefatos/dfi/estrutura-minima.md`
- documentos relacionados: `dfis/cabecalho-documental.md`, `operacao/protocolo-provisorio-de-circulacao-de-dfi.md`
- proximo passo:
  - abrir para consideracao
  - revisar
  - LEVAR PARA USO EM DFIS REAIS
  - bifurcar em novo DFI
  - consolidar
  - arquivar
- data da ultima consolidacao:

## Titulo da interpretacao

Modelo minimo de DFI para uso interno do projeto

## Visao rapida

Este DFI propoe um modelo minimo preenchivel para novos `DFIs` do projeto.

Ele tenta equilibrar tres coisas ao mesmo tempo:

- legibilidade rapida
- capacidade de exame por pares
- localizacao minima no fluxo documental

## Contexto

O projeto ja possui uma leitura provisoria sobre:

- o que e um `DFI`
- qual cabecalho minimo parece util
- como o fluxo documental pode ser emulado em ambiente de `MVP`
- quais secoes parecem compor uma estrutura minima razoavel

Faltava, no entanto, um modelo realmente usavel, isto e, um artefato que pudesse ser copiado e preenchido para produzir novos `DFIs` sem obrigar cada pessoa a reconstruir a estrutura do zero.

## Interpretacao central

No estado atual do projeto, um modelo minimo de `DFI` parece precisar de nove blocos:

1. `Identificacao`
2. `Posicao no encadeamento`
3. `Titulo da interpretacao`
4. `Visao rapida`
5. `Contexto`
6. `Interpretacao central`
7. `Justificativa interpretativa`
8. `Fragilidades, limites e riscos`
9. `Relacao com outros artefatos`

Modelo-base sugerido:

```md
# DFI - <titulo curto>

## Identificacao

- tipo: DFI (<nome completo, se ajudar>)
- publico: <interno | amplo | misto, se isso vier a existir>
- status: <provisoria | estavel | outro valor aceito>
- uso de siglas: <regra curta>

## Posicao no encadeamento

- estado do fluxo:
  - rascunho
  - ABERTO PARA CONSIDERACAO
  - em debate
  - consolidado
  - arquivado
- passo atual:
  - EM CIRCULACAO
  - em revisao
  - definicao provisoria
  - consolidado
  - arquivado
- tem origem em:
- documentos relacionados:
- proximo passo:
  - abrir para consideracao
  - revisar
  - levar para no
  - bifurcar em novo DFI
  - consolidar
  - arquivar
- data da ultima consolidacao:

## Titulo da interpretacao

<titulo especifico do DFI>

## Visao rapida

<2 a 5 linhas sobre o que este DFI diz, por que importa e se vale leitura detalhada>

## Contexto

<situacao, problema, recorte ou condicoes relevantes>

## Interpretacao central

<tese, proposta, contraponto, leitura ou projecao principal>

## Justificativa interpretativa

<por que essa interpretacao parece razoavel, que raciocinio a sustenta, que pontos a tornam examinavel>

## Fragilidades, limites e riscos

<duvidas, condicoes, pontos frageis, riscos ou partes que ainda pedem resposta>

## Relacao com outros artefatos

<relacao com DFIPs, nos, chains, dinamicas ou outros DFIs>
```

## Justificativa interpretativa

Esse modelo parece suficiente para o momento porque resolve o necessario sem ficar grande demais.

Ele tambem conversa com o objetivo de usar o proprio sistema para produzir os artefatos do projeto. Em vez de manter apenas descricoes abstratas sobre `DFIs`, o repositorio passa a contar com um modelo diretamente copiavel e adaptavel.

Outro ganho importante e que esse modelo ja incorpora duas exigencias que surgiram como centrais nesta sessao:

- uma entrada curta para assimilacao rapida
- uma camada minima de localizacao no fluxo

## Fragilidades, limites e riscos

- o modelo ainda depende de algum julgamento humano para diferenciar ajuste local de novo `DFI`
- os campos de `posicao no encadeamento` ainda podem evoluir conforme o uso real
- a lista de opcoes em `CAPS` ajuda preenchimento, mas pode precisar de poda se comecar a inflar demais
- o modelo ainda nao resolve totalmente a representacao de bifurcacao, centralidade e canonicidade entre documentos

## Relacao com outros artefatos

- este DFI concretiza a direcao registrada em `artefatos/dfi/estrutura-minima.md`
- este DFI reutiliza o aprendizado de `dfis/cabecalho-documental.md`
- este DFI deve ser usado em conjunto com `operacao/protocolo-provisorio-de-circulacao-de-dfi.md` quando entrar em circulacao real

## Valores atualmente considerados

Os valores abaixo devem ser lidos como repertorio provisiorio para teste em uso real, nao como taxonomia fechada.

### Estado do fluxo

- rascunho
- aberto para consideracao
- em debate
- consolidado
- arquivado

### Passo atual

- em circulacao
- em revisao
- definicao provisoria
- referencia de cabecalho
- absorvido por outro DFI
- consolidado
- arquivado
- abrir para consideracao
- revisar
- levar para no
- bifurcar em novo DFI
- consolidar
- manter como referencia
