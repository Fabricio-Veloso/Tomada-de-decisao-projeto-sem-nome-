# Workboard estrategico

## Objetivo

Manter uma visao de frentes maiores do projeto sem transformar o workboard operacional em historico ou backlog amplo demais.

Workboard operacional: `operacional/WORKBOARD.md`.

## Estado estrategico atual

- o repositorio esta em fase documental e conceitual
- `dominio/` e `operacao/` foram reaproveitados e convertidos para documentos em `biblioteca/` e `operacional/`
- `DFI` e `DFIP` ja possuem base boa para uso e revisao
- `DFIB` passa a ter estrutura minima explicita
- `DPC`, `DPD` e `DPN` ainda precisam de consolidacao posterior mais cuidadosa
- software futuro deve servir os fluxos documentais, nao antecede-los

## Frentes estrategicas

| Frente | Status | Por que importa | Filhos operacionais atuais |
| --- | --- | --- | --- |
| consolidar artefatos | em andamento | o projeto precisa de estruturas claras para DFI, DFIB, DFIP, DPN, DPD e DPC antes de automatizar | `operacional/WORKBOARD.md` |
| revisar biblioteca restante | em andamento | a camada documental precisa ficar coerente antes de nova publicacao ou rodada externa | `operacional/WORKBOARD.md` |
| preparar maturidade operacional | aberto | requisitos futuros e dinamicas precisam ficar registraveis sem virar produto prematuro | `operacional/requisitos-futuros.md` |
| manter publicacao curada | continuo | atualizacoes futuras podem exigir PRs e sincronizacao com Notion | `publicacao/`, `automacao/notion-sync/` |

## Observacoes

- atividades operacionais devem ser filhas de alguma frente estrategica
- blocos concluidos devem ir para `biblioteca/dfibs/registros/blocos-concluidos.md`
- itens postergados ou abertos devem ir para `biblioteca/dfibs/registros/itens-em-aberto.md`
- este arquivo nao deve substituir DFI, DFIB ou decisao conceitual; ele apenas orienta prioridade
