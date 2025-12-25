# STRATEX ALERTS

strateX Alerts are lightweight UI components used to display feedback messages such as success, error, warning, and info.
They support CSS styling and JavaScript-powered dismiss & auto-close behavior.

```
src/
├─ css/
│  └─ components/
│     └─ alerts.css
│
├─ js/
│  └─ alerts.js
```

## Alerts css
All alerts must use the base class:
```.sx-alert```

This class defines:
• Layout
• Padding
• Border
• Typography
• Transition support

### Alert Variants
Use one of the following variant classes:
```
Variant        |   Class
Success        | .sx-alert-success
Error          |  .sx-alert-error
Warning        |  .sx-alert-warning
Info           |  .sx-alert-info
```

example:- 
```
<div class="sx-alert sx-alert-success">
  ...
</div>
```

## Alert Structure
Recommended HTML structure:
```
<div class="sx-alert sx-alert-success">
  <div class="sx-alert-content">
    <div class="sx-alert-title">Success</div>
    <div class="sx-alert-text">Action completed successfully.</div>
  </div>

  <button class="sx-alert-close">&times;</button>
</div>
```

### Optional Classes
```
Class                   |   Purpose

.sx-alert-content       | Wrapper for text
.sx-alert-title         | Alert heading
.sx-alert-text          | Alert message
.sx-alert-close         | Close button
.sx-alert-hide          | Used by JS to animate Close
```
⚠️ .sx-alert-hide should not be added manually.

# Accessibility Notes (Recommended)
For better accessibility, add:
`role="alert"`
example
```
<div class="sx-alert sx-alert-error" role="alert">
```
