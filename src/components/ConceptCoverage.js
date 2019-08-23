import React from 'react'
import _ from 'lodash'
import { doesSourceHaveComponentConcept, sourceNames } from '../research'

const ConceptCoverage = ({ component, concept }) => {
  return (
    <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      {_.map(sourceNames, sourceName => {
        const hasConcept = doesSourceHaveComponentConcept(sourceName, component, concept)

        return { sourceName, hasConcept }
      })
        .sort((a, b) => (b.hasConcept ? 1 : -1))
        .map(item => (
          <div
            key={item.sourceName}
            style={{
              display: 'inline-flex',
              marginRight: '1px',
              padding: '4px 2px',
              color: 'white',
              fontSize: 10,
              textTransform: 'uppercase',
              background: item.hasConcept ? '#6C6' : '#C66',
            }}
            title={item.sourceName}
          />
        ))}
    </div>
  )
}

export default ConceptCoverage
