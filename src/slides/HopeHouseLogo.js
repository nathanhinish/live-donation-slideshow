import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

class HopeHouseLogo extends Slide {
  get classNames() {
    return ['Logo HopeHouseLogo'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <div className='Logo'><img src='/images/hope-house-logo-white.png' alt='Hope House Logo' /></div>
      <LogoBar logos={['voa']} />
    </div>
  }
}

HopeHouseLogo.propTypes = {
  ...Slide.propTypes
}

HopeHouseLogo.defaultProps = {
  ...Slide.defaultProps
}

export default HopeHouseLogo