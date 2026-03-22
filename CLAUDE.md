# CLAUDE.md — The Grimoire of Circus Something

*You have opened the sacred tome. Read carefully, for these are the binding laws of this digital ritual space.*

---

## The Nature of This Work

This is **circus-something** — a React + TypeScript site for Circus Something, an avant-garde ritual circus theater company. The stack: React 18, TypeScript, react-router-dom, CSS modules. The aesthetic: dark, theatrical, mysterious.

---

## The Seven Laws of the Craft

### I. Semantic HTML is the True Name of Things

Every element must be what it *is*, not merely what it *looks like*. A heading is `<h1>`, not a bold div. A navigation is `<nav>`. A button that submits is `<button>`. The browser spirits read these names — screen readers too. Name your elements truly.

### II. Accessibility is the Covenant with All Visitors

- Every image bears an `alt` attribute. Every interactive element is keyboard-reachable.
- Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI components) at minimum.
- Focus states must never be removed without replacement — the wandering eye must find its path.
- ARIA attributes only when semantic HTML falls short. Do not summon what you do not need.

### III. Mobile-First is the First Incantation

Write styles for small screens first, then expand with `min-width` media queries. The phone is the primary vessel of browsing in this age. CSS already uses `react-responsive` — honor it.

### IV. Performance is the Speed of the Ritual

- Images must be sized appropriately. Do not summon a 4000px image to fill a 400px container.
- Lazy-load what lies below the fold. Defer the unseen.
- Avoid layout shifts — reserve space for images and dynamic content before it loads.
- Keep bundle size lean. Question every new dependency before adding it to the circle.

### V. CSS is Written with Discipline

- Use the existing CSS file per component (e.g. `HomePage.css` lives beside `HomePage.tsx`).
- Prefer CSS custom properties (`--variable`) for repeated values like colors and spacing.
- Do not use inline styles unless absolutely necessary and temporary.
- Animations should respect `prefers-reduced-motion`. Not all visitors wish to be dazzled.

### VI. Components are Atomic Rites

- One component, one purpose. If a component does two unrelated things, split it.
- Keep components small. If the JSX grows beyond ~100 lines, consider extraction.
- Do not reach into a child component's DOM. Pass props; do not possess.

### VII. The Visitor's Journey is Sacred

- Every link must be legible — underlined or clearly distinct from body text.
- External links open in `_blank` with `rel="noopener noreferrer"`. Always. No exceptions.
- Forms must label every field. The visitor must never guess what is being asked of them.
- Error states must be visible and helpful. Silence in failure is a sin.

---

## The Forbidden Arts

Do not:
- Use `!important` in CSS except to override third-party styles, and even then, document why.
- Nest more than 3 levels deep in CSS without pause for reflection.
- Add a new npm package without checking if the existing ones already offer the power you seek.
- Remove `rel="noopener noreferrer"` from external links.
- Commit broken TypeScript. The types are the contract — honor them.

---

## The Aesthetic Covenant

This is a dark, theatrical, circus-occult aesthetic. When writing new UI:
- Dark backgrounds, light text — this is the natural order here.
- Drama is appropriate. Motion, shadow, and contrast serve the work.
- Readability is never sacrificed for style. The most beautiful ritual that cannot be read has failed.

---

## Incantations (Commands)

```bash
npm start       # Summon the dev server
npm run build   # Crystallize the production artifact
npm test        # Invoke the test spirits
npm run lint    # Consult the linting oracle
```

---

*These laws were inscribed that the site may serve all who seek it — regardless of device, ability, or connection speed. The craft is in the details. Work with care.*
