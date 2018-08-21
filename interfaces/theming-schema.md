# Theming

The expectation for theming is that we provide a few things:

1. Methods allowing applications to create and provide themes.
2. Utilities and calculators to aid in creating schemes.
3. Standard interfaces for themes and theme elements.
4. A way for libraries to consume themes to style their components.
5. Provide all of these elements in a UI framework agnostic manner.

# Theme Definition: What is a theme?

A theme consists of:

| Theme Element   | Description                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Palette         | A set of named slots for colors which represent primary/accent colors and neutrals used across the application.                                        |
| Semantic Colors | A set of named slots for applying palette colors to components according to a variety of factors such as category, component name and component state. |
| Schemes         | A set of named color schemes, each of which includes a set of named semantic slots (bg/fg/border/states) which reference palette colors.               |
| Typography      | A definition for how text is rendered in the site.                                                                                                     |
| Sizing          | The semantic sizing slots for which content is laid out.                                                                                               |

TBD:

| Theme Element | Description                                           |
| ------------- | ----------------------------------------------------- |
| Default Props | Should themes allow default property configurability? |
| Scoping       | Do schemes only reflect colors or the full theme?     |


# Methods

| Name         | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| createScheme | A utility helper to calculate a scheme given a palette and scheme name.                    |
| createTheme  | Creates a custom theme definition.                                                         |
| getTheme     | Accessor for previously created. Returns default theme if no theme was previously created. |
| loadTheme    | Applies the theme while filling in missing slots.                                          |


# Color Schemes

The following scheme names are supported:

| Scheme Name | Description                                                                                                                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default     | Should themes allow default property configurability?                                                                                                                                                                                                                                     |
| Neutral     | A variant where the background is a soft shade of the neutral color. Most other colors remain unchanged.                                                                                                                                                                                  |
| Soft        | A variant where the background is a soft version of the primary color. Most other colors remain unchanged.                                                                                                                                                                                |
| Strong      | A variant where the background is a strong version of the primary color. All colors change. <li>The background becomes shades of the primary color.</li> <li>The foreground/text becomes shades of the background color.</li><li>The primary color becomes shades of the background.</li> |



# Palette colors

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

# Semantic colors

| Name                             | Description |
| -------------------------------- | ----------- |
| bodyBackground                   |             |
| bodyStandoutBackground           |             |
| bodyFrameBackground              |             |
| bodyFrameDivider                 |             |
| bodyText                         |             |
| bodyTextChecked                  |             |
| bodySubtext                      |             |
| bodyDivider                      |             |
| actionLink                       |             |
| actionLinkHovered                |             |
| link                             |             |
| linkHovered                      |             |
| disabledBackground               |             |
| disabledText                     |             |
| disabledBodyText                 |             |
| disabledSubtext                  |             |
| focusBorder                      |             |
| variantBorder                    |             |
| variantBorderHovered             |             |
| defaultStateBackground           |             |
| errorText                        |             |
| warningText                      |             |
| errorBackground                  |             |
| blockingBackground               |             |
| warningBackground                |             |
| warningHighlight                 |             |
| successBackground                |             |
| inputBorder                      |             |
| smallInputBorder                 |             |
| inputBorderHovered               |             |
| inputBackground                  |             |
| inputBackgroundChecked           |             |
| inputBackgroundCheckedHovered    |             |
| inputForegroundChecked           |             |
| inputFocusBorderAlt              |             |
| inputPlaceholderText             |             |
| buttonBackground                 |             |
| buttonBackgroundHovered          |             |
| buttonBackgroundChecked          |             |
| buttonBackgroundCheckedHovered   |             |
| buttonBackgroundPressed          |             |
| buttonBorder                     |             |
| buttonText                       |             |
| buttonTextHovered                |             |
| buttonTextChecked                |             |
| buttonTextCheckedHovered         |             |
| buttonTextPressed                |             |
| buttonBorderDisabled             |             |
| buttonTextDisabled               |             |
| primaryButtonBackground          |             |
| primaryButtonBackgroundHovered   |             |
| primaryButtonBackgroundPressed   |             |
| primaryButtonBorder              |             |
| primaryButtonText                |             |
| primaryButtonTextHovered         |             |
| primaryButtonTextPressed         |             |
| menuItemBackgroundHovered        |             |
| menuIcon                         |             |
| menuHeader                       |             |
| listBackground                   |             |
| listText                         |             |
| listItemBackgroundHovered        |             |
| listItemBackgroundChecked        |             |
| listItemBackgroundCheckedHovered |             |
| listHeaderBackgroundHovered      |             |
| listHeaderBackgroundPressed      |             |


# Typography

## Font Families

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
