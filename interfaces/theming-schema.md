# Theming

One mistake we often see made when defining components for the web is that they make assumptions about the look and feel. Components bake in css styling, which works fine at the time of development, but creates a high barrier of entry in sharing and consuming the components within applications which may have different opinions about the visual design.

As we build components which adhere to the Stardust specifications, we want a consistent approach (and API surface) for applications to define their theme, and for components to consume the theme.

# What a theme is not

Theming can not be:

**UI framework specific.** It should work in applications which share React, Angular, and custom framework code.

**CSS framework specific.** It should work in applications which use CSS through static build systems (sass, less) as well as

# What is contained within a theme:

A theme consists of:

### Site variables

Site variables define the overall application colors, typeography, spacing, shading, and iconography.

**Palette colors** - a set of named slots for colors which represent primary/accent colors and neutrals used across the application. These colors should NOT be accessed by components, but exist primarily to define semantic colors.

**Semantic colors** - a set of named slots which give semantic meaning to the usage of the color. Semantic colors differentiate between background vs foreground colors, and should follow a naming convention.

_TODO: naming convention here._

**Typography** - how text is rendered in the site. This defines common families, sizes, and weights. There should also be common named `variant` definitions which give a semantic name to a combo of these typography concerns.

**Spacing** - semanticly named spacing values used to scale the "breathability" of the ui.

_TODO: should this be provided here? As a minimum, are we on a 5 pixel grid or 4?_

### Component variables

_TODO: is there a way to scale this and make it typesafe?_

- Default props - should themes allow default property configurability? Or is theming

- Scoping; do schemes only reflect colors or the full theme?

# Goals

We provide a standard API to provide a theme by the application.

There are APIs which can help create themes based on an algorithm which can derive things.

# Palette colors

Palettes break down into named variants of a theme color, an accent color, and neutrals.

| Name         | Value |
| ------------ | ----- |
| themePrimary |       |

# Semantic colors

{
palette: { ... },
semanticColors: { ... },
schemes: {
default: { ...theme },
theme: { ...theme },
}
}

# Color schemes

# Typography

## Font families

## Font sizes

## Font weights

## Font variants

# Sizing

Grid size

# API surface for applications to provide themes
