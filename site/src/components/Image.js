import React from 'react'

const Image = ({ src, alt = 'An image.' }) => {
  return (
    <img
      alt={alt}
      src={require(`../images/${src}`)}
      style={{
        display: 'inline-block',
        zoom: 0.5,
      }}
    />
  )
}

export default Image
