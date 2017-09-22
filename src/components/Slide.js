import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './Slide.css'

class Slide extends Component {
  constructor(props) {
    super(props)
    if (!this.state) {
      this.state = {}
    }
    this.state = {
      ...this.state,
      sizeCalculated: false,
      scale: 1
    }
  }

  get classNames() {
    const {className} = this.props
    return ['Slide', className]
  }

  setEl = (key, el) => {
    this[key] = el
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize)
    setTimeout(() => this.calculateSize(), 250)
  }

  componentDidUpdate() {
    if (!this.state.sizeCalculated) {
      this.calculateSize()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  calculateSize() {
    if (!this.slide || !this.inner) {
      return
    }

    const slide = findDOMNode(this.slide);
    const content = findDOMNode(this.inner);

    const {
      clientWidth: sW,
      clientHeight: sH
    } = slide;
    const {
      scrollWidth: cW,
      scrollHeight: cH
    } = content;


    let scale = this.state.scale

    // sW = sW / scale
    // sH = sH / scale
    if (cW < sW && cH < sH) {
      // scale up
      scale = Math.min(sH / cH, sW / cW)
      // console.info('both smaller', bH / sH, bW / sW, scale)
    } else {
      // scale down
      scale = Math.min(sH / cH, sW / cW)
      // console.info('one bigger  ', bH / sH, bW / sW, scale)
    }

    console.info(sW, sH, cW, cH, scale)

    this.setState({
      sizeCalculated: true,
      scale
    })
  }

  onWindowResize = () => {
    this.setState({sizeCalculated: false, scale: 1})
  }

  renderContent(scale) {
    return null
  }

  render() {
    const {scale, sizeCalculated} = this.state
    const style = {
      transform: `scale(${scale})`,
      opacity: sizeCalculated ? undefined : 0
    }

    const className = cx(this.classNames)

    return (
      <div className={className} ref={el => this.setEl('slide', el)}>
        <div className='Inner' ref={el => this.setEl('inner', el)} style={style}>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  scale: PropTypes.number.isRequired,
  className: PropTypes.string
}

Slide.defaultProps = {
  scale: 1
}

export default Slide