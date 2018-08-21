# Theming

The expectation for theming is that we provide a few things:

1. A standard contract for an application to provide a theme
2. A standard interface of what a theme is defined as
3. A way for libraries to consume the theme to style their components
4. This all needs to be done in a ui framework agnostic manner

# What is a theme?

A theme consists of:

- Palette colors - a set of named slots for colors which represent primary/accent colors and neutrals used across the application.

- Named color schemes - each named scheme includes a set of named semantic slots (bg/fg/border/states) which reference palette colors.

- Typography - how text is rendered in the site.

- Sizing - the semantic sizing slots which content is laid out.

TBD:

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
