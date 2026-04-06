# DFI - MVP do fluxo documental

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
- tem origem em:
- documentos relacionados: `operacao/protocolo-provisorio-de-circulacao-de-dfi.md`, `artefatos/dfi/estrutura-minima.md`
- proximo passo:
  - TESTAR COM EXEMPLO REAL
  - revisar
  - consolidar
  - bifurcar em novo DFI
  - arquivar
- data da ultima consolidacao:

## Titulo da interpretacao

MVP para emular o fluxo documental antes de software proprio

## Visao rapida

Este DFI defende que o projeto deve validar primeiro o fluxo documental com `Google Drive` e `Google Docs`, mantendo o repositorio como camada de consolidacao mais estavel.

Sua funcao principal e justificar a escolha do ambiente de emulacao. O detalhamento operacional do circuito fica em `operacao/protocolo-provisorio-de-circulacao-de-dfi.md`.

## Contexto

O projeto precisa de um ambiente de emulacao, nao de uma plataforma definitiva neste momento.

A prioridade atual e testar o proprio fluxo documental em situacoes reais para descobrir:

- quais campos faltam nos documentos
- quais transicoes de estado realmente importam
- quais pontos do fluxo geram mais atrito
- o que precisa ser formalizado antes de qualquer software proprio

Ao mesmo tempo, existe uma restricao forte: o ambiente precisa ter baixa barreira de entrada para participantes nao tecnicos.

## Interpretacao central

A leitura atual parece ser esta:

1. um `DFIP` articula uma problematica
2. um `no` e organizado para tratar essa problematica dentro de uma `chain`
3. o `no` usa uma ou mais `dinamicas`
4. desse processo surgem um ou mais `DFIs`
5. os `DFIs` ficam disponiveis para leitura e consideracao por um publico definido
6. comentarios, contrapontos e correcoes podem gerar novos `DFIs`
7. esses novos `DFIs` alimentam o proximo `no` da `chain`
8. o ciclo segue ate convergir, expirar ou atingir o limite combinado para aquela `chain`

Para testar isso sem software proprio, a melhor direcao inicial parece ser:

1. usar `Google Drive` e `Google Docs` como ambiente principal de circulacao
2. registrar no proprio documento os metadados minimos de estado, publico e relacao com outros artefatos
3. manter o repositorio como camada de registro mais estavel do que foi consolidado

No uso atual, isso parece suficiente para permitir:

- publicacao de um `DFIP` e de um `DFI`
- comentario ou sugestao por pares
- consolidacao do que foi aceito, rejeitado ou deixado em aberto
- relacao visivel entre documentos de uma mesma linha de debate
- retorno desses insumos para o proximo `no`

## Justificativa interpretativa

Essa direcao parece razoavel porque reduz drasticamente a barreira de entrada sem obrigar o projeto a decidir cedo demais uma plataforma definitiva.

Na pratica, isso significa:

- usar `Google Docs` como ambiente de escrita, sugestao e comentario para os documentos em circulacao
- permitir que participantes nao tecnicos contribuam sem precisar aprender `Git` ou `GitHub`
- usar o repositorio local para consolidar versoes, organizar estrutura e manter historico mais controlado

Tambem parece razoavel evitar, neste momento, uma base separada de acompanhamento como planilha, desde que o proprio documento consiga carregar o minimo necessario de localizacao no fluxo.

## Delimitacao de escopo

Este DFI nao tenta descrever todo o circuito operacional do documento em circulacao.

Para isso, ver `operacao/protocolo-provisorio-de-circulacao-de-dfi.md`.

Aqui, o foco e apenas sustentar a escolha do ambiente de emulacao e sua logica de uso inicial.

## Fragilidades, limites e riscos

- o arranjo com `Google Drive`, `Google Docs` e repositorio continua um pouco `clunky`
- a rastreabilidade continua dependente de disciplina manual no proprio documento
- o modelo ainda nao prova escala, apenas viabilidade inicial
- o uso de metadados no proprio documento pode ficar insuficiente se o volume crescer rapido

## Relacao com outros artefatos

- este DFI fundamenta a escolha do ambiente de emulacao
- este DFI se articula com `operacao/protocolo-provisorio-de-circulacao-de-dfi.md`
- este DFI conversa com `artefatos/dfi/estrutura-minima.md` ao mostrar como um documento interno pode usar o proprio sistema
