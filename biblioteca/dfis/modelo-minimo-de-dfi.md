# DFI - Modelo minimo de DFI

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: definicao provisoria
- tem origem em: `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`
- documentos relacionados: `biblioteca/dfis/cabecalho-documental.md`, `biblioteca/dfis/fluxo-documental/circulacao-revisao-e-consolidacao-de-dfis.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`
- proximo passo: levar para uso em DFIs reais
- data da ultima consolidacao: 2026-04-30

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

No estado atual do projeto, um modelo minimo de `DFI` parece precisar de nove blocos obrigatorios:

1. `Identificacao`
2. `Posicao no encadeamento`
3. `Titulo da interpretacao`
4. `Visao rapida`
5. `Contexto`
6. `Interpretacao central`
7. `Justificativa interpretativa`
8. `Fragilidades, limites e riscos`
9. `Relacao com outros artefatos`

Quando o DFI consolidar material vindo de chain, no, DFIP ou sequencia de trocas, ele tambem pode usar secoes opcionais-contextuais. Essas secoes existem pela razao registrada em `biblioteca/dfis/artefatos/dfi/consolidacao-de-interpretacoes-em-dfis.md`.

Modelo-base sugerido:

```md
# DFI - <titulo curto>

## Identificacao

- tipo: DFI (<nome completo, se ajudar>)
- publico: <interno | amplo | misto, se isso vier a existir>
- status: <provisoria | estavel | outro valor aceito>
- uso de siglas: <regra curta>

## Posicao no encadeamento

- estado do fluxo: aberto para consideracao
- passo atual: em circulacao
- tem origem em:
- documentos relacionados:
- proximo passo: revisar
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

## Origem do processo interpretativo

<opcional; origem em no, chain, DFIP, registro ou sequencia de trocas>

## Contrapontos relevantes considerados

<opcional; contrapontos que afetaram a interpretacao consolidada>

## Propostas alternativas consideradas

<opcional; alternativas consideradas durante o processo>

## Reformulacoes importantes

<opcional; mudancas relevantes de formulacao ate a versao atual>

## Material absorvido de documentos anteriores

<opcional; DFIPs, DFIs, registros ou outros documentos incorporados>
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
- as opcoes da secao devem ficar em DFIB proprio para nao inflar os documentos finais
- o modelo ainda nao resolve totalmente a representacao de bifurcacao, centralidade e canonicidade entre documentos
- as secoes opcionais-contextuais podem inflar DFIs simples se forem usadas sem necessidade

## Relacao com outros artefatos

- este DFI concretiza a direcao registrada em `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`
- este DFI reutiliza o aprendizado de `biblioteca/dfis/cabecalho-documental.md`
- este DFI deve ser usado em conjunto com `biblioteca/dfis/fluxo-documental/circulacao-revisao-e-consolidacao-de-dfis.md` quando entrar em circulacao real
- as secoes opcionais-contextuais se apoiam em `biblioteca/dfis/artefatos/dfi/consolidacao-de-interpretacoes-em-dfis.md`
- a funcao da secao `Posicao no encadeamento` esta explicada em `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`

## Valores atualmente considerados

O repertorio provisiorio de valores para `Posicao no encadeamento` fica em `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`.

Documentos finais devem registrar apenas os valores selecionados.
