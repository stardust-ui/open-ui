import React from 'react'
import _ from 'lodash'
import * as research from '../research'
import Image from './Image'

const Specimens = ({ component, concept }) => {
  const allComponents = _.flatMap(research, 'components')

  const components = _.filter(allComponents, { name: component })
  const concepts = _.flatMap(components, 'concepts')
  const matchedConcept = _.filter(concepts, { name: concept })
  const images = _.map(matchedConcept, 'image')

  return (
    <div style={{ border: '1px solid #ccc' }}>
      <div style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '12px' }}>
        <strong>Specimens</strong>
      </div>
      <div style={{ padding: '1rem' }}>
        {images.map(src => (
          <Image key={src} src={src} />
        ))}
      </div>
    </div>
  )
}

export default Specimens
