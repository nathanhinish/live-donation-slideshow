import React from 'react'
import Slide from '../components/Slide'

import Speaker from '../components/Speaker'
import LogoBar from '../components/LogoBar'

class Reflection extends Slide {
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
      <Speaker name='Fawn Schott' title='President & CEO' />
      <h1 className='Message'>reflection</h1>
      <LogoBar />
    </div>
  }
}

Reflection.propTypes = {
  ...Slide.propTypes
}

Reflection.defaultProps = {
  ...Slide.defaultProps
}

export default Reflection