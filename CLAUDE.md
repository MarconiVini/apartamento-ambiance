# CLAUDE.md

Diretrizes comportamentais para reduzir erros comuns de LLM em código, mescladas com as particularidades deste projeto.

**Tradeoff:** estas diretrizes privilegiam cautela em vez de velocidade. Para tarefas triviais, use julgamento.

## 1. Pense antes de codar

**Não assuma. Não esconda confusão. Exponha tradeoffs.**

Antes de implementar:
- State suas suposições explicitamente. Se estiver incerto, pergunte.
- Se houver múltiplas interpretações, apresente-as — não escolha uma em silêncio.
- Se existir uma abordagem mais simples, diga. Conforme-se em questionar o pedido quando justificável.
- Se algo estiver confuso, pare. Nomeie o que confunde. Pergunte.

## 2. Simplicidade primeiro

**Código mínimo que resolve o problema. Nada especulativo.**

- Sem features além do que foi pedido.
- Sem abstrações para código de uso único.
- Sem "flexibilidade" ou "configurabilidade" que não foi pedida.
- Sem tratamento de erro para cenários impossíveis.
- Se você escreveu 200 linhas e poderiam ser 50, reescreva.

Pergunte a si mesmo: "Uma pessoa engenheira sênior diria que isso está complicado demais?" Se sim, simplifique.

## 3. Mudanças cirúrgicas

**Toque apenas no necessário. Limpe só a bagunça que você criou.**

Ao editar código existente:
- Não "melhore" código, comentários ou formatação adjacentes.
- Não refactora coisas que não estão quebradas.
- Siga o estilo existente, mesmo que você faria diferente.
- Se notar código morto não relacionado, mencione — não apague.

Quando suas mudanças criarem órfãos:
- Remova imports/variáveis/funções que SEUS edits tornaram unused.
- Não remova código morto pré-existente sem ser pedido.

O teste: toda linha alterada deve rastrear diretamente de volta ao pedido do usuário.

## 4. Execução orientada a objetivos

**Defina critérios de sucesso. Repita até verificar.**

Transforme tarefas em objetivos verificáveis:
- "Adicionar validação" → "Escrever testes para inputs inválidos, depois fazê-los passar"
- "Corrigir o bug" → "Reproduzir o bug, depois corrigir"
- "Refactorar X" → "Garantir que o comportamento fica idêntico antes e depois"

Para tarefas multi-passo, planeje:
```
1. [Passo] → verificar: [checagem]
2. [Passo] → verificar: [checagem]
```

Critérios fortes permitem trabalhar de forma independente. Critérios fracos ("faz funcionar") exigem clarificação constante.

Neste projeto (sem suíte de testes), verificação = abrir a página no navegador e exercitar o fluxo afetado (tema, galeria, localização, etc.).

---

# Projeto: Ambiance 1 (landing page)

Landing page estática de venda de apartamento (Condomínio Ambiance 1, Campinas). **Não é Rails** — é um mockup/estático puro. A raiz do repo é um hub; o site completo (HTML, JS, assets) vive em `ambiance-1/`:

- `index.html` (raiz) — stub mínimo: só um link de texto apontando para `ambiance-1/`, sem JS nem GA4.
- `ambiance-1/index.html` — arquivo único (~176 KB) com toda a página (hero, galeria, móveis/eletrodomésticos, planta, localização, diferenciais, finanças, estrutura, contato/footer). Tudo em pt-BR.
- `ambiance-1/resources/app.js` — toda a lógica UI em vanilla JS (Anti-FOUC, config do Tailwind, galeria, lightboxes, localização, tracking GA4). É path-agnostic.
- `ambiance-1/resources/app.css` — CSS customizado (extraído do `<style>` inline do `ambiance-1/index.html`).
- `ambiance-1/DESIGN.md` — design system (tokens de cor, tipografia Hanken Grotesk + Inter, spacing, componentes). É a fonte da verdade visual.

**Não existe** build, bundler, package.json, testes ou `bin/rails quality:check`. Não crie essa estrutura sem pedido.

## Stack

- **Tailwind via Play CDN** (`https://cdn.tailwindcss.com?plugins=forms,container-queries`) — plugins `forms` e `container-queries` ativos. A config do Tailwind (cores/tokens mapeados) vive **dentro de `ambiance-1/resources/app.js`**, não no HTML.
- Ícones: **Bootstrap Icons 1.11.3** + Material Symbols + Google Fonts (Hanken Grotesk, Inter).
- GA4 `G-R40NFZHCLM` (gtag no `<head>`; eventos de visualização/permanência/cliques por seção no `ambiance-1/resources/app.js`).
- Deploy: Vercel — a raiz (`https://ambiance1-campinas.vercel.app/`) serve o stub; o site está em `https://ambiance1-campinas.vercel.app/ambiance-1/` (URL canônica do site, já no HTML).

## Ordem de carregamento importa

`ambiance-1/resources/app.js` é carregado **de forma síncrona no `<head>`** do `ambiance-1/index.html`, logo após o Play CDN, para que os scripts Anti-FOUC (tema, WhatsApp) rodem antes da primeira pintura e a config do Tailwind seja aplicada a tempo. Não transforme em `defer`/`async` nem mova para o fim do body.

## Tema (light/dark)

- Tokens de cor são **canais rgb** (`--on-surface: 26 28 28`) definidos em `ambiance-1/resources/app.css`, acessados via `rgb(var(--token) / <alpha>)` tanto pelo Tailwind quanto pelo CSS customizado.
- Troca de tema = adicionar/remover classe `.dark` no `<html>` (prioridade: `localStorage` > `prefers-color-scheme`).
- **Gotcha:** o `ambiance-1/resources/app.css` é um arquivo comum, **não** processado pelo Tailwind — `theme()` ali é ignorado. Use os hex/rgb do `ambiance-1/DESIGN.md`.

## Gotchas conhecidos

- **Bootstrap Icons 1.11.3 não tem** `bi-couch`, `bi-utensils`, `bi-washing-machine` nem `bi-handshake`. Antes de usar um ícone novo, confira no manifest: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.json`.
- **CTAs de WhatsApp ficam ocultos por padrão** e só aparecem com `?magic=awesome` na URL do site — ex.: `.../ambiance-1/?magic=awesome` (o parâmetro é removido da URL sem reload após uso). O `ambiance-1/resources/app.js` é path-agnostic e não precisa de edição para isso. Não "corrija" CTAs invisíveis — é intencional.
- **Reveal é estático por decisão do dono (16/08/2026):** todos os `.reveal-up` já nascem com `active` — o conteúdo fica sempre visível, mesmo se o JS falhar. O estado oculto e a transition longa vivem em `.reveal-up:not(.active)` no `ambiance-1/resources/app.css`. Ao criar elementos novos com `.reveal-up`, inclua a classe `active`.
- **Móveis & Eletrodomésticos ficam sempre abertos** (o toggle foi removido por decisão do dono em 16/08/2026). Não reintroduza comportamento de colapso nessa seção.
- Imagens de localidades seguem o padrão `ambiance-1/localidades/{categoria}:{modo}:{nome}.png` (ex.: `barbearia:pe:Barbearia-do-Gregorio.png`), onde modo é `pe` (a pé) ou `carro`. Preserve o padrão ao adicionar novas.

## Comandos

```bash
# Servir localmente a partir da raiz do repo
python3 -m http.server 8000
# Stub:  http://localhost:8000/
# Site:  http://localhost:8000/ambiance-1/
```

Não há lint, testes ou build. Verificação visual no navegador é o critério.
