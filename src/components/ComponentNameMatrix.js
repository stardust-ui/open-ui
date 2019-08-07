import React from 'react'
import * as research from '../research'

const ComponentNameMatrix = props => {
  const getMatchName = name =>
    name
      .replace(/ /gi, '')
      .toLowerCase()
      .replace(/(e|s|es)$/, '')

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

  const rowStyle = {
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    height: '2rem',
    lineHeight: 1.2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const colStyle = { flex: 1, width: '2rem' }

  return (
    <div
      style={{
        fontSize: '12px',
        display: 'flex',
        textAlign: 'center',
      }}
    >
      <div style={colStyle}>
        <h5>Match</h5>
        {_.map(matchNameToCount, ([matchName, count]) => {
          return (
            <div key={matchName} style={rowStyle}>
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
          <h5
            style={{
              position: 'sticky',
              display: 'block',
              top: 0,
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              background: 'white',
            }}
          >
            <a target="_blank" rel="nofollow noreferrer" href={curentResearch.url}>
              {curentResearch.name}
            </a>
          </h5>
          {_.map(matchNameToCount, ([matchName, count]) => {
            const foundComponent = _.find(
              curentResearch.components,
              ({ name }) => getMatchName(name) === matchName,
            )

            return (
              <div
                key={matchName}
                style={{ ...rowStyle, background: foundComponent ? 'lightgreen' : 'salmon' }}
              >
                {foundComponent && (
                  <a target="_blank" rel="nofollow noreferrer" href={foundComponent.url}>
                    {foundComponent.name}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ComponentNameMatrix
