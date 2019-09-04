import React from 'react'
import _ from 'lodash'
import { conceptsByComponent } from '../research'
import ConceptCoverage from './ConceptCoverage'
import Specimens from './Specimens'

const Concepts = ({ component }) => {
  return (
    <div>
      {_.map(conceptsByComponent[component], (concept, conceptOpenuiName) => (
        <div key={conceptOpenuiName}>
          <h3>
            {conceptOpenuiName} <ConceptCoverage component={component} concept={conceptOpenuiName} />
          </h3>
          <Specimens component={component} concept={conceptOpenuiName} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
