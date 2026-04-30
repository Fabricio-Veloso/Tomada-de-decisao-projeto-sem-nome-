# Requisitos futuros

## Processo de sugestoes

Foi registrada a ideia de um fluxo digital que ajude o usuario a descobrir se precisa de um no ou de uma chain, e que ofereca preenchimento assistido ou recomendacao de horarios e dinamicas.

## Interface com assistencia

Uma interface simples poderia fazer perguntas como a duracao esperada do objetivo ou detalhes do que se deseja alcancar, para sugerir quantidade de nos e dinamicas.

## Agendamento e comprometimento

- o usuario poderia selecionar datas para os nos de uma chain
- participantes poderiam confirmar presenca e comprometimento por meio de links
- a chain so se iniciaria quando as confirmacoes necessarias estivessem registradas

## Sistema de reputacao

Foi registrada a ideia de marcar perfis em casos de desistencias, faltas sem justificativa ou quebra de comprometimento, influenciando a credibilidade futura do participante.

## Confirmacao de presenca

Ao criar um no ou chain privada, o usuario poderia definir participantes necessarios e facultativos, com regras de remarcacao quando faltassem confirmacoes obrigatorias.

## Feedback durante tempos de fala

Foi sugerido um mecanismo para que ouvintes expressem rapidamente alinhamento com o que esta sendo dito durante a fala de outra pessoa.

Tambem foi sugerido um mecanismo de sinalizacao em tempo real para que ouvintes indiquem ao propositor quando ja entenderam um topico e ele possa avaliar se vale passar para a proxima secao do documento.

## Atribuicao de funcoes

Tambem foi sugerido um ambiente em que membros cadastrados recebam papeis e saibam automaticamente suas responsabilidades e documentos necessarios antes de cada no.

## Apoio a participantes novatos

Foi sugerido que, quando houver participantes novos em um no, o software possa exibir um popup curto com chamada para acao explicando o que e o papel de arbitro e para que ele serve, sem tirar a pessoa da tela principal nem dispersar sua atencao.

## Fluxo assincrono de nos

Foi percebido que grande parte do processo do no pode, em tese, ser executada de forma assincrona, desde que as etapas e restricoes do encontro sejam preservadas em janelas de tempo separadas por horas ou dias.

Isso sugere um futuro modo de operacao em que o sistema espelhe o fluxo do no em fases sucessivas, como apresentacao inicial, duvidas e esclarecimentos, contrapontos, contrapropostas, propostas alternativas, propostas potencializadoras e fechamento.

Entre essas fases, o sistema poderia abrir intervalos definidos para leitura, resposta, sinalizacao e registro, sem exigir presenca simultanea de todos os participantes em tempo real.

Tambem fica registrada a necessidade de pensar quais regras do no presencial precisariam ser mantidas, adaptadas ou reforcadas para que um processo assincrono nao perca legibilidade, disciplina e capacidade real de deliberacao.

## Resolucao de links em documentos operacionais

DPNs devem poder permanecer enxutos, apontando para DFIs de papeis, regras, dinamicas e outros documentos de apoio sem copiar o conteudo inteiro.

Em uma futura camada digital, o sistema deveria conseguir resolver esses links em memoria e mostrar o texto relevante ao usuario quando necessario.

Isso preserva a fonte documental sem duplicacao, mas permite que a interface apresente uma experiencia completa. Se houver limitacao tecnica, a implementacao pode simular esse comportamento por cache, pre-renderizacao ou outra estrategia, desde que o repositorio continue sendo a fonte principal.

## Links explicativos sem poluir documentos

Documentos do projeto frequentemente apontam para outros documentos que explicam secoes, opcoes de preenchimento ou criterios de uso.

Em uma futura camada digital, seria importante que a interface mostrasse esses links explicativos de forma facil de acessar sem sobrecarregar o documento principal. Exemplos possiveis: painel lateral, tooltip, preview recolhivel, popover ou area de referencias contextuais.

O objetivo e preservar documentos enxutos, mas permitir que o leitor abra rapidamente o DFI ou DFIB que explica uma secao quando precisar de contexto.

## Assinaturas e atestes com chave privada

Em secoes como `consolidado em` ou `no X`, seria interessante permitir que usuarios assinem presencas, consolidacoes ou atestes usando chaves privadas.

Isso poderia reduzir risco de alteracao indevida de dados sensiveis do fluxo, como presenca, validacao de consolidacao, aceite de responsabilidade ou atestado de que determinado documento foi reconhecido em um no.

A ideia ainda nao define arquitetura criptografica. Ela registra apenas o requisito futuro de integridade, autoria e verificabilidade para eventos importantes do processo.

## Consolidacao de chains em DFIs

Avaliar se toda chain deve produzir um DFI de consolidacao ao final, reunindo interpretacoes, contrapontos, propostas alternativas, reformulacoes e material relevante produzido ao longo do encadeamento.

Essa possibilidade deve ser testada sem transformar toda chain em processo excessivamente pesado.

## Uso de DFIBs para dados brutos

Avaliar como futuras interfaces devem criar, exibir e relacionar `DFIBs` com `DFIs`, `DFIPs`, `DPNs`, `DPDs` e `DPCs`.

O objetivo e permitir que dados brutos, especificacoes, custos, medidas, listas e modelos sejam referenciados por documentos interpretativos sem inflar esses documentos.

## Politica de nomenclatura e siglas

Definir quando uma nova sigla deve ser criada e quando uma necessidade deve ser resolvida por secao opcional, status ou relacao entre documentos existentes.

## Camada aprofundada de conteudo publico

Decidir formato e escopo da camada aprofundada de conteudo para participantes mais comprometidos, sem competir com a camada acessivel em `publicacao/`.
