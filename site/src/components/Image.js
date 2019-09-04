import React from 'react'

const Image = ({ src, alt = 'An image.', style }) => {
  return (
    <img
      alt={alt}
      src={require(`../images/${src}`)}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        zoom: 0.5,
        margin: 0,
        ...style,
      }}
    />
  )
}

export default Image
