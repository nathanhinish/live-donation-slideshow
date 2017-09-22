import React, {Component} from 'react'

import './IFrameTherms.css'

import {CampaignIds} from '../Constants'

class IFrameTherms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateFrameUrl, 10 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateFrameUrl = () => {
    let index = this.state.index + 1
    if (index >= CampaignIds.length) {
      index = 0
    }
    this.setState({index})
  }

  render() {
    if (!CampaignIds.length) {
      return null
    }

    const id = CampaignIds[this.state.index]
    const src = `https://app.mobilecause.com/public/campaigns_keywords/${id}/graph?no_polling=false`
    return (
      <div className='IFrameTherms'>
        <iframe src={src} scrolling='no' />
      </div>
    )
  }
}

export default IFrameTherms
