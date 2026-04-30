# Linhagem, historico e referencias para estudo

## Objetivo

Guardar pistas, analogias, perguntas e referencias que surgiram durante a modelagem do fluxo documental, sem trata-las ainda como decisoes fechadas.

## Ponto de partida atual

O projeto parece caminhar para um fluxo em que `DFIPs`, `nos`, `dinamicas` e `DFIs` se alimentam mutuamente em ciclos.

Com isso, aparece uma necessidade nova: nao basta saber apenas o conteudo atual de um documento. Tambem passa a importar saber:

- de onde ele veio
- a que ele responde
- que documentos surgiram a partir dele
- em que ponto do fluxo ele se encontra
- se ele e central para aquela linha de debate ou apenas paralelo

## Tensao principal identificada

No repositorio, uma pessoa tecnica pode usar `Git` para recuperar historico e evolucao.

Mas isso nao resolve sozinho a necessidade de legibilidade para participantes nao tecnicos.

Surge entao a tensao:

- como tornar o historico visivel para leigos
- sem transformar cada documento em um registro excessivamente pesado
- e sem simplificar tanto a ponto de esconder informacoes relevantes

## Hipoteses em exploracao

### Hipotese 1: o proprio conjunto de documentos pode carregar a linhagem

Talvez nao seja necessario resumir toda a historia dentro de um unico documento.

Uma alternativa e cada `DFI` apontar explicitamente para:

- documento de origem, quando houver
- documentos aos quais responde
- documentos relacionados ou derivados

Essa ideia lembra, de forma analogica:

- a corrente de commits do `Git`
- a ligacao entre blocos em uma blockchain

O efeito desejado nao e imitar essas tecnologias literalmente, mas permitir que o leitor siga uma trilha compreensivel de encadeamento.

### Hipotese 2: o historico legivel talvez deva ser distribuido, e nao concentrado

Talvez a melhor resposta nao seja um campo unico de `historico`, mas uma combinacao de elementos pequenos:

- estado atual do documento
- campo `responde a`
- campo `documentos relacionados`
- referencia a novos `DFIs` que surgiram como contraponto, extensao ou correcao

Assim, o leitor reconstroi o contexto navegando entre artefatos relacionados, e nao lendo um resumo gigante dentro de um unico arquivo.

### Hipotese 3: talvez seja preciso distinguir linhagem de canonicidade

Mesmo que a linhagem fique clara, ainda resta uma pergunta diferente:

- qual documento e central para aquela linha de debate no momento
- quais documentos sao paralelos, derivados ou laterais

Isso lembra a intuicao de `branch` no `Git`: varios caminhos podem surgir, mas nem todos ocupam o mesmo papel naquele momento.

## Perguntas em aberto

- quando um ajuste deve permanecer no mesmo `DFI` e quando deve gerar um novo `DFI`
- como nomear documentos derivados sem inflar demais a nomenclatura
- como explicitar que um documento e de origem propria, espontanea ou derivado de outro
- como sinalizar se um documento e central para uma discussao ativa ou apenas um desdobramento lateral
- se a canonicidade deve ser representada por campo proprio, por status, por relacao com uma `chain` ou por outra forma
- ate que ponto um leitor precisa ver a cronologia completa e ate que ponto basta seguir referencias entre documentos
- como impedir que a busca por rastreabilidade torne o documento pesado demais

## Campos que talvez merecam avaliacao futura

Estes campos ainda nao sao recomendacao fechada. Eles apenas merecem ser considerados depois:

- `origem`
- `responde a`
- `documentos relacionados`
- `documento central da linha`
- `desdobramento de`
- `substitui`
- `estado do fluxo`
- `data da ultima consolidacao`

## Distincoes conceituais que parecem importantes

- `historico tecnico` nao e a mesma coisa que `historico legivel`
- `documento relacionado` nao e necessariamente `documento derivado`
- `documento central` nao e necessariamente `documento mais recente`
- `comentario` nao e a mesma coisa que `novo documento`
- `correcao local` nao e a mesma coisa que `contraproposta`

## Riscos percebidos

- criar campos cedo demais e depois descobrir que estavam modelando mal o fluxo real
- tentar resumir todo o historico dentro de cada documento
- depender apenas do historico tecnico da ferramenta usada
- perder bifurcacoes importantes por falta de referencia entre documentos
- chamar de canonico algo que talvez seja apenas provisoriamente central

## Termos e trilhas de estudo

- deliberacao assincrona
- document lifecycle
- editorial workflow
- document review workflow
- comment resolution
- traceability
- rationale capture
- provenance
- argument mapping
- issue mapping
- version history for non-technical users
- decision log
- RFC process
- ADRs
- sociocracy
- consent decision-making
- participatory governance
- deliberative democracy
- facilitation protocols

## Referencias iniciais anotadas

- `Facilitator's Guide to Participatory Decision-Making`, de Sam Kaner e colaboradores
- `The Art of Gathering`, de Priya Parker
- `Liberating Structures`, de Keith McCandless e Henri Lipmanowicz
- `Many Voices One Song`, de Ted Rau e Jerry Koch-Gonzalez
- `Open Decision Framework`, da Red Hat
- materiais do `Loomio`
- materiais do `Decidim`

## Uso sugerido deste arquivo

Este arquivo deve funcionar como deposito de pistas para retomada posterior.

Quando algum desses pontos amadurecer o suficiente, ele pode sair daqui e virar:

- uma decisao mais clara em `operacional/decisoes-em-aberto.md`
- um DFI proprio
- uma regra operacional
- uma parte da estrutura minima de `DFI`
