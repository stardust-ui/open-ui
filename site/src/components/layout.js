import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Navigation from './Navigation'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ display: 'flex', margin: '0px auto', maxWidth: '1200px' }}>
          <Navigation
            style={{
              flex: '0 0 auto',
              width: '200px',
            }}
          />
          <div
            style={{
              flex: 1,
              padding: '0px 1.0875rem 1.45rem',
            }}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
