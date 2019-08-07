import React from 'react'
import _ from 'lodash'
import * as research from '../research'

const CoverageMeter = ({ component, concept }) => {
  return (
    <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      {_.map(research, designSystem => {
        const foundComponent = component && _.find(designSystem.components, { name: component })
        const foundConcept = foundComponent && _.find(foundComponent.concepts, { name: concept })

        const passComponentCheck = !component || !!foundComponent
        const passConceptCheck = !concept || !!foundConcept

        // console.log(designSystem.name, { component, concept, foundComponent, foundConcept })

        return (
          <div
            key={designSystem.name}
            style={{
              display: 'inline-flex',
              margin: '1px',
              padding: '3px',
              borderRadius: 999,
              color: 'white',
              fontSize: 10,
              textTransform: 'uppercase',
              background:
                passComponentCheck && passConceptCheck
                  ? '#6C6'
                  : passComponentCheck || passConceptCheck
                  ? '#AB3'
                  : '#C66',
            }}
            title={designSystem.name}
          />
        )
      })}
    </div>
  )
}

export default CoverageMeter
