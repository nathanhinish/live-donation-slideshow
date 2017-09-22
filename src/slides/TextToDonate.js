import React from 'react'
import Slide from '../components/Slide'

import Speaker from '../components/Speaker'
import LogoBar from '../components/LogoBar'

class TextToDonate extends Slide {
  get classNames() {
    return ['TextToDonate'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    return <div className='Content'>
      <div className='Blue'>
        <h1>tiny.cc/teamblue</h1>
        <img src='/images/tiny_cc_teamblue.png' alt='QR Code' />
      </div>
      <div className='Purple'>
        <h1>tiny.cc/teampurple</h1>
        <img src='/images/tiny_cc_teampurple.png' alt='QR Code' />
      </div>
    </div>
  }
}

TextToDonate.propTypes = {
  ...Slide.propTypes
}

TextToDonate.defaultProps = {
  ...Slide.defaultProps
}

export default TextToDonate