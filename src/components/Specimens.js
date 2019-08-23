import React from 'react'
import { getImagesForComponentConcept } from '../research'
import Image from './Image'

const Specimens = ({ component, concept }) => {
  const images = getImagesForComponentConcept(component, concept)

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
