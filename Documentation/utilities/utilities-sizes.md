# STRATEX SIZE UTILITIES – DOCUMENTATION

This document describes the Size Utility module of the strateX CSS framework.
The purpose of this module is to provide flexible, fine-grained control over
layout spacing and sizing using utility classes.

This module includes:
- Width utilities
- Padding utilities
- Margin utilities
- Gap utilities

These utilities are designed to extend and improve upon traditional frameworks
such as Bootstrap by offering more size options and better control.



## 1. WIDTH UTILITIES


Width utilities are used to control the width of an element. strateX provides
both percentage-based widths and fixed REM-based widths.


### 1.1 Percentage Width Classes

Percentage width classes allow responsive sizing relative to the parent element.

Usage example:

`<div class="w-50"></div>`

Available percentage width classes:

w-5    →  width: 5%
w-10   →  width: 10%
w-15   →  width: 15%
w-20   →  width: 20%
w-25   →  width: 25%
w-30   →  width: 30%
w-35   →  width: 35%
w-40   →  width: 40%
w-45   →  width: 45%
w-50   →  width: 50%
w-60   →  width: 60%
w-70   →  width: 70%
w-75   →  width: 75%
w-80   →  width: 80%
w-90   →  width: 90%
w-100  →  width: 100%


### REM-based width classes provide fixed sizing using the root font size.

Usage example:

`<div class="wr-32"></div>`

Available REM width classes:

wr-0   →  0rem
wr-2   →  0.5rem
wr-4   →  1rem
wr-6   →  1.5rem
wr-8   →  2rem
wr-10  →  2.5rem
wr-12  →  3rem
wr-16  →  4rem
wr-20  →  5rem
wr-24  →  6rem
wr-32  →  8rem
wr-40  →  10rem
wr-48  →  12rem
wr-56  →  14rem
wr-64  →  16rem



## 2. PADDING UTILITIES


Padding utilities control the inner spacing of an element. strateX provides
utilities for all sides, horizontal and vertical axes, and individual sides.


### 2.1 Padding on All Sides

Usage example:

`<div class="p-6"></div>`

Available padding classes:

p-0   →  0
p-2   →  0.5rem
p-4   →  1rem
p-6   →  1.5rem
p-8   →  2rem
p-10  →  2.5rem
p-12  →  3rem
p-16  →  4rem


### 2.2 Horizontal and Vertical Padding

Horizontal padding affects left and right sides.
Vertical padding affects top and bottom sides.

Usage example:

`<div class="px-4 py-6"></div>`

Available horizontal padding classes:

px-0, px-2, px-4, px-6, px-8

Available vertical padding classes:

py-0, py-2, py-4, py-6, py-8


### 2.3 Individual Padding Sides

Individual padding classes allow precise control per side.

Usage example:

`<div class="pt-4 pr-2 pb-6 pl-2"></div>`

Available classes:

pt-2, pt-4, pt-6
pr-2, pr-4, pr-6
pb-2, pb-4, pb-6
pl-2, pl-4, pl-6



##3. MARGIN UTILITIES


Margin utilities control outer spacing of elements. strateX supports standard,
automatic, and negative margins.


### 3.1 Margin on All Sides

Usage example:

`<div class="m-4"></div>`

Available margin classes:

m-0, m-2, m-4, m-6, m-8, m-12, m-16


### 3.2 Automatic Margins

Auto margins are commonly used for centering elements.

Usage example:

`<div class="mx-auto"></div>`

Available auto margin classes:

m-auto
mx-auto
my-auto


### 3.3 Individual Margin Sides

Usage example:

`<div class="mt-4 mb-6"></div>`

Available classes:

mt-2, mt-4, mt-6
mr-2, mr-4
mb-2, mb-4
ml-2, ml-4


### 3.4 Negative Margins

Negative margins allow elements to overlap or shift position.

Usage example:

`<div class="mx-auto"></div>`

Available negative margin classes:

-m-2, -m-4
-mt-4, -mb-4
-ml-4, -mr-4


--------------------------------------------------
## 4. GAP UTILITIES
--------------------------------------------------

Gap utilities control spacing between child elements in Flexbox and Grid layouts.

Usage example:

``` 
<div class="d-flex gap-6"></div>
```

### Available gap classes:

gap-0   →  0
gap-2   →  0.5rem
gap-4   →  1rem
gap-6   →  1.5rem
gap-8   →  2rem
gap-10  →  2.5rem
gap-12  →  3rem
gap-16  →  4rem



## 5. DESIGN PHILOSOPHY


The strateX Size Utility module follows these principles:

- Predictable naming conventions
- Consistent spacing scale
- Minimal CSS footprint
- Developer-friendly utilities
- Framework independence
