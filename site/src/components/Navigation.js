import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Navigation = ({ style }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allMdx {
          edges {
            node {
              frontmatter {
                menu
                name
                path
              }
            }
          }
        }
      }
    `}
    render={data => {
      // get all frontmatter objects with a menu defined
      const nodes = _.map(data.allMdx.edges, 'node.frontmatter').filter(({ menu }) => !!menu)
      const menu = _.groupBy(nodes, 'menu')
      console.log(style)

      return (
        <nav style={{ ...style, paddingRight: '1rem' }}>
          <ul
            style={{
              position: 'sticky',
              top: '1rem',
            }}
          >
            {nodes.map(frontmatter => (
              <li key={frontmatter.name} style={{ listStyleType: `none` }}>
                <Link to={frontmatter.path}>{frontmatter.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )
    }}
  />
)

Navigation.propTypes = {
  style: PropTypes.object,
}

export default Navigation
