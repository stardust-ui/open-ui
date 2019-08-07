import React from 'react'
import * as research from '../research'

const ComponentNameMatrix = props => {
  const allComponentNames = _.sortBy(_.uniq(_.flatMap(_.flatMap(research, 'components'), 'name')))

  console.log(allComponentNames)

  return (
    <div
      style={{
        display: 'grid',
        gridGap: '10px',
        textAlign: 'center',
        gridTemplateColumns: 'repeat(100, 1fr)',
        gridAutoFlow: 'column',
      }}
    >
      <div>
        <h3>All</h3>
        {_.map(allComponentNames, componentName => {
          return <div key={componentName}>{componentName}</div>
        })}
      </div>
      {_.map(research, curentResearch => (
        <div key={curentResearch.name}>
          <h3
            style={{
              display: 'block',
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {curentResearch.name}
          </h3>
          {_.map(allComponentNames, componentName => {
            const hasComponentName = _.find(curentResearch.components, { name: componentName })

            return (
              <div
                key={componentName}
                style={{ background: hasComponentName ? 'lightgreen' : 'salmon' }}
              >
                {hasComponentName ? componentName : '-'}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ComponentNameMatrix
