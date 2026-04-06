# AGENTS.md

## Objetivo do projeto

Este repositório guarda a fase de modelagem de um projeto ainda em definicao, centrado em estruturar formas mais eficientes de interpretacao, deliberacao e coordenacao coletiva.

Hoje, o foco principal nao e software pronto para uso, mas sim organizar e amadurecer os conceitos, regras, artefatos e fluxos que sustentam o projeto.

Os elementos centrais atualmente identificados sao:

- chains
- nos
- dinamicas
- DFIs e documentos relacionados
- papeis, regras e criterios de funcionamento

## Escopo positivo

Neste estado atual, faz parte do escopo:

- consolidar e lapidar a base conceitual do projeto
- transformar anotacoes soltas em documentos mais claros e separados por assunto
- definir vocabulario, estruturas minimas e relacoes entre os artefatos
- registrar decisoes estaveis no repositorio
- preparar uma organizacao de pastas e arquivos coerente com a fase documental do projeto
- idealizar, quando fizer sentido, requisitos para uma futura camada digital ou plataforma

## Escopo negativo

Neste momento, nao faz parte do escopo presumir ou forcar:

- uma arquitetura web definitiva
- implementacao de produto antes de a base conceitual estar minimamente clara
- aumento de complexidade tecnica sem necessidade concreta
- formalizacao excessiva que dificulte iteracao e revisao
- tratar ideias em aberto como decisoes fechadas

## Estado atual do repositorio

- O projeto ainda esta em fase inicial de estruturacao.
- O repositorio ja saiu da fase de arquivao unico, embora varios pontos ainda estejam em consolidacao.
- O repositorio ainda nao representa a estrutura ideal futura.
- A prioridade imediata e organizar conhecimento, nao construir uma aplicacao completa.

## Artefatos principais do dominio

Os nomes e estruturas podem evoluir, mas hoje o repositorio deve tratar como nucleos do dominio:

- `chains`: encadeamentos de nos para objetivos que nao cabem em um unico encontro
- `nos`: momentos estruturados de interacao com regras, dinamicas e papeis definidos
- `dinamicas`: blocos menores que compoem ou apoiam um no
- `DFIs`: documentos de formalizacao interpretativa
- documentos de projeto derivados, como DPD, DPN, DPC e DFIP, quando forem estabilizados
- valores, regras de convivencia e criterios operacionais do projeto

## Direcao de organizacao

Enquanto o projeto ainda for majoritariamente documental, a organizacao deve privilegiar clareza, separacao por assunto e facilidade de evolucao.

Direcao esperada:

- separar conceitos por arquivo, evitando concentrar tudo em um unico documento longo
- manter nomes e pastas orientados ao dominio, nao a uma arquitetura de software ainda hipotetica
- distinguir claramente conteudo estavel, rascunho e backlog de ideias
- registrar estruturas minimas viaveis antes de detalhar variacoes ou automatizacoes futuras

Se surgir software neste repositorio, ele deve nascer para servir os artefatos e fluxos ja entendidos, e nao o contrario.

## Principios de implementacao

- Preferir simplicidade e mudancas pequenas.
- Respeitar os padroes ja existentes no repositorio quando forem suficientes.
- Organizar primeiro o significado das coisas, depois a ferramenta.
- Evitar criar categorias, siglas ou camadas novas sem necessidade clara.
- Separar conteudos por responsabilidade, evitando mistura de definicao, exemplo, backlog e decisao estavel no mesmo lugar quando isso atrapalhar.
- Manter o historico legivel: cada mudanca deve ter motivo claro.
- Fazer a menor mudanca que produza mais clareza, consistencia ou verificabilidade.

## Modo de trabalho

Trabalharemos em iteracoes curtas, com alinhamento frequente sobre a proxima unidade de trabalho.

Fluxo esperado:

1. alinhar a tarefa da vez
2. registrar uma spec curta
3. implementar em passos pequenos
4. revisar consistencia com o restante do repositorio
5. validar o resultado por leitura critica e, quando existir software, por teste relevante
6. consolidar apenas o que ficou suficientemente estavel

O usuario pode interromper a qualquer momento para corrigir entendimento, mudar a abordagem ou pedir explicacoes.

## Formato de spec

Antes de implementar uma tarefa, definir uma spec curta com:

- objetivo
- contexto atual
- entrada
- saida esperada
- restricoes ou regras
- casos principais
- casos de borda relevantes
- criterio de aceite

A spec nao precisa ser formal. Ela precisa apenas ser suficiente para orientar a execucao e a validacao.

## Criterio de pronto

Uma tarefa so deve ser considerada pronta quando:

- o resultado estiver coerente com a spec combinada
- o artefato alterado estiver mais claro do que antes
- nao houver contradicao obvia com conceitos ja registrados
- os impactos no restante do repositorio tiverem sido revisados
- a mudanca mantiver a simplicidade adequada ao momento do projeto
- quando houver software afetado, os testes relevantes tiverem sido executados ou atualizados de forma coerente

## Diretriz de commits

- Todo commit deve ser atomico.
- A regra para fechar um bloco de commit e: esta mudanca pode sofrer rollback sozinha sem afetar as demais?
- Se a resposta for sim, esse bloco pode virar um commit.
- O alvo e usar a maior granularidade saudavel que preserve contexto, integridade e capacidade de rollback.
- Nao misturar, sem necessidade, reorganizacao documental, decisao conceitual e implementacao tecnica no mesmo commit.
- Agrupar varios arquivos no mesmo commit apenas quando eles formarem uma unica unidade de rollback.
- Sempre que possivel, cada commit deve deixar o repositorio em estado coerente, legivel e validavel.
- Antes de commitar, propor um plano curto de particionamento quando houver duvida razoavel sobre como dividir os blocos.

### Convencao de mensagem de commit

- Usar prefixos comuns e amplamente reconhecidos, como `chore`, `feat`, `refac`, `fix`, `docs` e `test`.
- Escolher o prefixo conforme a natureza principal da mudanca.
- Formato obrigatorio da mensagem: `<tipo>: <dominio ou area> - <porque da mudanca>`
- A mensagem deve explicar principalmente o porquê, e nao apenas listar o que foi alterado.

Exemplos:

- `docs: dominio - separar conceitos centrais do arquivao inicial`
- `refac: repositorio - preparar estrutura documental para evolucao incremental`

## Convencoes de conteudo

- Priorizar texto claro, direto e revisavel.
- Explicitar quando algo for definicao estavel, hipotese, exemplo ou ideia futura.
- Evitar jargao desnecessario quando uma formulacao mais simples resolver.
- Quando uma sigla for importante, apresentar seu significado com clareza.
- Exemplos práticos sao bem-vindos quando reduzem ambiguidade.

## Como validar mudancas

Para a fase atual do projeto, validar mudancas principalmente por:

- leitura critica do texto
- verificacao de consistencia entre conceitos relacionados
- checagem de duplicacoes e contradicoes
- confirmacao de que a separacao dos arquivos melhora a navegacao do repositorio

Se no futuro houver software ou automacoes, acrescentar validacao tecnica compativel com a stack adotada.

## Decisoes em aberto

Estas frentes continuam abertas e podem ser refinadas ao longo da evolucao:

- nomenclatura final de alguns artefatos e categorias
- estrutura minima viavel de cada tipo de documento
- organizacao ideal das pastas para sair do arquivao atual
- momento correto de introduzir software no projeto
- fronteira entre documentacao conceitual, processo operacional e backlog de produto
