# Checagem de quorum de participantes necessarios

## Identificacao

- nome: Checagem de quorum de participantes necessarios
- codigo sugerido: `DCQPN-01`
- versao sugerida: `0.1`

## Objetivo

Garantir que todos os participantes essenciais estejam presentes antes do inicio do no, evitando perdas significativas para os demais participantes.

Esta dinamica tambem registra o criterio operacional minimo de quorum atualmente aceito: quando um no depende de participantes necessarios, sua ausencia impede o inicio normal do encontro.

## Papeis e responsabilidades

- executa: arbitro
- participa: todos os membros necessarios
- informa: criador do no, quando houver lista previa de participantes necessarios

## Entregaveis

- input abstrato: lista de participantes necessarios
- output abstrato: confirmacao de que todos responderam a chamada, ou decisao de adiar o no

## Passo a passo

1. antes do no, o criador ou responsavel pelo DPN indica quais participantes sao necessarios e quais sao facultativos, quando essa distincao existir
2. o arbitro aguarda os participantes necessarios ate o tempo limite estipulado
3. o arbitro confere a presenca com base na lista de participantes necessarios
4. se algum participante necessario faltar, o no deve ser adiado ou reconfigurado conforme regra do proprio DPN
5. se todos os participantes necessarios responderem a chamada, a dinamica deve ser considerada bem sucedida

## Tempo investido

- estimativa inicial: `1 min * quantidade de participantes necessarios`
- caso exceda, o excedente deve ser contabilizado como tempo extra

## Contexto de uso

- usar quando for necessario garantir a presenca de uma lista especifica de pessoas antes do inicio de um no
- especialmente util em nos privados, chains ou encontros em que certas pessoas carregam informacao, autoridade ou responsabilidade sem as quais o no perde sentido

## Materiais relacionados

- `biblioteca/dfibs/artefatos/dpn/estrutura-minima-de-dpn.md`
- `biblioteca/dpns/no-meta.md`

## Notas e variacoes

- em chains ou nos privados, pode ser util distinguir membros necessarios e membros facultativos
- participantes necessarios devem confirmar comprometimento antes da chain e presenca antes de cada no, quando isso for exigido pelo DPN
- se um participante necessario nao confirmar presenca antes do encontro, o no correspondente pode ser remarcado antes mesmo da chamada inicial
