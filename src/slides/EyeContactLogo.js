import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

class EyeContactLogo extends Slide {
  get classNames() {
    return ['Logo EyeContactLogo'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {
    return <div className='Content'>
      <div className='Logo'><img src='/images/eye-contact-logo.png' alt='Eye Contact Logo' /></div>
      <LogoBar />
    </div>
  }
}

EyeContactLogo.propTypes = {
  ...Slide.propTypes
}

EyeContactLogo.defaultProps = {
  ...Slide.defaultProps
}

export default EyeContactLogo