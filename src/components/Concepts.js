import React from 'react'
import _ from 'lodash'
import { conceptsByComponent } from '../research'
import ConceptCoverage from './ConceptCoverage'
import Specimens from './Specimens'

const Concepts = ({ component }) => {
  return (
    <div>
      {_.map(conceptsByComponent[component], (c, i) => (
        <div key={i}>
          <h3>
            {c.name} <ConceptCoverage component={component} concept={c.name} />
          </h3>
          <Specimens component={component} concept={c.name} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
