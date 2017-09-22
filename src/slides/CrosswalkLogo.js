import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

class CrosswalkLogo extends Slide {
  get classNames() {
    return ['Logo CrosswalkLogo'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <div className='Logo'><img src='/images/crosswalk-logo-white.png' alt='Crosswalk Logo' /></div>
      <LogoBar logos={['voa']} />
    </div>
  }
}

CrosswalkLogo.propTypes = {
  ...Slide.propTypes
}

CrosswalkLogo.defaultProps = {
  ...Slide.defaultProps
}

export default CrosswalkLogo