import React from 'react'

import './LogoBar.css'

const LogoBar = props => {
  const {
    logos,
    style
  } = props
  
  return (
    <div className='LogoBar' style={style}>
      {logos.map((src, i) => <div className={src} key={`img${i}`}><img src={`/images/${src}-logo-white.png`} /></div>)}
    </div>
  )
}

LogoBar.defaultProps = {
  logos: ['crosswalk', 'voa', 'hope-house']
}



export default LogoBar