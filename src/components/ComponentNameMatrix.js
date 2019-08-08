import React from 'react'
import * as research from '../research'
import _ from 'lodash'

const ComponentNameMatrix = props => {
  const getMatchName = name =>
    name
      .replace(/ /gi, '')
      .toLowerCase()
      .replace(/(\w+)(e|s|es)$/, '$1')

  const matchNameMap = new Map([])

  const matchNameToCount = _.sortBy(
    _.toPairs(
      _.countBy(
        _.flatMap(_.flatMap(research, 'components'), 'name').map(name => {
          const matchName = getMatchName(name)
          matchName === 'button' && console.log(research.name, name)
          matchNameMap.set(name, matchName)
          return matchName
        }),
      ),
    ),
    ([matchName, count]) => matchName,
  )

  const colStyle = { flex: 1, width: '2rem' }
  const headerStyle = {
    position: 'sticky',
    display: 'block',
    padding: '1rem 0 0.5rem 0',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    background: 'white',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  }
  const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '2rem',
    lineHeight: 1.2,
    // borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  }

  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        fontSize: '12px',
      }}
    >
      <div style={colStyle}>
        <strong style={headerStyle}>Match</strong>
        {_.map(matchNameToCount, ([matchName, count]) => {
          return (
            <div key={matchName} style={cellStyle}>
              {Math.round((count / Object.keys(research).length) * 100)}%
              <div
                style={{
                  display: 'block',
                  background: 'limegreen',
                  height: '4px',
                  float: 'left',
                  width: Math.round((count / Object.keys(research).length) * 100) + '%',
                }}
              />
            </div>
          )
        })}
      </div>

      {_.map(research, curentResearch => (
        <div key={curentResearch.name} style={colStyle}>
          <strong style={headerStyle}>
            <a target="_blank" rel="noopener noreferrer" href={curentResearch.url}>
              {curentResearch.name}
            </a>
          </strong>
          {_.map(matchNameToCount, ([matchName, count]) => {
            const foundComponent = _.find(
              curentResearch.components,
              ({ name }) => getMatchName(name) === matchName,
            )

            const style = {
              ...cellStyle,
              background: foundComponent ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
              color: foundComponent ? 'rgb(0, 64, 0)' : 'rgb(64, 0, 0)',
              textDecoration: 'none',
            }

            return foundComponent ? (
              <a target="_blank" rel="noopener noreferrer" href={foundComponent.url} style={style}>
                {foundComponent.name}
              </a>
            ) : (
              <div key={matchName} style={style} />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ComponentNameMatrix
