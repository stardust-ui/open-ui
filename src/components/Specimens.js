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

  return images.map(src => {
    console.log('specimen', { component, concept, src })
    return <Image key={src} src={src} />
  })
}

export default Specimens
