# Workboard - Estruturacao documental do projeto

## Objetivo

Organizar os proximos blocos de trabalho para sair do arquivao inicial e consolidar uma base conceitual, documental e operacional mais clara, navegavel e evolutiva.

## Estado atual

- `AGENTS.md` reescrito para refletir o estado real do projeto
- estrutura documental inicial criada por dominio, artefatos, operacao, dinamicas e backlog
- conceitos centrais separados em arquivos proprios
- ideias futuras e decisoes em aberto isoladas do conteudo mais estavel
- repositório conectado ao remoto e publicado em `main`
- legados sem funcao atual em `templates/` e `inbox/` foram removidos para reduzir ruido estrutural

## Contexto importante consolidado nesta sessao

### Distincao entre DFI, DFIP e DPN

- `DFI`: formaliza interpretacoes, insights e ideias que surgem durante nos e dinamicas, convertendo percepcoes ainda pouco articuladas em conteudo articulado, contextualizado e logicamente examinavel por pares
- `DFIP`: articula o problema que sera tratado em um no, ajudando participantes a se prepararem, a compreender o foco do encontro e a orientar configuracoes do no, incluindo possiveis dinamicas adequadas ao contexto
- `DPN`: registra um no de forma suficientemente completa para compor um banco de nos e permitir sua reproducao futura

### Leitura atual do risco

- a diferenca entre os tres documentos existe e e defensavel
- o principal problema nao e a impossibilidade de separacao, mas a falta de explicitude curta e operacional dessa separacao nos documentos atuais
- ainda pode existir alguma area de contato entre eles, mas isso tende a ser administravel se houver mapa de artefatos, regra de relacao entre documentos e exemplos concretos

## Leitura rapida

- `pending`: ainda nao iniciado
- `ready`: suficientemente entendido para execucao
- `in_progress`: em andamento
- `done`: consolidado nesta iteracao
- `blocked`: depende de decisao conceitual ou contexto adicional

## Fases sugeridas

1. consolidacao da arquitetura documental
2. nomenclatura e politica de siglas
3. relacoes entre artefatos e precedencia de regras
4. estruturas minimas viaveis dos artefatos centrais
5. exemplos completos e validacao por leitura critica

## Blocos

| Bloco | Fase | Status | Prioridade | Motivo | Base atual |
|---|---|---|---|---|---|
| reescrever-agents-para-fase-documental | consolidacao da arquitetura documental | done | alta | o repositório precisava parar de presumir software e refletir o foco conceitual e documental | `AGENTS.md` |
| separar-arquivao-em-estrutura-inicial | consolidacao da arquitetura documental | done | alta | o conhecimento estava concentrado em um unico arquivo e dificultava navegacao, revisao e evolucao | `README.md`, pastas atuais |
| revisar-fronteiras-entre-dfi-dfip-e-dpn | consolidacao da arquitetura documental | done | alta | a distincao existe, mas precisava ficar explicita, curta e operacional para reduzir ambiguidade e retrabalho | `artefatos/mapa-de-artefatos.md` |
| criar-mapa-de-artefatos-e-relacoes | relacoes entre artefatos e precedencia de regras | done | alta | faltava uma visao simples de foco, momento de surgimento e relacao entre os artefatos centrais | `artefatos/mapa-de-artefatos.md` |
| formalizar-modelo-de-cabecalho-documental | exemplos completos e validacao por leitura critica | done | alta | o projeto precisava testar seus proprios artefatos em uso real e registrar uma direcao provisoria para identificacao de documentos | `dfis/cabecalho-documental.md` |
| propor-mvp-de-fluxo-documental | exemplos completos e validacao por leitura critica | done | alta | antes de pensar em software proprio, o projeto precisa de uma forma simples de emular publicacao, comentario e consolidacao com baixo atrito | `operacao/mvp-do-fluxo-documental.md` |
| definir-protocolo-provisorio-de-circulacao-de-dfi | exemplos completos e validacao por leitura critica | done | alta | o projeto precisava sair de uma ideia abstrata de fluxo e ganhar um procedimento minimo para abrir, comentar, consolidar e bifurcar DFIs | `operacao/protocolo-provisorio-de-circulacao-de-dfi.md` |
| produzir-modelo-minimo-de-dfi | exemplos completos e validacao por leitura critica | done | alta | depois de consolidar vocabulario, cabecalho e fluxo, o projeto precisava de um modelo realmente copiavel para novos DFIs | `dfis/modelo-minimo-de-dfi.md` |
| definir-politica-de-nomenclatura-e-siglas | nomenclatura e politica de siglas | ready | alta | o projeto ja tem varias siglas e precisa evitar inflacao, opacidade e barreira de entrada | `dominio/glossario.md`, `dominio/visao-geral.md` |
| decidir-estrategia-dos-dois-tipos-de-conteudo | nomenclatura e politica de siglas | ready | alta | ainda nao esta claro se os dois publicos pedem duas trilhas, duas camadas de escrita ou dois conjuntos de documentos | `dominio/visao-geral.md`, `backlog/ideias-abertas.md` |
| definir-regra-de-precedencia-entre-valores-chain-no-e-dinamica | relacoes entre artefatos e precedencia de regras | pending | alta | sem precedencia clara, conflitos entre niveis podem gerar interpretacoes inconsistentes | `dominio/chains.md`, `dominio/nos.md`, `operacao/regras-gerais.md` |
| definir-estados-de-maturidade-dos-documentos | relacoes entre artefatos e precedencia de regras | pending | media | falta distinguir o que e rascunho, experimental, estavel ou legado | repositorio atual |
| consolidar-estrutura-minima-de-dfi | estruturas minimas viaveis dos artefatos centrais | done | alta | o DFI e central para formalizacao interpretativa e agora ja possui estrutura consolidada e modelo copiavel para uso interno | `artefatos/dfi/estrutura-minima.md`, `dfis/modelo-minimo-de-dfi.md` |
| consolidar-estrutura-minima-de-dfip | estruturas minimas viaveis dos artefatos centrais | ready | alta | o DFIP agora parece ser o proximo gargalo mais claro do fluxo, porque precisa articular o problema antes do no e preparar o primeiro exemplo completo | `artefatos/dfip/estrutura-minima.md`, `artefatos/mapa-de-artefatos.md` |
| consolidar-estrutura-minima-de-dpn | estruturas minimas viaveis dos artefatos centrais | ready | alta | o DPN precisa sair do estado ainda muito raso atual para que o projeto consiga fechar um fluxo completo e testavel | `artefatos/dpn/estrutura-minima.md`, `artefatos/mapa-de-artefatos.md` |
| produzir-primeiro-exemplo-completo-de-fluxo | exemplos completos e validacao por leitura critica | pending | alta | um fluxo concreto tende a revelar lacunas mais rapido do que discussao abstrata isolada | DFI + DFIP + DPN + dinamica exemplo |
| revisar-redundancias-entre-dominio-operacao-e-artefatos | exemplos completos e validacao por leitura critica | pending | media | alguns pontos estao repetidos em mais de uma camada e precisam ser enxugados sem perder navegabilidade | `dominio/`, `operacao/`, `artefatos/` |

## Ordem sugerida

1. `consolidar-estrutura-minima-de-dfip`
2. `consolidar-estrutura-minima-de-dpn`
3. `produzir-primeiro-exemplo-completo-de-fluxo`
4. `revisar-redundancias-entre-dominio-operacao-e-artefatos`
5. `definir-politica-de-nomenclatura-e-siglas`
6. `decidir-estrategia-dos-dois-tipos-de-conteudo`
7. `definir-regra-de-precedencia-entre-valores-chain-no-e-dinamica`
8. `definir-estados-de-maturidade-dos-documentos`

## Observacoes atuais

- o projeto ja saiu da fase de arquivao unico e agora pode evoluir por blocos menores e mais verificaveis
- o principal risco atual parece ser inflacao de vocabulario interno antes de as fronteiras entre artefatos ficarem muito claras
- o problema das siglas nao exige abolicao imediata; exige governanca de nomenclatura
- a existencia de dois tipos de publico e uma decisao forte do projeto, mas ainda nao foi traduzida em estrategia editorial concreta
- exemplos completos provavelmente vao revelar lacunas mais rapido do que apenas definicoes abstratas
- o repositorio ja possui um primeiro `DFI` real, o que confirma na pratica a possibilidade de o projeto usar seus proprios artefatos para se construir
- a distincao entre definicao de artefato e instancia real de artefato comecou a ser aplicada ao separar `dominio/dfis.md` de `dfis/`
- o projeto agora tambem possui uma primeira proposta explicita de emulacao do fluxo documental antes de qualquer plataforma propria
- o projeto agora tambem possui um primeiro protocolo curto para circulacao de `DFIs` em ambiente MVP
- o projeto agora tambem possui um primeiro modelo minimo de `DFI` diretamente copiavel para uso interno
- o bloco de `DFI` esta suficientemente consolidado para que o foco saia de teoria sobre DFI e avance para `DFIP`, `DPN` e exemplos completos de fluxo
- o `WORKBOARD` deve refletir menos a ordem historica desta sessao e mais o melhor proximo passo operacional

## Checklist por bloco

- objetivo do bloco explicitado
- fronteiras com outros conceitos revisadas
- termos e siglas usados de forma consistente
- relacao com outros artefatos registrada
- criterio de aceite definido por leitura critica
- resultado deixado em estado mais claro do que o anterior
