import React from 'react'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { ThemeProvider } from 'emotion-theming'

import * as components from '../components'

const componentsMap = {
  // page: components.Page,
  // notFound: components.NotFound,
  // render: components.Render,
  // h1: components.H1,
  // h2: components.H2,
  // h3: components.H3,
  // h4: components.H4,
  // h5: components.H5,
  // h6: components.H6,
  // ul: components.List,
  img: components.Image,
  // loading: components.Loading,
  // table: components.Table,
  // pre: components.Pre,
  // inlineCode: components.Code,
}

const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <ComponentsProvider components={componentsMap}>{children}</ComponentsProvider>
    </ThemeProvider>
  )
}

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
}

export default theme(themeConfig)(Theme)
