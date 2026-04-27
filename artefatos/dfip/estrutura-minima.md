# DFIP - Estrutura minima completa

## Objetivo do documento

Definir a estrutura minima completa de um `DFIP` (`Documento de Formalizacao Interpretativa de Problematica`) para preparar um `no` especifico.

O `DFIP` deve ajudar o leitor a assimilar contexto suficiente para entender uma problematica, avaliar a acao proposta pelo propositor e acompanhar as projecoes esperadas depois dessa acao.

Em termos praticos, o documento deve deixar claro:

- qual problema esta sendo levado ao `no`
- por que esse problema importa agora
- qual contexto minimo o leitor precisa conhecer
- qual acao, teste ou investimento o propositor deseja realizar
- quais resultados sao esperados se a acao funcionar
- quais indicadores podem mostrar sucesso, erro ou execucao ruim
- como esses indicadores podem ser acompanhados
- quais fragilidades, limites ou riscos ainda existem na leitura apresentada

Esta versao tem formato mais academico e completo. Seu objetivo e preservar a essencia mais rigorosa do artefato antes da criacao de uma versao pratica, mais direta e acessivel para pessoas que ainda nao conhecem todos os termos, fluxos e abstracoes do projeto.

## Logica semantica das secoes

As secoes do `DFIP` devem facilitar a assimilacao de contexto pelo leitor. A tabela abaixo explicita o objetivo real de cada bloco.

| Secao | Objetivo real | O que ela quer saber | Para o leitor entender |
| --- | --- | --- | --- |
| `Identificacao` | permitir triagem | que tipo de documento e, para quem e, em que estado esta | se deve ler como rascunho, proposta, consolidado ou arquivo historico |
| `Posicao no encadeamento` | localizar linhagem | de onde isso veio, com o que se relaciona, em que momento do fluxo esta | se o documento continua, deriva ou depende de outro documento |
| `Titulo da problematica` | dar entrada rapida | qual e o objeto ou tensao central | sobre o que e o documento |
| `Visao rapida da problematica` | permitir decisao de leitura | qual problema, por que agora, por que merece atencao coletiva | se a leitura ou participacao no `no` e relevante |
| `Escopo` | controlar abertura do assunto | o que entra e o que nao entra | qual conversa esta sendo proposta e qual conversa fica fora por enquanto |
| `Contexto base` | nivelar informacao | fatos, historico, sinais, limites, atores e consequencias | o que precisa saber antes de opinar |
| `Formulacao central da problematica` | transformar contexto em problema trabalhavel | qual e a tensao real, por que nao e detalhe simples, quais dimensoes e consequencias existem | qual problema precisa de elaboracao coletiva |
| `Acao proposta pelo propositor` | explicitar a intervencao desejada | o que se quer fazer, testar ou mobilizar e que recursos isso exige | qual acao esta sendo defendida ou considerada |
| `Projecoes apos acao` | explicitar a aposta do propositor | que cenario e esperado, quais sinais indicam sucesso, erro ou execucao ruim, e como acompanhar | como verificar se a acao fez sentido |
| `Fragilidades, limites e riscos` | impedir falsa seguranca | o que falta, o que e hipotese, que vieses ou riscos existem | onde o documento pode estar fraco ou induzir erro |
| `Documentos relacionados` | dar rastreabilidade e apoio | materiais que sustentam, explicam ou complementam | onde checar mais contexto ou continuidade |

## Identificacao

Um `DFIP` deve iniciar com uma identificacao minima do documento.

Campos sugeridos:

- tipo: DFIP (Documento de Formalizacao Interpretativa de Problematica)
- publico: interno, publico restrito ou publico aberto
- status: rascunho, provisoria, em revisao, consolidada ou arquivada
- uso de siglas: permitido apos a primeira mencao

Esse bloco existe para permitir triagem rapida antes da leitura do conteudo principal.

## Posicao no encadeamento

Um `DFIP` deve explicitar sua posicao no fluxo de documentos, como em uma block-chain: este documento e filho ou continuacao de qual documento anterior?

Campos sugeridos:

- estado do fluxo:
  - consolidado em no do dia 14-04-2026.
- passo atual:
  - definicao provisoria
  - pronto para uso no no
- tem origem em:
  - demanda operacional ou politica
- documentos relacionados:
  - `DFIs` usados como insumo, versao anterior ou commits relevantes.
- data da ultima consolidacao: 27-04-2026.(checar PRs para mais detalhes).

Esse bloco evita que o `DFIP` dependa apenas da memoria das pessoas para ser entendido dentro da continuidade do projeto.

## Titulo da problematica

O titulo deve indicar, com clareza provisoria, qual problematica sera trabalhada.

Ele nao precisa resolver a interpretacao final do problema, mas deve permitir que uma pessoa entenda o foco geral do `no` antes de ler o documento.

Um bom titulo tende a explicitar:

- o objeto do problema
- a tensao principal
- o contexto ou escala afetada, quando isso for relevante

## Visao rapida da problematica

A visao rapida deve apresentar, em poucas linhas, a problematica que justifica o `no`.

Deve responder ao menos:

- qual problema sera levado ao `no`
- por que ele importa agora
- por que vale a pena mobilizar tempo coletivo para ele
- que tipo de elaboracao o encontro precisa produzir
- que acao ou teste esta sendo considerado, se isso ja estiver claro

Esta secao serve para triagem. Uma pessoa deve conseguir decidir, a partir dela, se precisa ler o documento completo ou se sua participacao no `no` e relevante.

## Escopo:

- Sobre quais pontos/o que esse DFIP fala:

- Sobre quais pontos/o que esse DFIP **nao** fala:

O escopo deve proteger o encontro de dois riscos opostos:

- tratar um problema amplo demais para o tempo e maturidade disponiveis
- recortar tanto o problema que a acao proposta deixe de poder ser avaliada com honestidade

## Contexto base

O contexto base deve registrar os elementos minimos de realidade que tornam a problematica compreensivel sem depender da fala de quem propoe o `no`.

Pode incluir:

- antecedentes relevantes
- fatos, sinais ou condicoes ja observadas
- decisoes anteriores relacionadas
- limites materiais, institucionais, politicos ou operacionais
- atores, grupos ou papeis afetados
- consequencias ja percebidas ou plausiveis

O objetivo nao e esgotar o contexto. O objetivo e tornar explicito o suficiente para que a discussao nao comece apenas por reposicao oral de informacoes basicas.

## Formulacao central da problematica

Este e o nucleo do `DFIP`.

A formulacao central deve transformar o contexto em uma problematica explicitamente trabalhavel. Ela deve mostrar qual e a tensao, lacuna, contradicao, escolha ou incerteza que exige atencao e elaboracao coletiva.

Deve deixar claro:

- qual e o problema principal
- por que ele nao pode ser tratado apenas como detalhe operacional simples
- quais dimensoes estao em jogo
- qual consequencia existe se o problema nao for trabalhado
- que tipo de interpretacao, decisao ou encaminhamento o `no` precisa produzir

Esta secao nao deve apresentar como resolvido aquilo que ainda precisa ser elaborado no `no`. O papel do `DFIP` e preparar a problematica, nao substituir o trabalho coletivo do encontro.

## Acao proposta pelo propositor

Esta secao deve explicar o que o propositor deseja fazer, testar ou mobilizar para atuar sobre a problematica.

Deve deixar claro:

- qual acao, teste ou encaminhamento esta sendo proposto
- que tempo, energia, pessoas ou recursos seriam investidos
- se a proposta ainda e uma hipotese, experimento, decisao provisoria ou encaminhamento mais fechado
- qual parte da problematica essa acao tenta afetar diretamente
- que mudanca observavel a acao pretende provocar

Essa secao ajuda o leitor a separar a problematica em si da forma como o propositor deseja agir sobre ela.

## Projecoes apos acao:

Esta secao deve explicitar a aposta embutida na acao proposta. Ela nao deve apenas declarar que a acao e desejavel; deve mostrar como o propositor imagina que a realidade mudaria se tempo, energia ou recursos fossem investidos dessa forma.

- Uma vez que os recursos e tempo sao investidos da maneira que o propositor sugere, qual seria o cenario esperado?

- Quais coisas quantificaveis ou observaveis poderiamos aferir para considerar que as acoes desejadas foram bem sucedidas?

- Uma vez que os recursos e tempo sao investidos da maneira que o propositor sugere, quais seriam os sinais que poderiamos usar para verificar que a decisao nao foi assertiva ou sua execucao foi feita de forma errada?

- Como esses sinais poderiam ser acompanhados?

Sempre que possivel, os indicadores devem ser simples de acompanhar. O objetivo nao e criar uma camada tecnica pesada, mas permitir que o grupo perceba se a acao produziu o efeito esperado, se falhou ou se precisa ser revista.

## Fragilidades, limites e riscos

Todo `DFIP` deve registrar suas proprias limitacoes.

Pode incluir:

- informacoes ausentes
- hipoteses fracas
- vieses possiveis de quem formulou o documento
- risco de recorte excessivamente estreito
- risco de recorte excessivamente amplo
- termos ainda instaveis
- dependencia de documentos ou experiencias nao compartilhadas
- risco de o `DFIP` antecipar conclusoes que deveriam emergir do `no`

Esta secao protege o `DFIP` de parecer mais fechado do que realmente esta.

## Documentos relacionados

- outros documentos que nao sao `DFIs`, como planilhas, textos, livros, artigos ou videos que sao referenciados ou ajudam a compreender o contexto ou alguma secao deste `DFIP`.

## Estrutura minima consolidada

No formato completo, um `DFIP` deve conter ao menos:

1. `Identificacao`
2. `Posicao no encadeamento`
3. `Titulo da problematica`
4. `Visao rapida da problematica`
5. `Escopo.`
6. `Contexto base`
7. `Formulacao central da problematica`
8. `Acao proposta pelo propositor`
9. `Projecoes apos acao`
10. `Fragilidades, limites e riscos`
11. `Documentos relacionados`
