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
<hr>
Success        | .sx-alert-success
<hr>
Error          |  .sx-alert-error
<hr>
Warning        |  .sx-alert-warning
<hr>
Info           |  .sx-alert-info
<hr>
```

example:- 
```<div class="sx-alert sx-alert-success">
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