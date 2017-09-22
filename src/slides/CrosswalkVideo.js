import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

const videoUrl = ''

class CrosswalkVideo extends Slide {
  get classNames() {
    return ['Video CrosswalkVideo'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {
    // <div className='Logo'><img src='/images/crosswalk-logo-white.png' alt='Crosswalk Logo'/></div>
    return <div className='Content'>

      <video className='Video' autoPlay src={videoUrl} />
      {/* this is here to keep position of logo correct */}
      <LogoBar logos={['voa']} style={{opacity: 0}} />
    </div>
  }
}

CrosswalkVideo.propTypes = {
  ...Slide.propTypes
}

CrosswalkVideo.defaultProps = {
  ...Slide.defaultProps
}

export default CrosswalkVideo