import React from 'react'
import Slide from '../components/Slide'

import Speaker from '../components/Speaker'
import LogoBar from '../components/LogoBar'

class Donate extends Slide {
  get classNames() {
    return ['Donate Message'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <Speaker name='Stephanie Neumann' title='Director of Development' />
      <h1 className='Message'>donate</h1>
      <LogoBar />
    </div>
  }
}

Donate.propTypes = {
  ...Slide.propTypes
}

Donate.defaultProps = {
  ...Slide.defaultProps
}

export default Donate