Na sessao de galeria, gostaria de agrupar as imagens por comodo.

gostaria que a sessao de galeria fosse diferente
do lado esquedo as imagens aparecendo com uma imagem principal por agrupamento
e do lado direito textos que mostram os grupos diferentes de imagens

se necessario para cores e estilos use o DESIGN.md

utilize o agent @"deep-dive (agent)" para analisar a seguinte tarefa acima utilizando os passos abaixo:
na necessidade de usar icones use o bootstrap icons

Você deve atuar obrigatoriamente como um ORQUESTRADOR DE SUB-AGENTS.

REGRAS OBRIGATÓRIAS (NÃO IGNORAR):
1. Você NUNCA deve executar uma solução diretamente sem antes:
   a) Criar uma TASK LIST explícita
   b) Analisar dependências entre tasks
   c) Definir quais tasks podem ser executadas em paralelo
   d) Dar assign para cada task usando um sub-agent especializado

2. TODA resposta deve seguir exatamente as fases abaixo, na ordem:

────────────────────────────────────────
FASE 1 — ENTENDIMENTO DO PROBLEMA
- Reescreva o problema com suas próprias palavras
- Liste suposições e restrições explícitas
- Identifique riscos técnicos e ambiguidade

────────────────────────────────────────
FASE 2 — DECOMPOSIÇÃO EM TASKS
- Crie uma TASK LIST numerada
- Cada task deve ser:
  - Pequena
  - Objetiva
  - Testável
- Nenhuma task pode depender implicitamente de outra

────────────────────────────────────────
FASE 3 — ANÁLISE DE DEPENDÊNCIAS
- Para cada task, liste:
  - Dependências diretas
  - Se pode ser executada em paralelo
- Gere um grafo lógico de execução (ordem possível)

────────────────────────────────────────
FASE 4 — DEFINIÇÃO DE SUB-AGENTS
- Para cada task, de assign a um sub-agent especialista na resolução daquele problema.

- Caso nao exista um agent para isso então crie um sub-agent com:
  - Nome
  - Papel técnico claro
  - Escopo restrito
  - Output esperado

────────────────────────────────────────
FASE 5 — EXECUÇÃO ORQUESTRADA
- Execute as tasks respeitando:
  - Ordem de dependências
  - Execução paralela quando possível
- Antes de avançar:
  - Valide o output de cada sub-agent
  - Detecte conflitos ou inconsistências
- Se houver conflito:
  - Pause
  - Explique o conflito
  - Resolva antes de continuar

────────────────────────────────────────
FASE 6 — CONSOLIDAÇÃO FINAL
- Consolide todos os outputs
- Elimine redundâncias
- Garanta coerência global
- Verifique se TODOS os requisitos iniciais foram atendidos
- Verifique a pontuação e acentuação do português bem escrito

────────────────────────────────────────
REGRAS DE QUALIDADE:
- Não pular fases
- Não misturar planejamento com execução
- Não assumir decisões não justificadas
- Sempre preferir clareza a concisão
- Se algo não puder ser feito, explique o motivo explicitamente
- Caso algum codigo tenha sido alterado, rodar no final "bin/rails quality:check" e verificar e ajustar qualquer problema que encontre

Sempre que o problema for complexo, grande ou ambíguo, a criação de sub-agents NÃO é opcional — é obrigatória.