# Workboard operacional

## Objetivo

Registrar apenas o trabalho operacional ativo ou imediatamente proximo, mantendo o historico e itens postergados fora deste quadro.

Workboard estrategico: `operacional/WORKBOARD-ESTRATEGICO.md`.

## Spec curta da rodada atual

- objetivo: revisar e consolidar documentos de `biblioteca/` e `operacional/` em iteracoes curtas
- contexto atual: conteudos das antigas pastas transitorias foram reaproveitados em `biblioteca/dfis/`, `biblioteca/dfibs/` e `operacional/`
- entrada: comentarios de revisao do usuario sobre artefatos, modelos, workboards, requisitos futuros e regras de trabalho
- saida esperada: documentos mais legiveis, modelos atualizados e quadro operacional limpo
- restricoes: nao transformar ideias futuras em decisoes fechadas; nao manter concluidos e postergados no workboard operacional
- casos principais: ajustar artefatos, atualizar modelos, registrar requisitos futuros e manter links entre documentos relacionados
- casos de borda: documentos ainda provisorios, nomenclaturas instaveis e frentes estrategicas sem tarefa ativa
- criterio de aceite: o quadro mostrar apenas o que precisa de acao atual e todo historico relevante estar em DFIBs de registro

## Estado atual

- `AGENTS.md` reflete que o projeto esta em fase documental e conceitual
- `biblioteca/dfis/artefatos/` concentra DFIs explicativos sobre artefatos centrais
- `biblioteca/dfibs/artefatos/` concentra estruturas minimas, modelos praticos e mapas de referencia
- `DFI` e `DFIP` estao em estado bom para uso e revisao incremental
- `DFIB` agora possui estrutura minima explicita: identificacao, posicao no encadeamento e conteudo
- `DPN`, `DPD` e `DPC` ainda precisam de consolidacao posterior mais cuidadosa
- `operacional/ESTUDO-MICRO-DO-NO.md` preserva o estudo encerrado do micro do no
- `operacional/requisitos-futuros.md` concentra ideias para futura camada digital
- `publicacao/` e `automacao/notion-sync/` existem, mas nao sao o foco operacional desta rodada

## Blocos ativos

| Bloco | Pai estrategico | Status | Prioridade | Motivo | Base atual |
| --- | --- | --- | --- | --- | --- |
| revisar-biblioteca-restante | consolidar artefatos | ready | alta | a pasta inteira de DFIBs ja foi conferida; ainda falta revisar o restante de `biblioteca/` | `biblioteca/` |
| revisar-operacional | preparar maturidade operacional | ready | alta | documentos operacionais precisam ficar coerentes com os artefatos revisados | `operacional/` |

## Blocos acompanhados como continuo

| Bloco | Pai estrategico | Status | Motivo | Base atual |
| --- | --- | --- | --- | --- |
| preparar-prs-quando-houver-atualizacao | manter publicacao curada | continuo | PRs seguem sendo necessarios quando houver blocos fechados de mudanca | repositorio atual |

## Registro externo ao workboard

- blocos concluidos: `biblioteca/dfibs/registros/blocos-concluidos.md`
- itens em aberto ou postergados: `biblioteca/dfibs/registros/itens-em-aberto.md`
- requisitos futuros de software: `operacional/requisitos-futuros.md`
- decisoes ainda abertas: `operacional/decisoes-em-aberto.md`
- ideias exploratorias: `operacional/ideias-abertas.md`

## Observacoes atuais

- a pasta inteira de `biblioteca/dfibs/` ja foi conferida nesta rodada
- ainda preciso conferir o restante de `biblioteca/`
- ainda preciso conferir `operacional/`
- tarefas concluidas nao devem permanecer neste arquivo depois de encerradas
- tarefas postergadas devem ir para DFIB de itens em aberto, nao para este quadro
