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

      // get all frontmatter objects with a menu defined
      const menu = _.sortBy(_.toPairs(_.groupBy(nodes, 'menu')), _.first)

      return (
        <nav style={style}>
          <ul style={{ position: 'sticky', top: '1em', margin: 0 }}>
            {menu.map(([category, items]) => (
              <li key={category} style={{ margin: 0, listStyleType: 'none' }}>
                <div
                  style={{
                    display: 'inline-block',
                    opacity: 0.5,
                    marginLeft: 'calc(2px + 0.5em)', // align with items
                  }}
                >
                  {category}
                </div>
                <ul style={{ margin: '0 0 1em 0' }}>
                  {items.map(item => (
                    <li
                      key={item.name}
                      style={{
                        margin: 0,
                        listStyleType: 'none',
                      }}
                    >
                      <Link
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '0.25em 1em 0.25em 0.5em',
                          margin: 0,
                          borderLeft: '2px solid transparent',
                          borderRadius: '2px',
                          whiteSpace: 'nowrap',
                        }}
                        activeStyle={{
                          borderLeftColor: '#00a453',
                          backgroundColor: '#f2f2f2',
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
