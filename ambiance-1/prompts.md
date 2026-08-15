Baseado na imagem da planta, crie hotspots para cada ambiante.

Em cada hotspot coloque as seguintes informacoes adicionais
Cozinha
- Com geladeira (marca X)

Lavanderia
- Com maquina de lavar roupa (marca Y)

Quarto
- Com cama Ortobom (marca Z)

Sala
- Com sofá 2 lugares


Na sessao "Localização Inteligente"

gostaria de colocar todas as localidades onde eu tenho imagens salvas do bairro.
O funcionamento da nomenclatura é a seguinte:
localidades/academia:carro:titans.png

dentro do nome da imagem temos o seguinte formato:
academia -> é a categoria
: -> separador
carro -> tipo de locomocao
: -> separador
titans -> nome do estabelecimento

Com base nisso reconstrua essa sessao do site. de forma a poder selecionar a categoria e aparecer todos os estabelecimentos da categoria. E ele tambem ao selecionar um estabelecimento, vai poder alternar clicando, entre carro e a pé.


Alterar em Planta Inteligente com os textos a seguir (pode melhora-los para parecer mais profissional)
o Dormitorio 1 -> mudar titulo para Dormitorio principal. Armario embutido espelhado e criado mudo incluso
o Dormitorio 2 -> mudar titulo para Dormitorio secundario. Remover o cama ortobom desse item
Terraço -> mudar para "Area externa tranquila e sem barulho voltado para o estacionamento e a mata ao lado"
lavanderia -> adicionar que tem um varal retratil e armario planejado
cozinha -> adicionar que tem fogao eletrico embutido, suga-ar, armarios planejados
sala de estar -> hack de televisao incluso, estante de gesso embutida na parede
sala de jantar -> conjunto de espelhos para melhorar a amplitude do local
banheiro -> Armarios planejados, metais para banheiro trocados e novos. Chuveiro lorenzetti incluso 

na parte
Fluxo circular otimizado
Ventilação cruzada
Isolamento acústico premium

trocar para 
Bom isolamento acústico no imóvel
Sol da tarde lateral
Ventilação natural boa
Ar fresco da mata lateral
pintura nova branca
possibilidade de instalação de ar-condicionado
--------------------

alterar a sessao de Diferenciais para o seguinte:

🌳 Localização Estratégica

A poucos minutos da Unicamp, CPQD, Sirius, CNPEM, Alphaville Campinas e Rodovia Dom Pedro I. Ideal para quem busca mobilidade sem abrir mão da tranquilidade.

🛡️ Condomínio Completo e Seguro

Portaria 24 horas, salão de festas, churrasqueira, quadra esportiva, playground, brinquedoteca e elevador para mais conforto no dia a dia.

🌅 Qualidade de Vida

Um bairro residencial tranquilo, cercado por áreas verdes e com comércio essencial próximo, perfeito para famílias, casais e profissionais que trabalham na região.


Mobilidade Inteligente

Acesso rápido às principais rodovias e aos polos tecnológico e universitário de Campinas. Menos tempo no trânsito, mais tempo para viver.

Tranquilidade para Morar
O Ambiance oferece o equilíbrio entre uma região calma e toda a conveniência de Campinas a poucos minutos de distância.

Bairro com tudo que precisa
O Bairro do jardim myriam já tem todos os estabelecimentos que um bairro completo precisa, padarias, marcados, barbearias, material de construção e acesso rapido a rodovia
------------------------

Crie uma sessao abaixo de detalhes tecnicos do imovel. Nele liste quantos comodos tem, deixe uma sessao para discriminacao do valor do condominio, valor do iptu, valor da casa e valorizacao ao longo de x anos (vou decidir depois o que colocar em x)

abaixo desse item quero uma sessao para detalhes do condominio em si, aqui vou listar o que tem. como Vaga coberta, duas churrasqueiras, salao de festas (com valor de churrasqueira e salao inclusos), banheiros externos, brinquedoteca, salacao de jogos e tambem mercadinho interno do condominio
]

-------------

Ao clicar


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

Sempre que o problema for complexo, grande ou ambíguo, a criação de sub-agents NÃO é opcional — é obrigatória.