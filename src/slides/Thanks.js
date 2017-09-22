import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

class Thanks extends Slide {
  get classNames() {
    return ['Reflection Message'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <h1 className='Message'>thank you</h1>
      <LogoBar />
    </div>
  }
}

Thanks.propTypes = {
  ...Slide.propTypes
}

Thanks.defaultProps = {
  ...Slide.defaultProps
}

export default Thanks