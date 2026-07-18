# Framer Design System

A recreation of **Framer's marketing canvas** — the near-pure-black artboard, oversized display type, white pill CTAs, and the signature gradient-spotlight cards. This is a **dark-only** system; Framer's marketing identity ships no light mode.

> **Sources.** Built from a written brand spec (`DESIGN.md`) derived from framer.com surfaces: home, `/ai/`, `/startups/`, `/marketplace/templates/nudge/`, `/gallery/a16z-speedrun`, and `/pricing`. No codebase or Figma file was attached — values below come from the spec and, where the spec gave a token name but no hex, from screenshot-anchored inference (noted in Known Gaps).

---

## What this is

Framer is a design/website-building tool; its marketing site reads like a **poster**: one assertive statement per band, huge white type on black, generous vertical air. Sections separate by *mode change* — a band of charcoal cards, then a black band with a glowing gradient card, then back — like cuts in a dark film. The dark canvas IS the whitespace.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (link this). `@import` list only.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `fonts.css` · `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).

**Components** (`components/`)
- `buttons/` — `Button` (primary / secondary / translucent), `IconButton`
- `pricing/` — `PricingTabs`, `PricingCard`
- `forms/` — `TextInput`
- `cards/` — `TemplateCard`, `ProductMockupTile`, `SpotlightCard` (violet/magenta/orange/coral)
- `data/` — `ComparisonRow`, `FaqRow`
- `navigation/` — `TopNav`, `Footer`

**UI kit** (`ui_kits/`)
- `marketing/` — click-through recreation: home hero + gallery, pricing tiers + comparison + FAQ.

**Meta**
- `SKILL.md` — Agent-Skills-compatible entry point.

---

## CONTENT FUNDAMENTALS

How Framer's marketing copy is written.

- **Voice: confident, plain, product-forward.** Short declaratives that read as posters, not paragraphs. "The internet is your canvas." "Ship your site in minutes, not months." One idea per headline; the headline does the work, the subhead clarifies.
- **Second person, occasionally first-person-plural for the company.** Addresses the reader as *you* ("your site", "start building"); the company is *we/Framer* sparingly. Never corporate "users".
- **Sentence case almost everywhere.** Headlines, buttons, nav — sentence case, not Title Case. Eyebrows/labels may be small-caps-feeling via `caption` size but are still written sentence/lower case.
- **CTA verbs are direct and free-forward.** "Get started for free", "Start for free", "Talk to sales", "Sign in". The primary CTA nearly always foregrounds *free*.
- **Numbers are concrete, not hypey.** Pricing is stated plainly; feature lists are terse noun phrases ("Custom domains", "CMS", "Analytics"), not marketing sentences.
- **No emoji.** The brand chrome is monochrome and typographic; emoji would break the poster tone. Icons are minimal line glyphs, used structurally (nav, checkmarks), never decoratively.
- **Tone is calm and premium** — it trusts the type and the black space to convey quality. Avoid exclamation stacks, avoid jargon, avoid "revolutionary/game-changing" language.

Example cadence:
> **Design → Publish → Done.** (three-beat, period-separated)
> **Everything you need to build a site.** (plain promise)
> **Loved by the best teams.** (social proof, understated)

---

## VISUAL FOUNDATIONS

**Color.** Two anchor surfaces do almost all the work: `--color-primary` white and `--color-canvas` near-black (`#0A0A0A`, a faint warmth). Every band picks one. Depth on dark is built by **surface lift** — canvas → `--color-surface-1` (`#191919`) → `--color-surface-2` (`#262626`) — never by opacity changes on white. Text hierarchy is **binary**: `--color-ink` (white) or `--color-ink-muted` (`#999999`) — no mid-tone grays in between. One chromatic accent only: `--color-accent-blue` (`#0099FF`), reserved for links, focus rings, and selection — never a fill. One semantic: success green for comparison checkmarks.

**The gradient-spotlight signature.** The one place color explodes: oversized atmospheric tiles (violet most common, plus magenta, orange, coral) dropped into otherwise monochrome card grids. They are **cards, not section backgrounds** — one or two per long page. Radial-spotlight gradients (bright hotspot upper-left, deepening to a saturated shadow) at `--radius-xxl` 30px corners, softer than the 20px content cards so they read as atmosphere.

**Type.** Display is GT Walsheim Medium (substituted here with **Mona Sans**), weight 500, with **extreme negative tracking** — `-5.5px` on the 110px hero (≈5% of size). That compression is the signature; scale the size down on mobile but keep the negative percentage. Body is **Inter Variable** with bespoke OpenType character variants (`cv01 cv05 cv09 cv11 ss03 ss07 dlig`) enabled globally — turning them off visibly changes the voice. Weight stays in a narrow band (display 500, body 400, dense/caption 500); hierarchy comes from size + tracking, not weight ramps. Line-heights are tight everywhere (body at 1.3) — denser than typical SaaS.

**Spacing.** Non-standard **5px base** (5/10/15/20/30), not 4/8/16. Card interiors: 20px on pricing, 30px on spotlight cards. Pills pad 10×15. Sections breathe at ~96px.

**Shape / corners.** Pills (`--radius-pill` 100px) or full circles are the CTA vocabulary — never squared-off buttons. Content cards 20px, template thumbs 15px, spotlight cards 30px, inputs 10px.

**Backgrounds.** Flat black — no section gradients, no textures, no patterns, no full-bleed hero photography behind type. Imagery appears *inside* cards (browser-chromed product mockups), never as a section ground.

**Elevation & shadow.** Four signatures: (0) flat; (1) charcoal surface lift; (2) light-edge + drop — `inset 0 0.5px 0 rgba(255,255,255,.10)` + `0 10px 30px rgba(0,0,0,.25)` on floating product cards; (3) blue-tinted ring `0 0 0 1px rgba(0,153,255,.15)` for focus/selected. Depth is lift + these precise rings, not big soft shadows.

**Hover / press.** Pills lift subtly and the pressed state is a **transform scale shrink** (≈0.97), not a darkened fill. Secondary/translucent surfaces brighten one step on hover. Links go from `#0099FF` to a lighter `#47B4FF`. Motion is quiet — short ease, no bounces, no long decorative loops.

**Borders & dividers.** Hairlines are translucent white: `rgba(255,255,255,0.14)` for input/table borders, `0.07` for FAQ/footer rules. No heavy strokes.

**Selected/active state.** Communicated by **surface lift**, not chromatic fill — a selected pricing tab moves canvas → surface-2; a selected input gets the blue ring. Blue never becomes a background.

---

## ICONOGRAPHY

- **Framer's marketing chrome is nearly icon-free.** The poster aesthetic leans on type and black space; there is no dense icon system on the marketing surface. Where glyphs appear they are **minimal line icons** (thin stroke, no fill) used structurally: nav chevrons, carousel arrows, social marks in the footer, and a **success checkmark** (filled green) in the pricing comparison table.
- **Substitute set: Lucide** (CDN), chosen for its thin, geometric, single-weight line style that matches Framer's restrained glyphs. Load from `https://unpkg.com/lucide@latest`. *Flagged substitution — no icon assets were provided; swap for the real marks if available.*
- **Circular icon buttons** (`IconButton`) host these glyphs at 40px (`--radius-full`), surface-1 ground — used for carousel arrows and social links.
- **No emoji, ever.** No Unicode dingbats as icons. The green comparison checkmark is the only filled, colored glyph in the system.
- **The Framer wordmark/logo was not provided.** Per policy, no logo is drawn or reconstructed. Wherever the brand mark would sit (nav left, footer left) the system renders the word **"Framer"** in display type as a stand-in. Supply the real SVG wordmark to replace it.

---

## Known gaps / caveats

- **GT Walsheim is proprietary** and not shipped. Display type is substituted with **Mona Sans** (Google Fonts) at weight 500 with the spec's negative tracking. Provide GT Walsheim WOFF2 files to make this exact.
- **No logo/wordmark asset** — brand name is set in type as a placeholder (see Iconography).
- **Gradient stops are inferred** from screenshot pixels; the `--color-gradient-*` hexes are base anchors, and the `--gradient-*` strings are a faithful *feel*, not extracted CSS.
- **Icons are a Lucide substitution**, not Framer's own marks.
- **Fonts load from Google Fonts CDN** (`tokens/fonts.css`) rather than shipped WOFF2 binaries, so the compiler reports 0 local `@font-face`s. Type renders correctly for online consumers; drop in self-hosted GT Walsheim + Inter files to make it offline-proof.
- Hex values for surface/hairline tiers were inferred where the spec named a token without a value.
