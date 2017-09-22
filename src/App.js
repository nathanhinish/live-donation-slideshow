import React, { Component } from 'react';
import './App.css';

import IFrameTherms from './components/IFrameTherms'
import Thermometers from './components/Thermometers'

import slides from './slides'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange)
    window.addEventListener('keydown', this.onKeyDown)
    this.updateSlideInfo()
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  updateSlideInfo() {
    const hash = document.location.hash.replace(/^#/, '')
    let slideIndex
    switch (hash) {
      case 'iframe':
        slideIndex = -1
        break
      default:
        slideIndex = parseInt(hash, 10)
    }
    this.setState({
      hash,
      slideIndex: !isNaN(slideIndex) ? slideIndex : 0
    })
  }

  setSlideIndex(slideIndex) {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      document.location.hash = `#${slideIndex}`
    }
  }

  onHashChange = () => {
    this.updateSlideInfo()
  }

  onKeyDown = event => {
    switch (event.key) {
      case 'ArrowRight':
        this.setSlideIndex(this.state.slideIndex + 1)
        break;
      case 'ArrowLeft':
        this.setSlideIndex(this.state.slideIndex - 1)
        break
      default:
        // noop
    }
  }

  onClick = () => {
    this.setSlideIndex(this.state.slideIndex + 1)
  }

  render() {
    if (this.state.hash === 'iframe') {
      return <IFrameTherms />
    }

    const {slideIndex, scale} = this.state
    const Slide = slides[slideIndex]

    if (!Slide) {
      return null
    }

    return (
      <div className='App' onClick={this.onClick}>
        <Thermometers />
        <Slide scale={scale} />
      </div>
    );
  }
}

export default App;
