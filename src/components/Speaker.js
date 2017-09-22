import React from 'react'

import './Speaker.css'

const Speaker = props => {
  const {name, title} = props
  return (
    <div className='Speaker'>
      <h1>{name}</h1>
      <h3>{title}</h3>
    </div>
  )
}

export default Speaker