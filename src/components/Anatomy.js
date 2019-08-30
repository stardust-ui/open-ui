import React from 'react'
import { anatomiesByComponent } from '../research'

const Anatomy = props => {
  return (
    <ul>
      {anatomiesByComponent[props.component].map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
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
