# strateX CSS – Colors & Gradients

Welcome to the strateX color system documentation. This file describes all background colors, text colors, gradient backgrounds, and gradient text utilities available in strateX.

## BACKGROUND COLORS
Use the `.bg-*` classes to apply background colors to elements.

| Class | Color Preview |
| --- | --- |
| bg-blue | #2563eb |
| bg-purple | #9333ea |
| bg-green | #16a34a |
| bg-red | #dc2626 |
| bg-yellow | #f59e0b |
| bg-sky | #0ea5e9 |
| bg-dark | #0f172a |
| bg-light | #f8fafc |
| bg-gray | #64748b |
| bg-white | #ffffff |

Example Usage: `<div class="bg-green text-white">Green Background</div>`

## TEXT COLORS
Use `.text-*` classes for text color.

| Class | Color Preview |
| --- | --- |
| text-blue | #2563eb |
| text-purple | #9333ea |
| text-green | #16a34a |
| text-red | #dc2626 |
| text-yellow | #f59e0b |
| text-sky | #0ea5e9 |
| text-dark | #0f172a |
| text-light | #f8fafc |
| text-gray | #64748b |
| text-white | #ffffff |

Example Usage: `<p class="text-red">Error message</p>`

## GRADIENT BACKGROUNDS
Use `.bg-grad-*` classes for gradient backgrounds.

| Class | Gradient Colors |
| --- | --- |
| bg-grad-blue | #2563eb → #1e40af |
| bg-grad-purple | #9333ea → #6b21a8 |
| bg-grad-green | #16a34a → #166534 |
| bg-grad-red | #dc2626 → #7f1d1d |
| bg-grad-sunset | #f59e0b → #ef4444 |
| bg-grad-ocean | #2563eb → #06b6d4 |
| bg-grad-berry | #7c3aed → #ec4899 |
| bg-grad-mint | #16a34a → #84cc16 |
| bg-grad-fire | #fb923c → #dc2626 |
| bg-grad-gold | #facc15 → #f97316 |
| bg-grad-night | #020617 → #1e3a8a |
| bg-grad-aqua | #14b8a6 → #2563eb |
| bg-grad-rose | #f43f5e → #9333ea |
| bg-grad-slate | #94a3b8 → #0f172a |
| bg-grad-sky | #38bdf8 → #2563eb |

Example Usage: `<div class="bg-grad-ocean text-white">Ocean Gradient</div>`

## GRADIENT TEXT
For gradient text, use `.grad-text` + a gradient class.

Example: `<h1 class="grad-text bg-grad-sunset">Sunset Gradient Text</h1>`

Notes:
* Requires these CSS properties: `.grad-text { background-clip: text; -webkit-background-clip: text; color: transparent; }`
* Works with all `.bg-grad-*` classes

## TIPS & BEST PRACTICES
* Always use `.text-*` with readable contrast on background colors.
* Gradient backgrounds can be combined
