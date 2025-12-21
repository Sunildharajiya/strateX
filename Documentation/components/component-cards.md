# STRATEX CARD COMPONENT SYSTEM 

This document explains how to use the strateX card component system.

The system is built using pure CSS and HTML and is designed to be reliable, responsive, and customizable.

# FILES OVERVIEW
`cards.css`
Contains all styles, layout rules, variables, and variants.
`cards-test.html`
Used to test and preview all card components.

# FEATURES
Responsive grid layout (mobile, tablet, desktop)
Post cards, video cards, and project cards
CSS variables for easy theming
Background color variants

# Responsive behavior:
Mobile: 1 card per row

Tablet (≥640px): 2 cards per row

Desktop (≥1024px): 3 cards per row

## card-grid
Use .card-grid to automatically handle responsiveness.
```
<div class="card-grid">
  <!-- cards here -->
</div>
```
## base card structure
```
<div class="card">
  <img src="image.jpg" class="card-media">

  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card description text</p>
    <a href="#" class="card-btn">Action</a>
  </div>

  <div class="card-footer">Footer text</div>
</div>
```

## post cards
use this card styles for blog and articules

```
<div class="card bg-light">
  <img src="post.jpg" class="card-media">

  <div class="card-body">
    <h3 class="card-title">Post Title</h3>
    <p class="card-text">Short post summary.</p>
    <a class="card-btn" href="#">Read More</a>
  </div>

  <div class="card-footer">Author · 5 min read</div>
</div>
```
## vidio card 

```
<div class="card card-video bg-dark">
  <span class="video-badge">12:30</span>
  <img src="video.jpg" class="card-media">

  <div class="card-body">
    <h3 class="card-title">Video Title</h3>
    <p class="card-text">Video description.</p>
    <a class="card-btn" href="#">Watch</a>
  </div>
</div>
```
## Project card
includes technology tags.
```
<div class="card bg-blue">
  <img src="project.jpg" class="card-media">

  <div class="card-body">
    <h3 class="card-title">Project Name</h3>
    <p class="card-text">Project description.</p>

    <div class="project-tags">
      <span class="tag">CSS</span>
      <span class="tag">UI</span>
      <span class="tag">Open Source</span>
    </div>

    <a class="card-btn" href="#">View Project</a>
  </div>
</div>
```

## ALERT
Prefer CSS variables for customization
Do not modify core classes directly
Extend using new utility classes

## USE CASES
Blog websites
Portfolio websites
Video platforms
Project showcases
UI libraries
Design systems