## Disclaimer

This page is under development and shouldn't be reviewed until finalized.

# Theming

One mistake we often see made when defining components for the web is that they make assumptions about the look and feel. Components bake in css styling, which works fine at the time of development, but creates a high barrier of entry in sharing and consuming the components within applications which may have different opinions about the visual design.

As we build components which adhere to the Stardust specifications, we want a consistent approach (and API surface) for applications to define their theme, and for components to consume the theme.

# What a theme is not

Theming should not be:

**UI framework specific.** It should work in applications which share React, Angular, and custom framework code.

**CSS framework specific.** It should work in applications which use CSS through static build systems (sass, less) as well as

# Overview

Applications should be able to call a `loadTheme` api, given a theme definition.

```tsx
loadTheme({
  /* theme content */
});
```

This theme should be easily consumable by components in a variety of ways that make sense for the scenario.

**Themes can be loaded on the fly.** Calling the api multiple times should allow the UI to reskin using a new definition.

**Partial theme support.** Themes can be easily defined using partial definitions; that is, you don't need to define a full theme, but missing parts can be calculated based on defaults and functional calculations.

**Theme scoping.** Applications can opt into sections of their UI using different versions of the theme. For example, a dark grey left nav should use a dark theme, whereas the white main content area should use a default light theme.

App developers should have access to UI tools which allow them to define a standard theming object. The theme object should contain the bare minimum content reqiured to define the theme based on a default state.

# Theme content

A theme consists of:

### Site variables

Site variables define the overall application colors, typeography, spacing, shading, and iconography.

**Palette colors** - a set of named slots for colors which represent primary/accent colors and neutrals used across the application. These colors should NOT be accessed by components, but exist primarily to define semantic colors.

**Semantic colors** - a set of named slots which give semantic meaning to the usage of the color. Semantic colors differentiate between background vs foreground colors, and should follow a naming convention.

_TODO: naming convention here._

**Typography** - how text is rendered in the site. This defines common families, sizes, and weights. There should also be common named `variant` definitions which give a semantic name to a combo of these typography concerns.

**Spacing** - semanticly named spacing values used to scale the "breathability" of the ui.

_TODO: should this be provided here? As a minimum, are we on a 5 pixel grid or 4?_

**Iconography** - how icons are injected into the app.

_TODO: how are icons provided, and how can we not create perf problems?_

### Component variables

_TODO: Does this include default prop overrides?_
_TODO: How do we scale component variables to be typesafe?_

### Component styling

_TODO: How do we scale component styling to be typesafe?_

# Methods

| Name         | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| createScheme | A utility helper to calculate a scheme given a palette and scheme name.                    |
| createTheme  | Creates a custom theme definition as well as a default set .                               |
| getTheme     | Accessor for previously created. Returns default theme if no theme was previously created. |
| loadTheme    | Applies the theme while filling in missing slots.                                          |

# Schemes

The following scheme names are supported:

| Scheme  | Description                                                                                                                                                                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default | Should themes allow default property configurability?                                                                                                                                                                                                                                               |
| Neutral | A variant where the background is a soft shade of the neutral color. Most other colors remain unchanged.                                                                                                                                                                                            |
| Soft    | A variant where the background is a soft version of the primary color. Most other colors remain unchanged.                                                                                                                                                                                          |
| Strong  | An inverted variant where the background is a strong version of the primary color. All colors change. <li>The background becomes shades of the primary color.</li> <li>The foreground/text becomes shades of the background color.</li><li>The primary color becomes shades of the background.</li> |

# Palette Colors

Palettes break down into named variants of a theme color, an accent color, and neutrals.

| Name                 | Description |
| -------------------- | ----------- |
| themePrimary         |             |
| themeLighterAlt      |             |
| themeLighter         |             |
| themeLight           |             |
| themeTertiary        |             |
| themeSecondary       |             |
| themeDarkAlt         |             |
| themeDark            |             |
| themeDarker          |             |
| neutralLighterAlt    |             |
| neutralLighter       |             |
| neutralLight         |             |
| neutralQuaternaryAlt |             |
| neutralQuaternary    |             |
| neutralTertiaryAlt   |             |
| neutralTertiary      |             |
| neutralSecondary     |             |
| neutralPrimaryAlt    |             |
| neutralPrimary       |             |
| neutralDark          |             |
| black                |             |
| white                |             |
| blackTranslucent40   |             |
| neutralSecondaryAlt  |             |
| accent               |             |
| whiteTranslucent40   |             |
| yellow               |             |
| yellowLight          |             |
| orange               |             |
| orangeLight          |             |
| orangeLighter        |             |
| redDark              |             |
| red                  |             |
| magentaDark          |             |
| magenta              |             |
| magentaLight         |             |
| purpleDark           |             |
| purple               |             |
| purpleLight          |             |
| blueDark             |             |
| blueMid              |             |
| blue                 |             |
| blueLight            |             |
| tealDark             |             |
| teal                 |             |
| tealLight            |             |
| greenDark            |             |
| green                |             |
| greenLight           |             |

# Semantic Colors

| Name                             | Description                                                   | Detail                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bodyBackground                   | The default color for backgrounds.                            |                                                                                                                                                                                                |
| bodyStandoutBackground           | The standout color for highlighted content backgrounds.       | For highlighted content when there is no emphasis, use the neutral variant instead. This should be a shade darker than bodyBackground in light themes, and a shade lighter in inverted themes. |
| bodyFrameBackground              | The color for chrome adjacent to an area with bodyBackground. |                                                                                                                                                                                                |
| bodyFrameDivider                 |                                                               |                                                                                                                                                                                                |
| bodyText                         |                                                               |                                                                                                                                                                                                |
| bodyTextChecked                  |                                                               |                                                                                                                                                                                                |
| bodySubtext                      |                                                               |                                                                                                                                                                                                |
| bodyDivider                      |                                                               |                                                                                                                                                                                                |
| actionLink                       |                                                               |                                                                                                                                                                                                |
| actionLinkHovered                |                                                               |                                                                                                                                                                                                |
| link                             |                                                               |                                                                                                                                                                                                |
| linkHovered                      |                                                               |                                                                                                                                                                                                |
| disabledBackground               |                                                               |                                                                                                                                                                                                |
| disabledText                     |                                                               |                                                                                                                                                                                                |
| disabledBodyText                 |                                                               |                                                                                                                                                                                                |
| disabledSubtext                  |                                                               |                                                                                                                                                                                                |
| focusBorder                      |                                                               |                                                                                                                                                                                                |
| variantBorder                    |                                                               |                                                                                                                                                                                                |
| variantBorderHovered             |                                                               |                                                                                                                                                                                                |
| defaultStateBackground           |                                                               |                                                                                                                                                                                                |
| errorText                        |                                                               |                                                                                                                                                                                                |
| warningText                      |                                                               |                                                                                                                                                                                                |
| errorBackground                  |                                                               |                                                                                                                                                                                                |
| blockingBackground               |                                                               |                                                                                                                                                                                                |
| warningBackground                |                                                               |                                                                                                                                                                                                |
| warningHighlight                 |                                                               |                                                                                                                                                                                                |
| successBackground                |                                                               |                                                                                                                                                                                                |
| inputBorder                      |                                                               |                                                                                                                                                                                                |
| smallInputBorder                 |                                                               |                                                                                                                                                                                                |
| inputBorderHovered               |                                                               |                                                                                                                                                                                                |
| inputBackground                  |                                                               |                                                                                                                                                                                                |
| inputBackgroundChecked           |                                                               |                                                                                                                                                                                                |
| inputBackgroundCheckedHovered    |                                                               |                                                                                                                                                                                                |
| inputForegroundChecked           |                                                               |                                                                                                                                                                                                |
| inputFocusBorderAlt              |                                                               |                                                                                                                                                                                                |
| inputPlaceholderText             |                                                               |                                                                                                                                                                                                |
| buttonBackground                 |                                                               |                                                                                                                                                                                                |
| buttonBackgroundHovered          |                                                               |                                                                                                                                                                                                |
| buttonBackgroundChecked          |                                                               |                                                                                                                                                                                                |
| buttonBackgroundCheckedHovered   |                                                               |                                                                                                                                                                                                |
| buttonBackgroundPressed          |                                                               |                                                                                                                                                                                                |
| buttonBorder                     |                                                               |                                                                                                                                                                                                |
| buttonText                       |                                                               |                                                                                                                                                                                                |
| buttonTextHovered                |                                                               |                                                                                                                                                                                                |
| buttonTextChecked                |                                                               |                                                                                                                                                                                                |
| buttonTextCheckedHovered         |                                                               |                                                                                                                                                                                                |
| buttonTextPressed                |                                                               |                                                                                                                                                                                                |
| buttonBorderDisabled             |                                                               |                                                                                                                                                                                                |
| buttonTextDisabled               |                                                               |                                                                                                                                                                                                |
| primaryButtonBackground          |                                                               |                                                                                                                                                                                                |
| primaryButtonBackgroundHovered   |                                                               |                                                                                                                                                                                                |
| primaryButtonBackgroundPressed   |                                                               |                                                                                                                                                                                                |
| primaryButtonBorder              |                                                               |                                                                                                                                                                                                |
| primaryButtonText                |                                                               |                                                                                                                                                                                                |
| primaryButtonTextHovered         |                                                               |                                                                                                                                                                                                |
| primaryButtonTextPressed         |                                                               |                                                                                                                                                                                                |
| menuItemBackgroundHovered        |                                                               |                                                                                                                                                                                                |
| menuIcon                         |                                                               |                                                                                                                                                                                                |
| menuHeader                       |                                                               |                                                                                                                                                                                                |
| listBackground                   |                                                               |                                                                                                                                                                                                |
| listText                         |                                                               |                                                                                                                                                                                                |
| listItemBackgroundHovered        |                                                               |                                                                                                                                                                                                |
| listItemBackgroundChecked        |                                                               |                                                                                                                                                                                                |
| listItemBackgroundCheckedHovered |                                                               |                                                                                                                                                                                                |
| listHeaderBackgroundHovered      |                                                               |                                                                                                                                                                                                |
| listHeaderBackgroundPressed      |                                                               |                                                                                                                                                                                                |

# Typography

## Font Families

| Name      | Description |
| --------- | ----------- |
| default   |             |
| monospace |             |

## Font Sizes

| Name       | Description |
| ---------- | ----------- |
| mini       |             |
| xSmall     |             |
| small      |             |
| smallPlus  |             |
| medium     |             |
| mediumPlus |             |
| large      |             |
| xLarge     |             |
| xxLarge    |             |
| mega       |             |

## Font Weights

| Name     | Description |
| -------- | ----------- |
| default  |             |
| light    |             |
| regular  |             |
| semibold |             |
| bold     |             |

## Font Variants

| Name    | Description |
| ------- | ----------- |
| default |             |
| caption |             |
| h1      |             |
| h2      |             |
| h3      |             |
| h4      |             |
| h5      |             |

# Sizing

Grid size
