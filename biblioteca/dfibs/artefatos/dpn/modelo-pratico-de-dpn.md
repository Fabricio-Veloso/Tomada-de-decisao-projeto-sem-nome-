# DFIB - Modelo pratico de DPN para preencher com ajuda de IA

## Identificacao

- tipo: DFIB (Documento de Formalizacao Informacional Bruta)
- publico: interno
- status: consolidado
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: modelo pratico
- tem origem em: `biblioteca/dfibs/artefatos/dpn/estrutura-minima-de-dpn.md`
- documentos relacionados: `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `biblioteca/dfibs/artefatos/posicao-no-encadeamento/opcoes-de-posicao-no-encadeamento.md`
- proximo passo: usar como apoio para gerar DPNs reais
- data da ultima consolidacao: 2026-04-30

## Para que serve

Use este modelo quando voce quer montar um `DPN` para um `no` especifico.

O `DPN` nao precisa repetir definicoes que ja existem em outros documentos. Ele deve apontar para os documentos certos e registrar apenas o que e proprio daquele no.

## Como preencher

- escreva de forma simples
- use links para papeis, regras e dinamicas ja registradas
- registre `a definir` quando algo ainda nao estiver fechado
- nao copie textos longos de outros documentos se um link resolver
- deixe claro o que e especifico daquele no

## Formulario

```markdown
# Formulario para gerar um DPN

## 1. Qual e o nome curto deste no?

Resposta:

## 2. Qual e o objetivo do no?

(Explique o que o encontro precisa produzir ou examinar.)

Resposta:

## 3. Qual documento ou material sera alvo do no?

(Pode ser DFI, DFIP, DPN, dinamica, registro ou outro material.)

Resposta:

## 4. Quais papeis precisam existir neste no?

(Indique arbitro, criador, propositor ou outros. Linke o DFI de papeis quando possivel.)

Resposta:

## 5. Quem sao os participantes necessarios?

Resposta:

## 6. Existem participantes facultativos?

Resposta:

## 7. Qual criterio de quorum sera usado?

(Se usar a dinamica padrao de checagem de quorum, informe isso.)

Resposta:

## 8. Quais regras minimas devem ser aceitas?

(Normalmente, referenciar o DFI de regras minimas basta. Registre aqui apenas excecoes ou acrescimos.)

Resposta:

## 9. Quais dinamicas compoem o no, em ordem?

(Use links para dinamicas ja registradas.)

Resposta:

## 10. Quanto tempo o no deve durar?

Resposta:

## 11. Quais saidas sao esperadas?

(Exemplos: duvidas esclarecidas, contrapontos registrados, novo DFI, decisao, encaminhamento.)

Resposta:

## 12. Que materiais devem estar disponiveis antes do no?

Resposta:

## 13. O que a IA deve preservar obrigatoriamente?

Resposta:
```

## Prompt para colar na IA

```markdown
Voce vai transformar o formulario preenchido em um DPN.

DPN significa Documento de Projeto de No.

Neste projeto, um `no` e um encontro estruturado com objetivo, regras, papeis e dinamicas. O DPN nao formaliza a interpretacao produzida pelo encontro e nao substitui o DFIP que prepara uma problematica. Ele descreve como o no deve ser montado e conduzido.

Regras obrigatorias:

- siga exatamente a estrutura de output abaixo
- use linguagem clara e direta
- nao invente informacoes ausentes
- quando faltar informacao, escreva `a definir`
- use links para documentos de papeis, regras e dinamicas quando eles forem citados
- nao copie definicoes longas de documentos linkados
- registre apenas o que for especifico deste no
- preserve tudo que estiver listado em "O que a IA deve preservar obrigatoriamente?"

Gere o documento final neste formato:

# DPN - [nome curto do no]

## Identificacao

- tipo: DPN (Documento de Projeto de No)
- publico: a definir
- status: [usar resposta; se nao houver, usar rascunho]
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: [usar resposta; se nao houver, usar rascunho]
- passo atual: [usar momento atual do no; se nao houver, usar pronto para uso no no]
- tem origem em: [indicar DFIP, DFI, demanda ou registro que originou o no; se nao houver, usar a definir]
- documentos relacionados: [listar documento-alvo, dinamicas, regras e materiais citados; se nao houver, usar a definir]
- proximo passo: [indicar realizar no, revisar DPN ou arquivar]
- data da ultima consolidacao: [usar data informada; se nao houver, usar a definir]

## Objetivo do no

[Explicar objetivo do no.]

## Documento-alvo do no

[Indicar documento ou material que sera trabalhado.]

## Papeis

[Listar papeis do no e linkar o DFI de papeis quando possivel. Registrar apenas especificidades.]

## Participantes e quorum

[Listar participantes necessarios, facultativos e criterio de quorum. Linkar dinamica de quorum quando usada.]

## Regras minimas

[Referenciar o DFI de regras minimas e registrar apenas excecoes ou acrescimos.]

## Dinamicas em ordem

[Listar dinamicas em ordem, com links.]

## Saidas esperadas

[Listar entregas esperadas do no.]

## Materiais relacionados

[Listar documentos necessarios antes do no.]
```

## Como revisar o resultado

- confira se o DPN nao repetiu definicoes longas de papeis, regras ou dinamicas
- confira se os links apontam para documentos existentes
- confira se objetivo, documento-alvo, quorum e saidas ficaram claros
- confira se o no pode ser reproduzido por alguem que nao participou da conversa original
