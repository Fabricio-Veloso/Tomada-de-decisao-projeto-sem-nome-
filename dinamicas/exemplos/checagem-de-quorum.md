# Checagem de quorum de participantes necessarios

## Identificacao

- nome: Checagem de quorum de participantes necessarios
- codigo sugerido: `DCQPN-01`
- versao sugerida: `0.1`

## Objetivo

Garantir que todos os participantes essenciais estejam presentes antes do inicio do no, evitando perdas significativas para os demais participantes.

## Papeis e responsabilidades

- executa: arbitro
- participa: todos os membros necessarios

## Entregaveis

- input: lista de participantes necessarios
- output: confirmacao de que todos responderam a chamada, ou decisao de adiar o no

## Passo a passo

1. o arbitro aguarda os participantes obrigatorios ate o tempo limite estipulado
2. o arbitro confere a presenca com base na lista de participantes necessarios
3. se algum participante necessario faltar, o no deve ser adiado
4. se todos os participantes necessarios responderem a chamada, a dinamica deve ser considerada bem sucedida

## Tempo investido

- estimativa inicial: `1 min * quantidade de participantes necessarios`
- caso exceda, o excedente deve ser contabilizado como tempo extra

## Contexto de uso

- usar quando for necessario garantir a presenca de uma lista especifica de pessoas antes do inicio de um no

## Materiais relacionados

- criterios de quorum
- DPDs futuros de abertura formal e inicio de no

## Notas e variacoes

- este exemplo foi extraido do arquivao e ainda pode ser refinado quando o modelo de DPD estiver mais estavel
