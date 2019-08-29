import React from 'react'
import _ from 'lodash'
import { concepts } from '../research'
import ConceptCoverage from './ConceptCoverage'

const Concepts = ({ component }) => {
  return (
    <div>
      {_.map(concepts, (c, i) => (
        <div key={i}>
          <h3>{c.name}</h3>
          <ConceptCoverage component={component} concept={c.name} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
