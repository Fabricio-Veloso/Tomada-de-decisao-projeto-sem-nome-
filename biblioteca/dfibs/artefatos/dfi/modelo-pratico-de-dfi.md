# DFIB - Modelo pratico de DFI para preencher com ajuda de IA

## Identificacao

- tipo: DFIB (Documento de Formalizacao Informacional Bruta)
- publico: interno
- status: provisoria
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: modelo pratico
- tem origem em: `biblioteca/dfibs/artefatos/dfip/modelo-pratico-de-dfip.md`
- documentos relacionados: `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`, `biblioteca/dfis/modelo-minimo-de-dfi.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`
- proximo passo: testar em DFIs reais
- data da ultima consolidacao: 2026-04-30

## Conteudo

Use este modelo quando voce quer transformar uma leitura, tese, contraponto, aprendizado ou consolidacao em um `DFI`, mas quer que uma IA ajude a organizar o material.

### Como preencher

- escreva de forma simples
- use exemplos concretos quando tiver
- se algo estiver incerto, escreva `nao sei ainda`
- nao tente escrever bonito; tente escrever com precisao
- preserve duvidas, limites e discordancias

### Formulario

```markdown
# Formulario para gerar um DFI

## 1. Qual interpretacao voce quer registrar?

(Diga a leitura principal em linguagem direta.)

Resposta:

## 2. Por que essa interpretacao importa agora?

Resposta:

## 3. De que contexto ela nasceu?

(Pode ser no, chain, conversa, documento anterior, problema recorrente ou observacao.)

Resposta:

## 4. Qual e a tese, proposta, contraponto ou leitura central?

Resposta:

## 5. Que argumentos, fatos, exemplos ou experiencias sustentam essa leitura?

Resposta:

## 6. O que ainda esta fraco, incerto ou incompleto?

Resposta:

## 7. Que riscos existem se essa interpretacao for aceita cedo demais?

Resposta:

## 8. Que documentos, nos, chains, dinamicas ou materiais se relacionam com ela?

Resposta:

## 9. Esse DFI veio de onde dentro do fluxo?

Resposta:

## 10. Qual e o estado atual deste documento?

(Exemplos: rascunho, aberto para consideracao, em debate, consolidado, arquivado.)

Resposta:

## 11. Qual deve ser o proximo passo?

Resposta:

## 12. Qual foi ou deve ser a data da ultima consolidacao?

Resposta:

## 13. O que a IA deve preservar obrigatoriamente?

Resposta:
```

### Prompt para colar na IA

```markdown
Voce vai transformar o formulario preenchido em um DFI.

DFI significa Documento de Formalizacao Interpretativa.

Neste projeto, um DFI registra uma interpretacao examinavel por pares. Ele nao deve fingir certeza onde existe hipotese, nao deve apagar fragilidades e nao deve substituir o encontro quando ainda houver trabalho coletivo a fazer.

Regras obrigatorias:

- siga exatamente a estrutura de output abaixo
- use linguagem clara e direta
- nao invente informacoes ausentes
- quando faltar informacao, escreva `a definir`
- nao transforme hipotese em certeza
- preserve duvidas, limites e discordancias
- nao adicione secoes extras no documento final
- preserve tudo que estiver listado em "O que a IA deve preservar obrigatoriamente?"

Gere o documento final neste formato:

# DFI - [titulo curto]

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: a definir
- status: [usar resposta sobre estado atual; se nao houver, usar rascunho]
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: [usar resposta sobre estado atual; se nao houver, usar rascunho]
- passo atual: [usar resposta sobre proximo passo ou estado; se nao houver, usar definicao provisoria]
- tem origem em: [usar resposta sobre origem no fluxo; se nao houver, usar a definir]
- documentos relacionados: [listar documentos citados; se nao houver, usar a definir]
- proximo passo: [usar resposta sobre proximo passo; se nao houver, usar revisar]
- data da ultima consolidacao: [usar resposta sobre data; se nao houver, usar a definir]

## Titulo da interpretacao

[Criar titulo claro e curto.]

## Visao rapida

[Em 2 a 5 linhas, responder sobre o que e este DFI, qual a interpretacao principal e por que ela importa.]

## Contexto

[Organizar o contexto que torna a interpretacao compreensivel.]

## Interpretacao central

[Apresentar a tese, proposta, contraponto, leitura ou articulacao interpretativa principal.]

## Justificativa interpretativa

[Explicar por que essa interpretacao parece razoavel e que elementos a tornam examinavel por pares.]

## Fragilidades, limites e riscos

[Listar duvidas, condicoes, informacoes ausentes, vieses possiveis e riscos de aceitar a leitura cedo demais.]

## Relacao com outros artefatos

[Relacionar com DFIPs, nos, chains, dinamicas, DFIBs, registros ou outros DFIs.]
```

### Como revisar o resultado

- confira se a IA inventou algo que voce nao disse
- confira se a interpretacao principal ficou clara
- confira se hipoteses continuam marcadas como hipoteses
- confira se as fragilidades nao foram suavizadas demais
- confira se a secao `Posicao no encadeamento` ficou curta e preenchida com valores selecionados
