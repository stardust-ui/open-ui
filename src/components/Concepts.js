import React from 'react'
import _ from 'lodash'
import { conceptsByComponent } from '../research'
import ConceptCoverage from './ConceptCoverage'
import Specimens from './Specimens'

const Concepts = ({ component }) => {
  return (
    <div>
      {_.map(conceptsByComponent[component], (concept, conceptOpenUIName) => (
        <div key={conceptOpenUIName}>
          <h3>
            {conceptOpenUIName}{' '}
            <ConceptCoverage component={component} concept={conceptOpenUIName} />
          </h3>
          <Specimens component={component} concept={conceptOpenUIName} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
