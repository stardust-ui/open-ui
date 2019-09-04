import React from 'react'

const Image = ({ src, alt = src, ...rest }) => {
  let imageData
  try {
    imageData = require(`../public/images/${src}`)
  } catch(error) {
  }

  return (
    <img
      alt={alt}
      src={imageData}
      style={{
        display: 'inline-block',
        zoom: 0.5,
      }}
      {...rest}
    />
  )
}

export default Image
