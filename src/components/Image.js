import React from 'react'

const Image = ({ src, alt = 'An image.', ...rest }) => {
  return (
    <img
      alt={alt}
      src={require(`../public/images/${src}`)}
      style={{
        display: 'inline-block',
        zoom: 0.5,
      }}
      {...rest}
    />
  )
}

export default Image
