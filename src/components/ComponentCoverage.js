import React from 'react'
import _ from 'lodash'
import { componentsByOpenuiName } from '../research'

const ComponentCoverage = ({ component }) => (
  <ul>
    {_.get(componentsByOpenuiName, component).map(component => (
      <li key={component.source}>
        {component.name} ({component.source})
      </li>
    ))}
  </ul>
)

export default ComponentCoverage
