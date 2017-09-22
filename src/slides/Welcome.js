import React from 'react'
import Slide from '../components/Slide'

import Speaker from '../components/Speaker'
import LogoBar from '../components/LogoBar'

class Welcome extends Slide {
  get classNames() {
    return ['Welcome Message'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <Speaker name='John Allison' title='Board President' />
      <h1 className='Message'>welcome</h1>
      <LogoBar />
    </div>
  }
}

Welcome.propTypes = {
  ...Slide.propTypes
}

Welcome.defaultProps = {
  ...Slide.defaultProps
}

export default Welcome