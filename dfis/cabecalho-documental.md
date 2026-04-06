# DFI - Modelo de cabecalho documental

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Titulo da interpretacao

Modelo minimo de cabecalho para documentos do projeto

## Contexto

O repositorio esta entrando em uma fase em que os documentos deixam de ser apenas anotacoes soltas e passam a compor um ecossistema documental mais coerente.

Ao mesmo tempo, o projeto ja reconhece a existencia de pelo menos dois publicos distintos:

- um publico mais amplo, que precisa de clareza e menor atrito de entrada
- um publico mais interno, que pode operar com maior densidade conceitual e com uso controlado de siglas

Sem um cabecalho minimo, informacoes importantes sobre o estatuto de cada documento ficam dispersas ou implicitas demais, aumentando o risco de ambiguidade sobre:

- para quem o documento foi escrito
- qual o seu grau de estabilidade
- como siglas devem ser usadas naquele contexto
- que tipo de documento esta sendo lido

## Interpretacao central

Um cabecalho minimo e util para o projeto porque ajuda a explicitar, logo no inicio do documento, as informacoes de enquadramento que mais reduzem ambiguidade de leitura e uso.

Esse cabecalho nao deve ser grande nem burocratico. Seu papel nao e transformar cada documento em formulario, e sim tornar visiveis alguns metadados conceituais e editoriais que o leitor precisa para interpretar o restante do conteudo com mais precisao.

No estado atual do projeto, parece suficiente que esse cabecalho identifique ao menos:

- tipo do documento, com sigla e nome completo quando isso ajudar a leitura
- publico principal
- status do documento
- regra de uso de siglas

## Justificativa interpretativa

Esse conjunto minimo parece razoavel porque cada um desses campos responde a uma necessidade real de leitura:

- o `tipo`, quando apresentado como `SIGLA (nome completo)`, ajuda a entender rapidamente que artefato esta sendo lido sem espalhar a mesma informacao em dois campos
- o `publico principal` ajuda a ajustar linguagem, densidade e expectativa de leitura
- o `status` ajuda a distinguir o que esta mais estavel do que ainda esta em formulacao
- a `regra de uso de siglas` ajuda a evitar tanto excesso de compressao quanto repeticao desnecessaria

## Modelo proposto

Um formato simples e legivel em Markdown parece mais adequado do que uma estrutura pesada de metadados neste momento.

Modelo inicial:

```md
## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao
```

## Limites da proposta

- o cabecalho nao deve crescer sem necessidade concreta
- nem todo documento precisa receber imediatamente todos os campos possiveis imaginaveis
- o cabecalho deve servir a leitura, nao competir com ela
- juntar sigla e nome completo no campo `tipo` so faz sentido quando a fusao continuar clara e legivel
- se um documento for claramente voltado a publico amplo, o uso de siglas deve ser restringido ou evitado

## Consequencias praticas

Se essa interpretacao for aceita como boa direcao provisoria, ela permite:

- padronizar gradualmente documentos centrais do projeto
- deixar mais clara a diferenca entre documentos internos e textos de entrada mais acessivel
- controlar melhor o uso de siglas
- criar uma base para evoluir depois para templates ou regras mais especificas

## Pontos em aberto

- quais tipos de documento devem obrigatoriamente usar esse cabecalho
- se deve existir o valor `misto` no campo de publico
- quais estados, alem de `provisoria` e `estavel`, realmente serao necessarios
- em quais casos o campo `tipo` deve aparecer sem sigla ou sem nome expandido
- quando um cabecalho pode ser omitido sem gerar perda relevante de clareza

## Relacao com outros artefatos

- este DFI pode orientar futuras regras de nomenclatura e uso de siglas
- este DFI pode servir de insumo para um template de cabecalho documental
- este DFI tambem pode motivar revisoes no glossario e nas estruturas minimas dos artefatos centrais
