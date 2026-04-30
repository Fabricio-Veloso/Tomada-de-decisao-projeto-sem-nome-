# DFI - Circulacao, revisao e consolidacao de DFIs

## Identificacao

- tipo: DFI (Documento de Formalizacao Interpretativa)
- publico: interno
- status: consolidado
- uso de siglas: permitido apos a primeira mencao

## Posicao no encadeamento

- estado do fluxo: consolidado
- passo atual: referencia operacional para uso em DFIs reais
- tem origem em: rascunhos temporarios removidos durante organizacao para versao 1.0
- documentos relacionados: `biblioteca/dfibs/artefatos/dfi/estrutura-minima-de-dfi.md`, `biblioteca/dfis/modelo-minimo-de-dfi.md`, `biblioteca/dfis/fluxo-documental/posicao-no-encadeamento.md`, `publicacao/README.md`, `automacao/notion-sync/README.md`
- proximo passo: usar como referencia para circulacao real de DFIs
- data da ultima consolidacao: consolidado em no anterior

## Titulo da interpretacao

Fluxo minimo para criar, circular, revisar, consolidar e arquivar DFIs

## Visao rapida

Este DFI registra o fluxo minimo atual para `DFIs`: criar, preparar, circular, revisar, bifurcar quando necessario, consolidar ou arquivar.

A leitura consolidada e que `Git` deve permanecer como fonte da verdade, enquanto interfaces como `Notion` podem servir como camada de leitura, comentario e circulacao controlada.

## Contexto

O projeto ja testou a ideia de emular o fluxo documental antes de construir software proprio. A versao temporaria anterior ainda considerava `Google Docs` e `Google Drive` como ambiente principal para participantes nao tecnicos.

Depois, o projeto passou a tratar `Notion` como interface de publicacao e comentario, com o repositorio como fonte mais estavel do conteudo.

Com isso, a tese util nao e mais a escolha do Google Docs, mas sim a separacao entre:

- fonte de verdade documental
- interface de leitura e comentario
- criterio de circulacao, revisao e consolidacao

## Interpretacao central

Um `DFI` deve seguir um circuito simples o bastante para ser usado agora.

### 1. Criacao

Um `DFI` pode nascer:

- a partir de um `no`
- a partir de uma dinamica
- como resposta elaborada a outro `DFI`
- como formalizacao posterior de uma intuicao relevante

Ao nascer, deve receber titulo provisoriamente claro, estado inicial e indicacao de origem quando isso fizer sentido.

### 2. Preparacao para circular

Antes de circular, o documento deve permitir triagem minima.

Vale revisar se:

- a `Visao rapida` mostra o ponto central
- o `Contexto` e suficiente para o leitor nao depender apenas da memoria oral
- a `Interpretacao central` esta clara
- a `Posicao no encadeamento` localiza origem, relacoes e proximo passo

Quando esse minimo estiver aceitavel, o documento pode ser marcado como `aberto para consideracao` ou `preparado para apresentar no no`, conforme o caso.

### 3. Circulacao

O documento circula no publico previsto pela interface combinada para leitura e comentario.

No arranjo atual, a direcao e:

- `Git` e o repositorio guardam a fonte da verdade
- `publicacao/` guarda o recorte curado que pode ser publicado
- `Notion` funciona como janela controlada de leitura e comentario

Comentarios tendem a cair em tres grupos:

- `correcao`: aponta erro, imprecisao ou ajuste local
- `contraponto`: discorda de parte relevante da interpretacao
- `extensao`: acrescenta elemento novo sem negar o nucleo do documento

### 4. Ajustar ou criar novo DFI

Parece razoavel ajustar o mesmo documento quando o comentario:

- corrige erro factual ou formulacao
- melhora clareza sem mudar a espinha dorsal do texto
- adiciona detalhe que reforca a mesma interpretacao central

Parece razoavel criar novo `DFI` quando o comentario:

- muda a interpretacao central
- oferece contraproposta relevante
- corrige projecao de modo estrutural
- abre um subtema com autonomia suficiente

### 5. Consolidacao

Ao encerrar uma rodada de leitura, comentario ou debate em no, o documento pode:

- voltar para `rascunho`
- permanecer `em debate`
- ir para `consolidado`
- gerar um ou mais novos `DFIs`
- ir para `arquivado`

Ao consolidar, vale atualizar ao menos estado, passo atual, documentos relacionados, proximo passo e data ou contexto de consolidacao.

### 6. Retorno para o no

Quando houver no seguinte, nem sempre o documento inteiro precisa voltar ao encontro.

Podem voltar:

- a `Visao rapida`
- os pontos centrais de dissenso
- os novos `DFIs` surgidos no intervalo
- o que ainda precisa de deliberacao coletiva

## Justificativa interpretativa

Esse fluxo separa registro estavel, leitura publica e debate sem exigir plataforma propria antes da hora.

Ele tambem evita dois erros:

- tratar todo comentario como mudanca no mesmo documento
- criar novo documento para qualquer ajuste pequeno

A decisao consolidada e usar um circuito documental simples, legivel e testavel, mantendo abertura para automacoes futuras.

## Fragilidades, limites e riscos

- comentarios feitos em interface sincronizada podem se perder se nao virarem registro no repositorio
- ainda ha trabalho manual para decidir entre ajuste local, novo DFI e arquivamento
- a representacao de linhagem ainda pode precisar de refinamento quando houver muitos documentos relacionados
- `Notion` ajuda como interface, mas nao deve virar fonte principal do texto

## Relacao com outros artefatos

- este DFI substitui a funcao util dos rascunhos temporarios sobre fluxo documental
- este DFI deve orientar o uso de `biblioteca/dfis/modelo-minimo-de-dfi.md`
- este DFI conversa com a camada de publicacao e com futuras automacoes de circulacao
