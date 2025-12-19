# STRATEX NAVIGATION COMPONENTS

StrateX Navigation Components are modern, flexible, and background-free navigation systems designed for the strateX CSS library. These navs are lightweight, utility-driven, and do not enforce design decisions. They provide structure while allowing full control over styling.

## FEATURES
* No default background colors
* Fully customizable
* Mobile-first layout
* SVG icon support
* Transparent slide menu
* Lightweight and dependency-free
* Easy to override and extend

## REQUIREMENTS
To use strateX navigation components, include the following files:

1. `strateX.css` - Core styles and utilities. Must be loaded first.
2. `nav.css` - Navigation component styles.

## AVAILABLE NAVIGATION VARIANTS
strateX provides three navigation styles. Each variant uses a different class name to avoid conflicts.

1. `sx-nav` - Minimal modern navigation for clean layouts.
2. `sd-nav` - Dashboard-style navigation for admin panels.
3. `sl-nav` - Creative and side-aligned navigation.

## SX-NAV (MINIMAL NAVIGATION)
Purpose: Used for landing pages, blogs, portfolios, and modern websites.
Structure: Logo on the left, Action icons on the right, Menu icon opens slide menu
Default Styling: No background, No forced spacing, No shadow

## SD-NAV (DASHBOARD NAVIGATION)
Purpose: Used for dashboards, admin panels, and SaaS applications.
Structure: Left section for branding, Right section for actions, Compact and dense layout

## SL-NAV (CREATIVE NAVIGATION)
Purpose: Used for creative websites and minimal UI projects.
Structure: Minimal layout, Menu icon isolated, Focus on content

## SLIDE MENU (TRANSPARENT)
strateX navs support a slide-in menu.
Default Behavior: Slides in from the side, Transparent background, No forced colors or blur
Menu Contains: Close icon, Navigation links
The slide menu is fully customizable.

## JAVASCRIPT INTERACTION
Menu trigger classes: `sx-menu-btn`, `sd-menu-btn`, `sl-menu-btn`
Active state class: `sx-slide-open`
JavaScript logic is minimal and framework-agnostic.

## CUSTOMIZATION
Users can:
* Add background colors
* Apply blur effects
* Change spacing
* Resize icons
* Add borders or shadows
strateX encourages full design control.

## ACCESSIBILITY
* Use alt text for icons
* SVG icons are recommended
* Supports focus-visible
* Keyboard-friendly structure

## DESIGN PHILOSOPHY
strateX navigation components are:
* Structure-first
* Style-agnostic
* Utility-powered
* Developer-controlled
strateX provides the foundation. You design the interface.

## ROADMAP
* Dropdown navigation
* Sticky navigation utilities
* Mega menus
* RTL support

## LICENSE
MIT License. Free for personal and commercial use.
