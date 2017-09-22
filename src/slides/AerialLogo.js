import React from 'react'
import Slide from '../components/Slide'

class AerialLogo extends Slide {
  get classNames() {
    return ['Logo AerialLogo'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <div className='Logo'><img src='/images/sapa-logo-white-bg.png' alt='Crosswalk Logo' /></div>
    </div>
  }
}

AerialLogo.propTypes = {
  ...Slide.propTypes
}

AerialLogo.defaultProps = {
  ...Slide.defaultProps
}

export default AerialLogo
