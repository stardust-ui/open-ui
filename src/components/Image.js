import React from 'react'

const Image = ({ src, alt = 'An image.', retina }) => {
  return (
    <img
      alt={alt}
      src={require(`../public/images/${src}`)}
      style={{
        display: 'block',
        zoom: 0.5,
      }}
    />
  )
}

export default Image
