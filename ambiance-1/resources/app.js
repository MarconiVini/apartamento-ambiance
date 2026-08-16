/*!
 * app.js - toda a logica de UI do site (vanilla JS).
 * Carregado de forma sincrona no <head>, logo apos o Play CDN do Tailwind,
 * para que os scripts Anti-FOUC (tema/WhatsApp) rodem antes da primeira
 * pintura e a configuracao do Tailwind seja aplicada a tempo.
 */


// ============================================================================
// Anti-FOUC: aplica o tema (light/dark) antes da primeira pintura.
// Prioridade: localStorage > prefers-color-scheme.
// ============================================================================

(function () {
        try {
                var stored = localStorage.getItem('theme');
                var dark = stored
                        ? stored === 'dark'
                        : window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', dark);
        } catch (e) { /* ignore */ }
})();

// ============================================================================
// Anti-FOUC WhatsApp: CTAs ja nascem ocultos via CSS.
// So sao habilitados se a URL contiver ?magic=awesome.
// O parametro e removido da URL (sem reload) apos uso.
// ============================================================================

(function () {
        try {
                var url = new URL(window.location.href);
                if (url.searchParams.get('magic') === 'awesome') {
                        url.searchParams.delete('magic');
                        window.history.replaceState(null, '', url.toString());
                        document.documentElement.classList.add('wa-enabled');
                }
        } catch (e) { /* ignore — estado padrão (oculto) já é o fallback */ }
})();

// ============================================================================
// Tailwind CSS - configuracao (deve rodar apos o Play CDN do Tailwind).
// Cores baseadas em variaveis CSS (rgb channels) para suportar
// light/dark sem precisar de variantes dark: em cada elemento.
// ============================================================================

tailwind.config = {
        darkMode: "class",
        theme: {
                extend: {
                        // Cores baseadas em variáveis CSS (rgb channels) para suportar
                        // light/dark sem precisar de variantes dark: em cada elemento.
                        // Definições em :root (light) e .dark em resources/app.css.
                        "colors": {
                                "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
                                "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
                                "surface-bright": "rgb(var(--surface-bright) / <alpha-value>)",
                                "on-background": "rgb(var(--on-background) / <alpha-value>)",
                                "secondary": "rgb(var(--secondary) / <alpha-value>)",
                                "error": "rgb(var(--error) / <alpha-value>)",
                                "on-secondary-fixed": "rgb(var(--on-secondary-fixed) / <alpha-value>)",
                                "inverse-on-surface": "rgb(var(--inverse-on-surface) / <alpha-value>)",
                                "secondary-container": "rgb(var(--secondary-container) / <alpha-value>)",
                                "on-error-container": "rgb(var(--on-error-container) / <alpha-value>)",
                                "surface-tint": "rgb(var(--surface-tint) / <alpha-value>)",
                                "on-secondary-fixed-variant": "rgb(var(--on-secondary-fixed-variant) / <alpha-value>)",
                                "inverse-surface": "rgb(var(--inverse-surface) / <alpha-value>)",
                                "surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
                                "outline": "rgb(var(--outline) / <alpha-value>)",
                                "tertiary": "rgb(var(--tertiary) / <alpha-value>)",
                                "inverse-primary": "rgb(var(--inverse-primary) / <alpha-value>)",
                                "on-secondary-container": "rgb(var(--on-secondary-container) / <alpha-value>)",
                                "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
                                "surface-dim": "rgb(var(--surface-dim) / <alpha-value>)",
                                "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
                                "on-primary-container": "rgb(var(--on-primary-container) / <alpha-value>)",
                                "on-primary-fixed-variant": "rgb(var(--on-primary-fixed-variant) / <alpha-value>)",
                                "error-container": "rgb(var(--error-container) / <alpha-value>)",
                                "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
                                "primary-fixed": "rgb(var(--primary-fixed) / <alpha-value>)",
                                "tertiary-fixed-dim": "rgb(var(--tertiary-fixed-dim) / <alpha-value>)",
                                "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
                                "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
                                "on-tertiary-fixed": "rgb(var(--on-tertiary-fixed) / <alpha-value>)",
                                "on-error": "rgb(var(--on-error) / <alpha-value>)",
                                "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
                                "tertiary-container": "rgb(var(--tertiary-container) / <alpha-value>)",
                                "secondary-fixed-dim": "rgb(var(--secondary-fixed-dim) / <alpha-value>)",
                                "on-tertiary-fixed-variant": "rgb(var(--on-tertiary-fixed-variant) / <alpha-value>)",
                                "on-tertiary-container": "rgb(var(--on-tertiary-container) / <alpha-value>)",
                                "secondary-fixed": "rgb(var(--secondary-fixed) / <alpha-value>)",
                                "surface": "rgb(var(--surface) / <alpha-value>)",
                                "on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
                                "on-primary-fixed": "rgb(var(--on-primary-fixed) / <alpha-value>)",
                                "tertiary-fixed": "rgb(var(--tertiary-fixed) / <alpha-value>)",
                                "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
                                "background": "rgb(var(--background) / <alpha-value>)",
                                "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
                                "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
                                "primary": "rgb(var(--primary) / <alpha-value>)",
                                "primary-fixed-dim": "rgb(var(--primary-fixed-dim) / <alpha-value>)"
                        },
                        "borderRadius": {
                                "sm": "0.125rem",
                                "DEFAULT": "0.25rem",
                                "md": "0.375rem",
                                "lg": "0.5rem",
                                "xl": "0.75rem",
                                "full": "9999px"
                        },
                        "spacing": {
                                "section-gap": "120px",
                                "gutter": "24px",
                                "margin-desktop": "64px",
                                "margin-mobile": "16px",
                                "container-max": "1280px",
                                "unit": "8px"
                        },
                        "fontFamily": {
                                "body-md": [
                                        "Inter"
                                ],
                                "display-lg": [
                                        "Hanken Grotesk"
                                ],
                                "body-lg": [
                                        "Inter"
                                ],
                                "headline-lg-mobile": [
                                        "Hanken Grotesk"
                                ],
                                "caption": [
                                        "Inter"
                                ],
                                "headline-lg": [
                                        "Hanken Grotesk"
                                ],
                                "headline-md": [
                                        "Hanken Grotesk"
                                ],
                                "label-md": [
                                        "Hanken Grotesk"
                                ]
                        },
                        "fontSize": {
                                "body-md": [
                                        "16px",
                                        {
                                                "lineHeight": "24px",
                                                "fontWeight": "400"
                                        }
                                ],
                                "display-lg": [
                                        "64px",
                                        {
                                                "lineHeight": "72px",
                                                "letterSpacing": "-0.03em",
                                                "fontWeight": "700"
                                        }
                                ],
                                "body-lg": [
                                        "18px",
                                        {
                                                "lineHeight": "28px",
                                                "fontWeight": "400"
                                        }
                                ],
                                "headline-lg-mobile": [
                                        "28px",
                                        {
                                                "lineHeight": "36px",
                                                "fontWeight": "600"
                                        }
                                ],
                                "caption": [
                                        "12px",
                                        {
                                                "lineHeight": "16px",
                                                "fontWeight": "400"
                                        }
                                ],
                                "headline-lg": [
                                        "32px",
                                        {
                                                "lineHeight": "40px",
                                                "letterSpacing": "-0.01em",
                                                "fontWeight": "600"
                                        }
                                ],
                                "headline-md": [
                                        "24px",
                                        {
                                                "lineHeight": "32px",
                                                "fontWeight": "600"
                                        }
                                ],
                                "label-md": [
                                        "14px",
                                        {
                                                "lineHeight": "20px",
                                                "letterSpacing": "0.05em",
                                                "fontWeight": "600"
                                        }
                                ]
                        }
                },
        },
}

// ============================================================================
// Reveal Animation - entrada dos elementos via IntersectionObserver.
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('active');
                                observer.unobserve(entry.target);
                        }
                });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach((el) => {
                observer.observe(el);
        });
});

// ============================================================================
// Google Analytics 4 - tracking de secao (visualizacao + tempo) e cliques.
// ID de medicao: G-R40NFZHCLM (snippet no <head> do index.html).
//
// Eventos disparados:
//   - section_view        : uma secao fica "ativa" (linha central do viewport).
//   - section_engagement  : ao sair/trocar de secao ou aba ficar oculta, com
//                           section_engagement_msec (tempo de permanencia).
//   - select_content      : cliques em hotspots, mapa, galeria, lightbox,
//                           WhatsApp e contato (content_type + content_id).
//
// Nao quebra nada se o GA estiver bloqueado/indisponivel (guarda em gaTrack).
// Requer dimensoes/metrica personalizadas no Admin do GA4:
//   section_name, content_type, content_id (dimensoes) e
//   section_engagement_msec (metrica, em milissegundos).
// ============================================================================

(function () {
	function gaTrack(event, params) {
		if (typeof gtag !== 'function') return; // GA ausente/bloqueado: silencioso
		try { gtag('event', event, params || {}); } catch (e) { /* ignore */ }
	}

	// ---- (1) Secao ativa + tempo de permanencia (dwell) ------------------
	// rootMargin central (-50%/-50%) cria uma linha fina no meio do viewport;
	// a secao esta "ativa" quando essa linha cruza ela. Garante uma unica
	// secao ativa por vez, mesmo em secoes mais altas que a tela (Planta,
	// Localizacao) - threshold 0.5 nao serviria nesses casos.
	var activeSection = null; // id da secao ativa
	var activeSince = 0;      // performance.now() de quando ficou ativa

	function emitDwell(id, since) {
		var dwell = Math.round(performance.now() - since);
		if (id && dwell > 0) {
			gaTrack('section_engagement', {
				section_name: id,
				section_engagement_msec: dwell
			});
		}
	}

	function setActive(id) {
		if (id === activeSection) return;
		if (activeSection) emitDwell(activeSection, activeSince);
		activeSection = id;
		activeSince = performance.now();
		if (id) gaTrack('section_view', { section_name: id });
	}

	document.addEventListener('DOMContentLoaded', function () {
		var sections = document.querySelectorAll('main section[id], footer[id]');
		if (!sections.length || !('IntersectionObserver' in window)) return;

		var io = new IntersectionObserver(function (entries) {
			// A linha central cruza no maximo uma secao por vez; achar a que
			// acabou de entrar. Se nenhuma entrou nesta remessa, mantem a ativa.
			var entering = null;
			for (var i = 0; i < entries.length; i++) {
				if (entries[i].isIntersecting) { entering = entries[i].target.id; break; }
			}
			if (entering !== null) setActive(entering);
		}, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

		sections.forEach(function (s) { io.observe(s); });

		// Tempo com a aba em background NAO conta (espelha o engagement time do
		// GA4): ao ocultar, emite o dwell acumulado; ao exibir, zera o relogio.
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'hidden') {
				if (activeSection) emitDwell(activeSection, activeSince);
			} else if (activeSection) {
				activeSince = performance.now();
			}
		});
		window.addEventListener('pagehide', function () {
			if (activeSection) emitDwell(activeSection, activeSince);
		});
	});

	// ---- (2) Cliques / interacoes -> select_content ----------------------
	// Um unico listener por delegacao. Resolve content_type + content_id a
	// partir de seletores/atributos ja existentes no HTML (sem data-ga-* extra,
	// exceto data-room nos hotspots da Planta).
	function closestSectionName(el) {
		var sec = el && el.closest ? el.closest('section[id], footer[id]') : null;
		return sec ? sec.id : (activeSection || '(desconhecida)');
	}

	function basename(path) {
		return String(path || '').split('/').pop() || path;
	}

	function slugText(el) {
		return (el.getAttribute('aria-label') || el.textContent || '')
			.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
	}

	var RULES = [
		{ sel: '.planta-hotspot',    type: 'hotspot',       id: function (el) { return el.getAttribute('data-room'); } },
		{ sel: '.loc-cat-btn',       type: 'map_category',  id: function (el) { return el.getAttribute('data-cat'); } },
		{ sel: '.loc-place-btn',     type: 'map_place',     id: function (el) { return el.getAttribute('data-name'); } },
		{ sel: '.loc-mode-btn',      type: 'map_mode',      id: function (el) { return el.getAttribute('data-mode'); } },
		{ sel: '.gallery-group-btn', type: 'gallery_group', id: function (el) { return el.getAttribute('data-group'); } },
		{ sel: '.gallery-thumb',     type: 'gallery_thumb', id: function (el) { return basename(el.getAttribute('data-img')); } },
		{ sel: '.wa-cta',            type: 'whatsapp',      id: slugText },
		{ sel: 'a[href="#contato"]', type: 'contact',       id: function () { return 'nav-contato'; } }
	];

	function lightboxFromEl(el) {
		if (!el || !el.id) return null;
		if (el.id === 'gallery-zoom-btn') return 'gallery';
		if (el.id === 'extras-zoom-btn') return 'extras';
		if (el.id === 'loc-zoom-btn') return 'localizacao';
		return null;
	}

	document.addEventListener('click', function (e) {
		var el = e.target;
		if (!el || el.nodeType !== 1) return;
		var ctx = el.closest('button, a') || el;

		var content_type = null, content_id = null;

		var lb = lightboxFromEl(ctx);
		if (lb) {
			content_type = 'lightbox';
			content_id = lb;
		} else {
			for (var i = 0; i < RULES.length; i++) {
				var matched = ctx.closest(RULES[i].sel);
				if (matched) {
					content_type = RULES[i].type;
					content_id = RULES[i].id(matched);
					break;
				}
			}
		}

		if (!content_type) return; // clique em elemento nao rastreado

		gaTrack('select_content', {
			section_name: closestSectionName(ctx),
			content_type: content_type,
			content_id: content_id || '(sem-id)'
		});
	});
})();

// ============================================================================
// Theme Toggle (light/dark) - alterna .dark no <html>, persiste e sincroniza o icone.
// ============================================================================

// Roda em DOMContentLoaded: no <head> o botão #theme-toggle ainda não existe.
document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        var icon = btn.querySelector('.material-symbols-outlined');

        function sync() {
                var dark = document.documentElement.classList.contains('dark');
                // Ícone mostra o destino do clique: no escuro -> sol (clarear); no claro -> lua (escurecer).
                if (icon) icon.textContent = dark ? 'light_mode' : 'dark_mode';
                btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
                btn.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
        }

        btn.addEventListener('click', function () {
                var dark = document.documentElement.classList.toggle('dark');
                try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
                sync();
        });

        sync();
});

// ============================================================================
// Galeria Master-Detail - interacao por event delegation (JS vanilla).
// ============================================================================

(function () {
        document.addEventListener('DOMContentLoaded', () => {
                // Guarda inicial: se o palco da galeria não existir, sai silenciosamente.
                const stage = document.getElementById('gallery-stage');
                if (!stage) return;

                // Cache dos elementos do contrato.
                const coverImg = document.getElementById('gallery-cover-img');
                const coverTitle = document.getElementById('gallery-cover-title');
                const coverCaption = document.getElementById('gallery-cover-caption');
                const thumbsList = document.getElementById('gallery-thumbs');
                const groupsList = document.getElementById('gallery-groups');

                const lbRoot = document.getElementById('gallery-lightbox');
                const lbImg = document.getElementById('lb-img');
                const lbClose = document.getElementById('lb-close');
                const lbPrev = document.getElementById('lb-prev');
                const lbNext = document.getElementById('lb-next');
                const lbCounter = document.getElementById('lb-counter');
                const coverWrap = document.getElementById('gallery-cover-wrap');

                // Elementos essenciais — sem eles não há o que fazer.
                if (!coverImg || !groupsList || !thumbsList) return;

                // Respeita a preferência do usuário por menos movimento.
                const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

                // Token que serializa trocas concorrentes: só a mais recente prospera.
                let swapToken = 0;

                // Estado atual do grupo visível no palco (usado pelo lightbox).
                let currentPhotos = [];
                let currentIndex = 0;
                let lastFocused = null; // elemento que abriu o lightbox (para devolver o foco)

                // Crossfade robusto da capa: fade-out -> troca src/alt -> fade-in ao carregar.
                function swapCover(newSrc, newAlt) {
                        if (!newSrc || coverImg.getAttribute('src') === newSrc) return;

                        const myToken = ++swapToken;
                        const isCurrent = () => myToken === swapToken;

                        const setSrc = () => {
                                coverImg.setAttribute('src', newSrc);
                                if (newAlt) coverImg.setAttribute('alt', newAlt);
                        };

                        const revealWhenReady = () => {
                                if (!isCurrent()) return;
                                const reveal = () => {
                                        if (!isCurrent()) return;
                                        coverImg.classList.remove('is-swapping');
                                };
                                coverImg.addEventListener('load', reveal, { once: true });
                                coverImg.addEventListener('error', reveal, { once: true });
                                if (coverImg.complete && coverImg.naturalWidth > 0) reveal();
                                setTimeout(reveal, 1500); // fallback caso load/error não disparem
                        };

                        // Caminho reduzido: sem fade, troca direta.
                        if (prefersReduced.matches) {
                                setSrc();
                                revealWhenReady();
                                return;
                        }

                        const FADE_MS = 300;
                        coverImg.classList.add('is-swapping');

                        let faded = false;
                        const onFadeOut = (event) => {
                                if (faded || !isCurrent()) return;
                                if (event && event.propertyName && event.propertyName !== 'opacity') return;
                                faded = true;
                                coverImg.removeEventListener('transitionend', onFadeOut);
                                setSrc();
                                revealWhenReady();
                        };

                        coverImg.addEventListener('transitionend', onFadeOut);
                        setTimeout(onFadeOut, FADE_MS + 60); // fallback se transitionend não disparar
                }

                // Reconstrói a lista de thumbnails a partir do array de URLs.
                function buildThumbs(photos, coverUrl, baseAlt) {
                        thumbsList.innerHTML = '';

                        photos.forEach((url, i) => {
                                if (!url) return;

                                const li = document.createElement('li');
                                const button = document.createElement('button');

                                button.type = 'button';
                                button.className = 'gallery-thumb';
                                button.dataset.img = url;
                                button.setAttribute('aria-label', 'Ver foto: ' + (baseAlt || ('foto ' + (i + 1))));
                                button.setAttribute('aria-pressed', 'false');

                                if (url === coverUrl) {
                                        button.classList.add('is-active');
                                        button.setAttribute('aria-pressed', 'true');
                                }

                                const img = document.createElement('img');
                                img.loading = 'lazy';
                                img.decoding = 'async';
                                img.className = 'w-20 h-16 object-cover rounded-lg';
                                img.alt = (baseAlt ? baseAlt + ' — ' : '') + 'miniatura ' + (i + 1);
                                img.src = url;

                                button.appendChild(img);
                                li.appendChild(button);
                                thumbsList.appendChild(li);
                        });

                        // Se nenhum thumb casou com a capa, ativa o primeiro por padrão.
                        if (!thumbsList.querySelector('.gallery-thumb.is-active')) {
                                const first = thumbsList.querySelector('.gallery-thumb');
                                if (first) {
                                        first.classList.add('is-active');
                                        first.setAttribute('aria-pressed', 'true');
                                }
                        }
                }

                // Reconstrói todo o palco a partir dos data-* do botão de grupo clicado.
                function aplicarGrupo(btn) {
                        if (!btn) return;

                        // 1. Atualiza estados dos botões de grupo.
                        groupsList.querySelectorAll('.gallery-group-btn').forEach((b) => {
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                        });
                        btn.classList.add('is-active');
                        btn.setAttribute('aria-pressed', 'true');

                        // 2. Lê o dataset do botão.
                        const cover = btn.dataset.cover || '';
                        const title = btn.dataset.title || '';
                        const caption = btn.dataset.caption || '';

                        let photos = [];
                        try {
                                const parsed = JSON.parse(btn.dataset.photos || '[]');
                                if (Array.isArray(parsed)) photos = parsed;
                        } catch (err) {
                                photos = [];
                        }

                        const altText = (title + ' ' + caption).trim();

                        currentPhotos = photos.slice();
                        currentIndex = Math.max(0, currentPhotos.indexOf(cover));
                        if (currentIndex >= currentPhotos.length) currentIndex = 0;

                        // 3. Troca a capa com crossfade.
                        swapCover(cover, altText || 'Foto da galeria');

                        // 4. Atualiza título e legenda do palco.
                        if (coverTitle) coverTitle.textContent = title;
                        if (coverCaption) coverCaption.textContent = caption;

                        // 5. Reconstrói os thumbnails.
                        buildThumbs(photos, cover, title || caption || altText);
                }

                // Troca somente a capa (mantém o grupo atual).
                function aplicarThumb(thumbBtn) {
                        if (!thumbBtn) return;
                        const newSrc = thumbBtn.dataset.img || '';
                        if (!newSrc) return;

                        const idx = currentPhotos.indexOf(newSrc);
                        if (idx >= 0) currentIndex = idx;

                        thumbsList.querySelectorAll('.gallery-thumb').forEach((t) => {
                                t.classList.remove('is-active');
                                t.setAttribute('aria-pressed', 'false');
                        });
                        thumbBtn.classList.add('is-active');
                        thumbBtn.setAttribute('aria-pressed', 'true');

                        const t = coverTitle ? coverTitle.textContent.trim() : '';
                        const c = coverCaption ? coverCaption.textContent.trim() : '';
                        swapCover(newSrc, (t + ' ' + c).trim() || undefined);
                }

                // ---- Lightbox fullscreen ----
                if (lbRoot && lbImg && coverWrap) {
                        const FOCUSABLE = () => lbRoot.querySelectorAll('button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])');

                        function lbAltText() {
                                const t = coverTitle ? coverTitle.textContent.trim() : '';
                                const c = coverCaption ? coverCaption.textContent.trim() : '';
                                return (t + ' ' + c).trim() || 'Foto da galeria';
                        }

                        function renderCounter() {
                                if (!lbCounter) return;
                                if (currentPhotos.length <= 1) { lbCounter.textContent = ''; return; }
                                lbCounter.textContent = (currentIndex + 1) + ' / ' + currentPhotos.length;
                        }

                        function updateNavButtons() {
                                const single = currentPhotos.length <= 1;
                                if (lbPrev) lbPrev.disabled = single;
                                if (lbNext) lbNext.disabled = single;
                        }

                        // Mostra uma foto do grupo atual (atualiza lightbox E a capa do palco, em sync).
                        function showIndex(i) {
                                if (!currentPhotos.length) return;
                                const n = currentPhotos.length;
                                currentIndex = (i + n) % n;
                                const url = currentPhotos[currentIndex];
                                const alt = lbAltText();

                                if (prefersReduced.matches) {
                                        lbImg.src = url;
                                } else {
                                        lbRoot.classList.add('is-swapping');
                                        setTimeout(() => {
                                                lbImg.src = url;
                                                lbImg.addEventListener('load', () => lbRoot.classList.remove('is-swapping'), { once: true });
                                                lbImg.addEventListener('error', () => lbRoot.classList.remove('is-swapping'), { once: true });
                                        }, 150);
                                }
                                lbImg.alt = alt + ' — foto ' + (currentIndex + 1);

                                // Sincroniza a capa da galeria (reutiliza o crossfade existente).
                                swapCover(url, alt);

                                // Marca o thumb correspondente como ativo.
                                thumbsList.querySelectorAll('.gallery-thumb').forEach((t) => {
                                        const on = t.dataset.img === url;
                                        t.classList.toggle('is-active', on);
                                        t.setAttribute('aria-pressed', on ? 'true' : 'false');
                                });

                                renderCounter();
                                updateNavButtons();
                        }

                        function openLightbox() {
                                if (!currentPhotos.length) return;
                                lastFocused = document.activeElement;
                                lbRoot.classList.remove('hidden');
                                lbRoot.classList.add('flex');
                                lbRoot.setAttribute('aria-hidden', 'false');
                                document.body.style.overflow = 'hidden';

                                showIndex(currentIndex);
                                lbRoot.classList.add('is-open');

                                const f = FOCUSABLE();
                                if (f.length) f[0].focus({ preventScroll: true });
                        }

                        function closeLightbox() {
                                lbRoot.classList.remove('is-open');
                                document.body.style.overflow = '';
                                const done = () => {
                                        lbRoot.classList.remove('flex');
                                        lbRoot.classList.add('hidden');
                                        lbRoot.setAttribute('aria-hidden', 'true');
                                        lbRoot.removeEventListener('transitionend', done);
                                        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
                                };
                                if (prefersReduced.matches) { done(); return; }
                                lbRoot.addEventListener('transitionend', done);
                                setTimeout(done, 260);
                        }

                        // Abertura: clique na capa ou no botão expandir.
                        coverWrap.addEventListener('click', openLightbox);

                        // Controles.
                        if (lbClose) lbClose.addEventListener('click', closeLightbox);
                        if (lbPrev) lbPrev.addEventListener('click', () => showIndex(currentIndex - 1));
                        if (lbNext) lbNext.addEventListener('click', () => showIndex(currentIndex + 1));

                        // Backdrop: clicar fora da imagem (no próprio overlay) fecha.
                        lbRoot.addEventListener('click', (e) => { if (e.target === lbRoot) closeLightbox(); });

                        // Teclado: ESC fecha, setas navegam, Tab fica preso no dialog.
                        document.addEventListener('keydown', (e) => {
                                if (lbRoot.classList.contains('hidden')) return;
                                if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
                                else if (e.key === 'ArrowLeft') { e.preventDefault(); showIndex(currentIndex - 1); }
                                else if (e.key === 'ArrowRight') { e.preventDefault(); showIndex(currentIndex + 1); }
                                else if (e.key === 'Tab') {
                                        const f = Array.prototype.slice.call(FOCUSABLE());
                                        if (!f.length) return;
                                        const first = f[0], last = f[f.length - 1];
                                        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                                        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
                                }
                        });
                }

                // Event delegation — um listener por container (sobrevive ao rebuild dos thumbs).
                groupsList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.gallery-group-btn');
                        if (!btn || !groupsList.contains(btn)) return;
                        aplicarGrupo(btn);
                });

                thumbsList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.gallery-thumb');
                        if (!btn || !thumbsList.contains(btn)) return;
                        aplicarThumb(btn);
                });

                // init(): sincroniza o palco com o grupo ativo inicial.
                function init() {
                        const activeBtn =
                                groupsList.querySelector('.gallery-group-btn.is-active') ||
                                groupsList.querySelector('.gallery-group-btn');
                        if (activeBtn) aplicarGrupo(activeBtn);
                }

                init();
        });
})();

// ============================================================================
// Moveis & Eletrodomesticos - toggle do cabecalho expansivel (JS vanilla).
// ============================================================================

(function () {
        document.addEventListener('DOMContentLoaded', () => {
                const toggle = document.getElementById('extras-toggle');
                const content = document.getElementById('extras-content');
                if (!toggle || !content) return;

                toggle.addEventListener('click', () => {
                        const nowHidden = content.classList.toggle('hidden');
                        const open = !nowHidden;
                        toggle.classList.toggle('is-open', open);
                        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
                });
        });
})();

// ============================================================================
// Moveis & Eletrodomesticos - master-detail + lightbox namespaced extras-* (JS vanilla).
// ============================================================================

(function () {
        document.addEventListener('DOMContentLoaded', () => {
                // Guarda inicial: se o palco não existir, sai silenciosamente.
                const stage = document.getElementById('extras-gallery-stage');
                if (!stage) return;

                // Cache dos elementos do contrato.
                const coverImg = document.getElementById('extras-cover-img');
                const coverTitle = document.getElementById('extras-cover-title');
                const coverCaption = document.getElementById('extras-cover-caption');
                const thumbsList = document.getElementById('extras-gallery-thumbs');
                const groupsList = document.getElementById('extras-gallery-groups');

                const lbRoot = document.getElementById('extras-lightbox');
                const lbImg = document.getElementById('extras-lb-img');
                const lbClose = document.getElementById('extras-lb-close');
                const lbPrev = document.getElementById('extras-lb-prev');
                const lbNext = document.getElementById('extras-lb-next');
                const lbCounter = document.getElementById('extras-lb-counter');
                const coverWrap = document.getElementById('extras-cover-wrap');

                // Elementos essenciais — sem eles não há o que fazer.
                if (!coverImg || !groupsList || !thumbsList) return;

                // Respeita a preferência do usuário por menos movimento.
                const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

                // Token que serializa trocas concorrentes: só a mais recente prospera.
                let swapToken = 0;

                // Estado atual do grupo visível no palco (usado pelo lightbox).
                let currentPhotos = [];
                let currentIndex = 0;
                let lastFocused = null; // elemento que abriu o lightbox (para devolver o foco)

                // Crossfade robusto da capa: fade-out -> troca src/alt -> fade-in ao carregar.
                function swapCover(newSrc, newAlt) {
                        if (!newSrc || coverImg.getAttribute('src') === newSrc) return;

                        const myToken = ++swapToken;
                        const isCurrent = () => myToken === swapToken;

                        const setSrc = () => {
                                coverImg.setAttribute('src', newSrc);
                                if (newAlt) coverImg.setAttribute('alt', newAlt);
                        };

                        const revealWhenReady = () => {
                                if (!isCurrent()) return;
                                const reveal = () => {
                                        if (!isCurrent()) return;
                                        coverImg.classList.remove('is-swapping');
                                };
                                coverImg.addEventListener('load', reveal, { once: true });
                                coverImg.addEventListener('error', reveal, { once: true });
                                if (coverImg.complete && coverImg.naturalWidth > 0) reveal();
                                setTimeout(reveal, 1500); // fallback caso load/error não disparem
                        };

                        // Caminho reduzido: sem fade, troca direta.
                        if (prefersReduced.matches) {
                                setSrc();
                                revealWhenReady();
                                return;
                        }

                        const FADE_MS = 300;
                        coverImg.classList.add('is-swapping');

                        let faded = false;
                        const onFadeOut = (event) => {
                                if (faded || !isCurrent()) return;
                                if (event && event.propertyName && event.propertyName !== 'opacity') return;
                                faded = true;
                                coverImg.removeEventListener('transitionend', onFadeOut);
                                setSrc();
                                revealWhenReady();
                        };

                        coverImg.addEventListener('transitionend', onFadeOut);
                        setTimeout(onFadeOut, FADE_MS + 60); // fallback se transitionend não disparar
                }

                // Reconstrói a lista de thumbnails a partir do array de URLs.
                function buildThumbs(photos, coverUrl, baseAlt) {
                        thumbsList.innerHTML = '';

                        photos.forEach((url, i) => {
                                if (!url) return;

                                const li = document.createElement('li');
                                const button = document.createElement('button');

                                button.type = 'button';
                                button.className = 'gallery-thumb';
                                button.dataset.img = url;
                                button.setAttribute('aria-label', 'Ver foto: ' + (baseAlt || ('foto ' + (i + 1))));
                                button.setAttribute('aria-pressed', 'false');

                                if (url === coverUrl) {
                                        button.classList.add('is-active');
                                        button.setAttribute('aria-pressed', 'true');
                                }

                                const img = document.createElement('img');
                                img.loading = 'lazy';
                                img.decoding = 'async';
                                img.className = 'w-20 h-16 object-cover rounded-lg';
                                img.alt = (baseAlt ? baseAlt + ' — ' : '') + 'miniatura ' + (i + 1);
                                img.src = url;

                                button.appendChild(img);
                                li.appendChild(button);
                                thumbsList.appendChild(li);
                        });

                        // Se nenhum thumb casou com a capa, ativa o primeiro por padrão.
                        if (!thumbsList.querySelector('.gallery-thumb.is-active')) {
                                const first = thumbsList.querySelector('.gallery-thumb');
                                if (first) {
                                        first.classList.add('is-active');
                                        first.setAttribute('aria-pressed', 'true');
                                }
                        }
                }

                // Reconstrói todo o palco a partir dos data-* do botão de grupo clicado.
                function aplicarGrupo(btn) {
                        if (!btn) return;

                        // 1. Atualiza estados dos botões de grupo.
                        groupsList.querySelectorAll('.gallery-group-btn').forEach((b) => {
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                        });
                        btn.classList.add('is-active');
                        btn.setAttribute('aria-pressed', 'true');

                        // 2. Lê o dataset do botão.
                        const cover = btn.dataset.cover || '';
                        const title = btn.dataset.title || '';
                        const caption = btn.dataset.caption || '';

                        let photos = [];
                        try {
                                const parsed = JSON.parse(btn.dataset.photos || '[]');
                                if (Array.isArray(parsed)) photos = parsed;
                        } catch (err) {
                                photos = [];
                        }

                        const altText = (title + ' ' + caption).trim();

                        currentPhotos = photos.slice();
                        currentIndex = Math.max(0, currentPhotos.indexOf(cover));
                        if (currentIndex >= currentPhotos.length) currentIndex = 0;

                        // 3. Troca a capa com crossfade.
                        swapCover(cover, altText || 'Foto do item');

                        // 4. Atualiza título e legenda do palco.
                        if (coverTitle) coverTitle.textContent = title;
                        if (coverCaption) coverCaption.textContent = caption;

                        // 5. Reconstrói os thumbnails.
                        buildThumbs(photos, cover, title || caption || altText);
                }

                // Troca somente a capa (mantém o grupo atual).
                function aplicarThumb(thumbBtn) {
                        if (!thumbBtn) return;
                        const newSrc = thumbBtn.dataset.img || '';
                        if (!newSrc) return;

                        const idx = currentPhotos.indexOf(newSrc);
                        if (idx >= 0) currentIndex = idx;

                        thumbsList.querySelectorAll('.gallery-thumb').forEach((t) => {
                                t.classList.remove('is-active');
                                t.setAttribute('aria-pressed', 'false');
                        });
                        thumbBtn.classList.add('is-active');
                        thumbBtn.setAttribute('aria-pressed', 'true');

                        const t = coverTitle ? coverTitle.textContent.trim() : '';
                        const c = coverCaption ? coverCaption.textContent.trim() : '';
                        swapCover(newSrc, (t + ' ' + c).trim() || undefined);
                }

                // ---- Lightbox fullscreen ----
                if (lbRoot && lbImg && coverWrap) {
                        const FOCUSABLE = () => lbRoot.querySelectorAll('button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])');

                        function lbAltText() {
                                const t = coverTitle ? coverTitle.textContent.trim() : '';
                                const c = coverCaption ? coverCaption.textContent.trim() : '';
                                return (t + ' ' + c).trim() || 'Foto do item';
                        }

                        function renderCounter() {
                                if (!lbCounter) return;
                                if (currentPhotos.length <= 1) { lbCounter.textContent = ''; return; }
                                lbCounter.textContent = (currentIndex + 1) + ' / ' + currentPhotos.length;
                        }

                        function updateNavButtons() {
                                const single = currentPhotos.length <= 1;
                                if (lbPrev) lbPrev.disabled = single;
                                if (lbNext) lbNext.disabled = single;
                        }

                        // Mostra uma foto do grupo atual (atualiza lightbox E a capa do palco, em sync).
                        function showIndex(i) {
                                if (!currentPhotos.length) return;
                                const n = currentPhotos.length;
                                currentIndex = (i + n) % n;
                                const url = currentPhotos[currentIndex];
                                const alt = lbAltText();

                                if (prefersReduced.matches) {
                                        lbImg.src = url;
                                } else {
                                        lbRoot.classList.add('is-swapping');
                                        setTimeout(() => {
                                                lbImg.src = url;
                                                lbImg.addEventListener('load', () => lbRoot.classList.remove('is-swapping'), { once: true });
                                                lbImg.addEventListener('error', () => lbRoot.classList.remove('is-swapping'), { once: true });
                                        }, 150);
                                }
                                lbImg.alt = alt + ' — foto ' + (currentIndex + 1);

                                // Sincroniza a capa do palco (reutiliza o crossfade existente).
                                swapCover(url, alt);

                                // Marca o thumb correspondente como ativo.
                                thumbsList.querySelectorAll('.gallery-thumb').forEach((t) => {
                                        const on = t.dataset.img === url;
                                        t.classList.toggle('is-active', on);
                                        t.setAttribute('aria-pressed', on ? 'true' : 'false');
                                });

                                renderCounter();
                                updateNavButtons();
                        }

                        function openLightbox() {
                                if (!currentPhotos.length) return;
                                lastFocused = document.activeElement;
                                lbRoot.classList.remove('hidden');
                                lbRoot.classList.add('flex');
                                lbRoot.setAttribute('aria-hidden', 'false');
                                document.body.style.overflow = 'hidden';

                                showIndex(currentIndex);
                                lbRoot.classList.add('is-open');

                                const f = FOCUSABLE();
                                if (f.length) f[0].focus({ preventScroll: true });
                        }

                        function closeLightbox() {
                                lbRoot.classList.remove('is-open');
                                document.body.style.overflow = '';
                                const done = () => {
                                        lbRoot.classList.remove('flex');
                                        lbRoot.classList.add('hidden');
                                        lbRoot.setAttribute('aria-hidden', 'true');
                                        lbRoot.removeEventListener('transitionend', done);
                                        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
                                };
                                if (prefersReduced.matches) { done(); return; }
                                lbRoot.addEventListener('transitionend', done);
                                setTimeout(done, 260);
                        }

                        // Abertura: clique na capa ou no botão expandir.
                        coverWrap.addEventListener('click', openLightbox);

                        // Controles.
                        if (lbClose) lbClose.addEventListener('click', closeLightbox);
                        if (lbPrev) lbPrev.addEventListener('click', () => showIndex(currentIndex - 1));
                        if (lbNext) lbNext.addEventListener('click', () => showIndex(currentIndex + 1));

                        // Backdrop: clicar fora da imagem (no próprio overlay) fecha.
                        lbRoot.addEventListener('click', (e) => { if (e.target === lbRoot) closeLightbox(); });

                        // Teclado: ESC fecha, setas navegam, Tab fica preso no dialog.
                        document.addEventListener('keydown', (e) => {
                                if (lbRoot.classList.contains('hidden')) return;
                                if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
                                else if (e.key === 'ArrowLeft') { e.preventDefault(); showIndex(currentIndex - 1); }
                                else if (e.key === 'ArrowRight') { e.preventDefault(); showIndex(currentIndex + 1); }
                                else if (e.key === 'Tab') {
                                        const f = Array.prototype.slice.call(FOCUSABLE());
                                        if (!f.length) return;
                                        const first = f[0], last = f[f.length - 1];
                                        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                                        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
                                }
                        });
                }

                // Event delegation — um listener por container (sobrevive ao rebuild dos thumbs).
                groupsList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.gallery-group-btn');
                        if (!btn || !groupsList.contains(btn)) return;
                        aplicarGrupo(btn);
                });

                thumbsList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.gallery-thumb');
                        if (!btn || !thumbsList.contains(btn)) return;
                        aplicarThumb(btn);
                });

                // init(): sincroniza o palco com o grupo ativo inicial.
                function init() {
                        const activeBtn =
                                groupsList.querySelector('.gallery-group-btn.is-active') ||
                                groupsList.querySelector('.gallery-group-btn');
                        if (activeBtn) aplicarGrupo(activeBtn);
                }

                init();
        });
})();

// ============================================================================
// Hotspots da planta - abrir/fechar por tap (mobile) com event delegation (JS vanilla).
// ============================================================================

(function () {
        document.addEventListener('DOMContentLoaded', () => {
                // Guarda inicial: se o wrapper da planta não existir, sai silenciosamente.
                const wrap = document.getElementById('planta-wrap');
                if (!wrap) return;

                // Fecha todos os hotspots, exceto o indicado (null fecha todos).
                function closeAll(except) {
                        wrap.querySelectorAll('.planta-hotspot').forEach((btn) => {
                                if (btn === except) return;
                                btn.classList.remove('is-open');
                                btn.setAttribute('aria-expanded', 'false');
                        });
                }

                // Event delegation — um listener no container trata todos os hotspots.
                wrap.addEventListener('click', (event) => {
                        const btn = event.target.closest('.planta-hotspot');
                        // Clique fora de qualquer hotspot (ex.: na imagem) fecha tudo.
                        if (!btn || !wrap.contains(btn)) {
                                closeAll(null);
                                return;
                        }
                        const abrir = !btn.classList.contains('is-open');
                        closeAll(btn); // fecha os irmãos antes de (re)abrir este
                        btn.classList.toggle('is-open', abrir);
                        btn.setAttribute('aria-expanded', abrir ? 'true' : 'false');
                });

                // Teclado: ESC fecha todos os hotspots abertos.
                document.addEventListener('keydown', (e) => {
                        if (e.key !== 'Escape') return;
                        if (!wrap.querySelector('.planta-hotspot.is-open')) return;
                        closeAll(null);
                });
        });
})();

// ============================================================================
// Localizacao Inteligente - master-detail (categoria -> estabelecimento -> modo)
// por event delegation (JS vanilla).
// ============================================================================

(function () {
        document.addEventListener('DOMContentLoaded', () => {
                // Guarda inicial: se o palco da localização não existir, sai silenciosamente.
                const stage = document.getElementById('loc-stage');
                if (!stage) return;

                const categoriesList = document.getElementById('loc-categories');
                const placesList = document.getElementById('loc-places');
                const modeList = document.getElementById('loc-mode');
                const locImg = document.getElementById('loc-img');
                const activeCatLabel = document.getElementById('loc-active-cat');

                if (!categoriesList || !placesList || !modeList || !locImg) return;

                // Slug de modo → texto por extenso usado no alt da imagem.
                const MODE_LABEL = { carro: 'de carro', pe: 'a pé' };

                // Contador de geração: invalida callbacks de carregamentos anteriores (cliques rápidos).
                let loadToken = 0;
                // Tempo mínimo (ms) de exibição do loading: garante feedback perceptível mesmo
                // em cargas instantâneas (cache do navegador ou disco local).
                const LOAD_MIN_MS = 450;

                // Atualiza o rótulo da categoria ativa no cabeçalho da lista.
                function syncActiveCategoryLabel(catBtn) {
                        if (!catBtn || !activeCatLabel) return;
                        activeCatLabel.textContent = catBtn.textContent.trim();
                }

                // Devolve o .loc-place-btn ativo visível (ou o primeiro visível).
                function activePlace() {
                        const active = placesList.querySelector('.loc-place-btn.is-active:not(.hidden)');
                        if (active) return active;
                        return placesList.querySelector('.loc-place-btn:not(.hidden)');
                }

                // Devolve o modo atualmente ativo (fallback: "a pé").
                function activeMode() {
                        const m = modeList.querySelector('.loc-mode-btn.is-active');
                        return m ? m.dataset.mode : 'pe';
                }

                // Liga/desliga o overlay de loading no palco (#loc-stage) e o atributo aria-busy.
                function setLoading(on, isError) {
                        if (!stage) return;
                        stage.classList.toggle('is-loading', !!on);
                        stage.setAttribute('aria-busy', on ? 'true' : 'false');
                        const overlay = document.getElementById('loc-loading');
                        if (!overlay) return;
                        overlay.classList.toggle('is-error', !!isError);
                        if (on) {
                                overlay.removeAttribute('hidden');
                        } else {
                                overlay.setAttribute('hidden', '');
                        }
                }

                // Reconstrói o mapa a partir do lugar ativo + modo atual.
                function updateMap() {
                        const place = activePlace();
                        if (!place) return;
                        const mode = activeMode();
                        const key = mode === 'carro' ? 'imgCarro' : 'imgPe';
                        const src = place.dataset[key];
                        const name = place.dataset.name || '';
                        const modoTexto = MODE_LABEL[mode] || 'a pé';
                        locImg.setAttribute('alt', 'Mapa do trajeto ' + modoTexto + ' até ' + name);

                        if (!src) { setLoading(false); return; }

                        // Mesma imagem já exibida? Não há download novo → sem loading.
                        if (locImg.getAttribute('src') === src) {
                                setLoading(false);
                                return;
                        }

                        // Pré-carrega via Image() e só troca/revela ao concluir o download.
                        // Handlers anexados ANTES de .src (evita race com cache).
                        // Garante um tempo mínimo de exibição do loading (LOAD_MIN_MS) para que o
                        // feedback seja perceptível mesmo em cargas instantâneas (cache/disco local).
                        const token = ++loadToken;
                        const startedAt = performance.now();
                        setLoading(true);
                        const reveal = function (applySrc) {
                                if (token !== loadToken) return; // clique mais novo invalidou este carregamento
                                if (applySrc) locImg.setAttribute('src', src);
                                const wait = Math.max(0, LOAD_MIN_MS - (performance.now() - startedAt));
                                window.setTimeout(function () {
                                        if (token === loadToken) setLoading(false);
                                }, wait);
                        };
                        const pre = new Image();
                        pre.onload = function () { reveal(true); };
                        pre.onerror = function () {
                                // Falha: encerra o loading para não travar a UI; mantém a imagem anterior.
                                console.warn('[loc] Falha ao carregar o mapa:', src);
                                reveal(false);
                        };
                        pre.src = src;
                }

                // Filtra a lista pela categoria e auto-seleciona o primeiro visível (preserva o modo).
                function applyCategory(catBtn) {
                        if (!catBtn) return;

                        // 1. Estados dos botões de categoria.
                        categoriesList.querySelectorAll('.loc-cat-btn').forEach((b) => {
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                        });
                        catBtn.classList.add('is-active');
                        catBtn.setAttribute('aria-pressed', 'true');
                        syncActiveCategoryLabel(catBtn);

                        // 2. Filtra os lugares por categoria.
                        const cat = catBtn.dataset.cat;
                        let firstVisible = null;
                        placesList.querySelectorAll('.loc-place-btn').forEach((b) => {
                                const match = b.dataset.cat === cat;
                                b.classList.toggle('hidden', !match);
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                                if (match && !firstVisible) firstVisible = b;
                        });

                        // 3. Auto-seleciona o primeiro lugar visível.
                        if (firstVisible) {
                                firstVisible.classList.add('is-active');
                                firstVisible.setAttribute('aria-pressed', 'true');
                        }

                        // 4. Atualiza o mapa (o modo atual é preservado).
                        updateMap();
                }

                function applyPlace(placeBtn) {
                        if (!placeBtn) return;
                        placesList.querySelectorAll('.loc-place-btn').forEach((b) => {
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                        });
                        placeBtn.classList.add('is-active');
                        placeBtn.setAttribute('aria-pressed', 'true');
                        updateMap();
                }

                function applyMode(modeBtn) {
                        if (!modeBtn) return;
                        modeList.querySelectorAll('.loc-mode-btn').forEach((b) => {
                                b.classList.remove('is-active');
                                b.setAttribute('aria-pressed', 'false');
                        });
                        modeBtn.classList.add('is-active');
                        modeBtn.setAttribute('aria-pressed', 'true');
                        updateMap();
                }

                // Event delegation — um listener por container (sobrevive à troca de categoria).
                categoriesList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.loc-cat-btn');
                        if (!btn || !categoriesList.contains(btn)) return;
                        applyCategory(btn);
                });

                placesList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.loc-place-btn');
                        if (!btn || !placesList.contains(btn)) return;
                        applyPlace(btn);
                });

                modeList.addEventListener('click', (event) => {
                        const btn = event.target.closest('.loc-mode-btn');
                        if (!btn || !modeList.contains(btn)) return;
                        applyMode(btn);
                });

                // ---- Lightbox do mapa (fullscreen) — espelha o da galeria ----
                (function setupLocLightbox() {
                        const locLb = document.getElementById('loc-lightbox');
                        const locLbImg = document.getElementById('loc-lb-img');
                        const locLbClose = document.getElementById('loc-lb-close');
                        if (!stage || !locImg || !locLb || !locLbImg || !locLbClose) return;

                        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
                        const FOCUSABLE = () => locLb.querySelectorAll('button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])');
                        let lastFocused = null;

                        function openLocLightbox() {
                                // Mapa em carregamento? Não amplia.
                                if (stage.classList.contains('is-loading')) return;
                                lastFocused = document.activeElement;
                                locLbImg.src = locImg.src;
                                locLbImg.alt = locImg.alt || 'Mapa do trajeto';
                                locLb.classList.remove('hidden');
                                locLb.classList.add('flex');
                                locLb.setAttribute('aria-hidden', 'false');
                                document.body.style.overflow = 'hidden';
                                locLb.classList.add('is-open');
                                const f = FOCUSABLE();
                                if (f.length) f[0].focus({ preventScroll: true });
                        }

                        function closeLocLightbox() {
                                locLb.classList.remove('is-open');
                                document.body.style.overflow = '';
                                const done = () => {
                                        locLb.classList.remove('flex');
                                        locLb.classList.add('hidden');
                                        locLb.setAttribute('aria-hidden', 'true');
                                        locLb.removeEventListener('transitionend', done);
                                        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
                                };
                                if (prefersReduced.matches) { done(); return; }
                                locLb.addEventListener('transitionend', done);
                                setTimeout(done, 260);
                        }

                        // Abertura: clique no palco (exceto no toggle de modo e no overlay de carregamento).
                        stage.addEventListener('click', (event) => {
                                if (event.target.closest('#loc-mode') || event.target.closest('#loc-loading')) return;
                                openLocLightbox();
                        });

                        locLbClose.addEventListener('click', closeLocLightbox);

                        // Backdrop: clicar fora da imagem fecha.
                        locLb.addEventListener('click', (event) => { if (event.target === locLb) closeLocLightbox(); });

                        // Teclado: ESC fecha; Tab fica preso no dialog.
                        document.addEventListener('keydown', (event) => {
                                if (locLb.classList.contains('hidden')) return;
                                if (event.key === 'Escape') { event.preventDefault(); closeLocLightbox(); }
                                else if (event.key === 'Tab') {
                                        const f = Array.prototype.slice.call(FOCUSABLE());
                                        if (!f.length) return;
                                        const first = f[0], last = f[f.length - 1];
                                        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                                        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
                                }
                        });
                })();

                // init(): sincroniza o rótulo inicial (o restante do estado já vem do HTML estático).
                function init() {
                        const catBtn = categoriesList.querySelector('.loc-cat-btn.is-active') ||
                                categoriesList.querySelector('.loc-cat-btn');
                        syncActiveCategoryLabel(catBtn);
                }

                init();
        });
})();
