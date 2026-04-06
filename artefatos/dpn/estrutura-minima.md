# Estrutura minima de DPN

## Objetivo do documento

Registrar um no de forma suficientemente clara para que ele possa ser reproduzido, comparado, adaptado e reutilizado.

Seu foco principal nao e articular o problema que motivou o encontro, nem formalizar a interpretacao que emergiu dele, mas descrever como o no deve ser montado e conduzido.

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
- compilar objetivo, dinamicas, papeis, configuracoes minimas e saidas esperadas
- permitir catalogacao, comparacao, reutilizacao e adaptacao de nos

## Para que nao serve principalmente

- substituir a articulacao do problema que o no vai tratar
- substituir a formalizacao interpretativa do que emerge do encontro

## Relacao com outros artefatos

- um `DPN` pode ser montado ou ajustado a partir de um `DFIP`
- um `DPN` pode apontar para dinamicas e outros documentos de apoio
- um `DPN` pode dar origem a `DFIs` quando o no acontecer, mas nao se confunde com eles

## Estrutura minima sugerida

No estado atual do projeto, um `DPN` parece precisar de quatro blocos centrais.

1. `Objetivo do no`
2. `Dinamicas que compoem o no`
3. `Papeis e configuracoes minimas`
4. `Saidas esperadas`

## Descricao dos blocos

### 1. Objetivo do no

Deve explicar de forma curta para que esse no existe.

Esse bloco ajuda a diferenciar um no de outro mesmo quando eles compartilham dinamicas parecidas.

Tambem pode apontar, quando fizer sentido, para o `DFIP` que motivou sua montagem.

### 2. Dinamicas que compoem o no

Este e o nucleo do `DPN`.

Deve registrar:

- quais dinamicas compoem o no
- em que ordem elas entram
- se alguma dinamica e obrigatoria, opcional ou adaptavel

O objetivo aqui e permitir reproducao minimamente confiavel do no, e nao apenas listar tecnicas soltas.

### 3. Papeis e configuracoes minimas

Deve indicar o que o no precisa para funcionar sem perder sua forma basica.

Pode incluir, por exemplo:

- papeis necessarios
- quantidade minima ou perfil desejado de participantes
- quorum, quando isso fizer sentido
- tempo, materiais ou condicoes minimas relevantes

### 4. Saidas esperadas

Deve deixar claro o que esse no busca produzir ao final.

As saidas podem variar, por exemplo, entre:

- clarificacoes
- decisoes
- criterios
- registros para um `DFI`
- encaminhamentos para novos documentos ou novos nos

## Limites da estrutura

- o `DPN` nao precisa capturar toda a riqueza contextual do problema, porque isso tende a ficar melhor em `DFIP`
- o `DPN` nao deve virar manual excessivamente detalhado se isso prejudicar reutilizacao
- nem todo no precisa ter regras complexas para ser reproduzivel
- se a reproducao depender demais de contexto tacito, o documento ainda estara insuficiente

## Em aberto

- qual grau de detalhe deve ser exigido na descricao das dinamicas
- quando um `DPN` deve registrar variantes de aplicacao do mesmo no
- como diferenciar, no futuro, versoes normais, experimentais e meta
