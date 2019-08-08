import React from 'react'

const Anatomy = props => {
  return (
    <div
      style={{
        display: 'inline-grid',
        padding: '8px',
        gridGap: '8px',
        gridTemplate: `
          "icon content" 32px /
           32px 128px
         `,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: '-1px',
        background: 'magenta',
      }}
    >
      {props.children}
    </div>
  )
}

// const AnatomyArea = ({ name }) => {
//   return (
//     <div
//       style={{
//         padding: '8px',
//         background: 'rgba(255,255,255,0.5)',
//         gridArea: name,
//       }}
//     >
//       {name}
//     </div>
//   )
// }

export default Anatomy
