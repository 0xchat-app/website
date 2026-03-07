# Website Design Language

Use this document as a source brief when asking an AI to design new pages, landing pages, product sites, or marketing sections in the same visual language as the current Yantr website.

This is not a generic SaaS style. The design should feel like a sharp, editorial, developer-first product site with a calm monochrome base, selective green accents, terminal-inspired details, and polished motion.

## Core Design Identity

- Primary mood: clean, technical, calm, credible, open-source, modern.
- Visual character: mostly black, white, and gray, with restrained accent color.
- Brand energy: minimal but not sterile; polished but still hacker-friendly.
- Audience fit: developers, self-hosters, homelab users, technical founders.
- Emotional goal: trust, clarity, control, speed, low lock-in.

## Visual Principles

1. Start from a white canvas.
2. Use black as the main anchor color for headlines, key CTAs, and emphasis.
3. Use gray for hierarchy, spacing, borders, helper text, and secondary information.
4. Use emerald/green as a small signal color for success, readiness, active states, and positive system feedback.
5. Avoid colorful gradients, glossy startup visuals, and noisy decorative effects.
6. Prefer crisp borders, subtle shadows, and carefully spaced blocks over heavy fills.
7. Mix product seriousness with tactile UI details like terminal chrome, status dots, badges, and system labels.

## Color System

Use a restrained palette.

- Page background: white or near-white.
- Main text: near-black.
- Secondary text: medium gray.
- Tertiary text: light gray.
- Borders: light gray on light surfaces, dark zinc on terminal surfaces.
- Accent success color: emerald green.
- Accent support colors: blue for runtime/info, amber for caution/partial states, red only for explicit negative comparison states.

Approximate direction:

- White: `#ffffff`
- Black / near-black: `#111111` to `#000000`
- Gray text: `#6b7280`, `#9ca3af`, `#d1d5db`
- Zinc terminal background: `#09090b` to `#18181b`
- Emerald accent: `#10b981` to `#34d399`

## Typography

- Headlines: bold sans-serif.
- Body copy: clean sans-serif.
- Technical UI labels, tabs, commands, status metadata: monospace.
- Use tight tracking and strong hierarchy for large headlines.
- Keep body text readable, calm, and slightly muted.
- Uppercase micro-labels should have wide tracking and small size.

Type behavior:

- Hero headline should feel large, compact, and high-confidence.
- Supporting copy should be short, direct, and easy to scan.
- Monospace should appear in commands, small labels, system notes, badges, and technical UI framing.

## Layout Language

- Use wide horizontal sections with strong spacing.
- Max width should feel generous, around a modern content container.
- Prefer alternating rhythms: hero, showcase, explanation, proof, FAQ.
- Use full-bleed sections selectively for moments like marquees, architecture visuals, or comparison tables.
- Rely on whitespace heavily. Do not over-pack content.
- Cards should usually have rounded corners, thin borders, and subtle hover lift.

Spacing behavior:

- Large vertical breathing room between sections.
- Compact spacing inside badges, tabs, and controls.
- Consistent padding in cards and panels.

## Signature Components

### 1. Hero Area

- Two-column composition on desktop.
- Left side: product statement, short supporting paragraph, rotating value points, CTA buttons.
- Right side: a terminal-style install panel or product demo block.
- Add a small pill/badge above the headline to establish category and credibility.
- Hero should feel like a product reveal, not a generic marketing banner.

### 2. Terminal Install Card

- Dark zinc panel with subtle chrome header.
- Small red, amber, green circles in the terminal top bar.
- Monospace command text.
- Tabs for platforms or environments.
- Simulated output lines with checkmarks, prompt symbols, and readiness states.
- Copy button should feel lightweight and useful, not flashy.

### 3. App or Feature Marquee

- Horizontal scrolling rows of cards or pills.
- Items should feel tangible and browsable.
- Cards should use white backgrounds, soft borders, rounded corners, and slight hover elevation.
- Use edge fades so the marquee feels embedded into the layout.

### 4. Comparison and Proof Sections

- Use tables or structured cards.
- Highlight the product column clearly with a stronger contrast treatment.
- Use chips, checkmarks, and small status badges to make scanning effortless.
- Keep the background mostly white and let borders do the structure.

### 5. FAQ / Detail Cards

- White cards with light borders.
- Rounded corners.
- Slight shadow or hover enhancement.
- Clear question-first structure with short explanatory answers.

## Motion and Interaction

Motion should be subtle, purposeful, and slow enough to feel premium.

- Use soft fade-in and upward reveal on first load.
- Use gentle floating motion on special hero elements.
- Allow slight hover lift on cards and CTA elements.
- Use understated underline or accent-line reveals for emphasized words.
- Marquees should move continuously and calmly, not fast.
- Interactive diagrams can feel playful, but the visual styling must stay disciplined.

Avoid:

- Loud parallax.
- Oversized glow effects.
- Bouncy or cartoonish motion.
- Heavy blur everywhere.

## UI Detailing

- Use thin borders frequently.
- Use rounded corners, often large radius on major cards.
- Shadows should be soft and sparse.
- Small badges and status labels should feel system-oriented.
- Icons can be simple, functional, and low-noise.
- Decorative details should feel tied to product meaning, not random ornament.

## Copy Style

- Direct, compact, and product-literate.
- Explain value in plain language.
- Favor claims that sound specific and technical, not hype-heavy.
- Reuse themes like: one command, open source, no lock-in, works on your hardware, Docker-powered, lightweight, simple deployment.
- Headlines should be short and assertive.
- Supporting text should clarify, not ramble.

## What To Avoid

- Purple-heavy AI aesthetics.
- Neon cyberpunk styling.
- Generic startup gradients.
- Big glassmorphism panels as the dominant style.
- Overly playful illustrations.
- Corporate enterprise blue dashboards.
- Dense text walls.
- Random accent colors with no semantic meaning.

## Build Prompt For Other AI

Use the block below when prompting another AI:

```text
Design this website in the same design language as the Yantr marketing site.

Style requirements:
- Use a white or near-white background with a black, gray, and zinc base palette.
- Use emerald green only as a restrained accent for active, success, or ready states.
- Headlines should be bold sans-serif and highly legible.
- Body copy should be clean sans-serif.
- Technical labels, commands, tabs, and system metadata should use monospace.
- The overall feel should be editorial, product-focused, developer-friendly, and open-source credible.
- Use thin borders, rounded corners, subtle shadows, and strong whitespace.
- Include terminal-inspired UI details where relevant.
- Motion should be soft and purposeful: fade-in, light hover lift, calm marquee motion, restrained underline reveals.
- Avoid colorful gradients, purple AI styling, glossy startup visuals, and generic SaaS templates.

Composition requirements:
- Build strong section hierarchy with generous vertical spacing.
- Use a sharp hero with a strong headline, short supporting text, clear CTAs, and a product demo or terminal block.
- Use modular sections such as showcase rows, comparison blocks, proof points, FAQs, and contributor/community or trust sections.
- Keep the page clean, premium, and technical rather than decorative.

Tone requirements:
- Copy should be concise, specific, technically confident, and low-hype.
- Emphasize simplicity, control, performance, openness, and low lock-in.
```

## Short Version

If you need a smaller instruction set, use this:

```text
Use Yantr-style design: white background, black and gray structure, emerald accent, bold sans headlines, monospace technical details, terminal-inspired product UI, thin borders, soft shadows, generous whitespace, calm motion, and concise developer-first copy. Avoid purple AI gradients and generic SaaS styling.
```

## Success Check

The design is correct if it feels like:

- a serious open-source product site,
- made for technical users,
- visually minimal but not bland,
- modern without chasing trends,
- and polished through spacing, type, borders, and restrained interaction.