import React from 'react'
import { getImagesForComponentConcept } from '../research'
import Image from './Image'

const Specimens = ({ component, concept }) => {
  const images = getImagesForComponentConcept(component, concept)

  return (
    <div style={{ border: '1px solid #ccc' }}>
      <div style={{ padding: '1rem' }}>
        {images.map((src, i) => (
          <Image key={i} src={src} />
        ))}
      </div>
    </div>
  )
}

export default Specimens
