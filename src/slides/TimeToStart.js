import React from 'react'
import moment from 'moment'

import Slide from '../components/Slide'

const OneMinute = 1000 * 60
const OneHour = 1000 * 60 * 60
const AlertTime = OneMinute
const RedAlertTime = OneMinute / 4

const startDate = new Date('Tue Sep 21 2017 18:50:00 GMT-0700')

class TimeToStart extends Slide {
  componentDidMount() {
    super.componentDidMount()

    this.updateTime()
    this.interval = setInterval(this.updateTime, 250)
  }

  componentWillUnmount() {
    super.componentWillUnmount()

    clearInterval(this.interval)
  }

  updateTime = () => {
    let diff = startDate - new Date()

    if (diff > OneHour) {
      diff = diff % OneHour
    }

    if (diff <= 0) {
      return this.setState({
        minutes: '00',
        seconds: '00'
      })
    }

    const dur = moment.duration(diff)
    const [minutes, seconds] = [dur.minutes(), dur.seconds()]
      .map(i => Math.max(0, i))
      .map(i => i.toString()
      .padStart(2, '0'))

    this.setState({
      diff,
      minutes,
      seconds
    })
  }

  get classNames() {
    const {diff} = this.state

    return ['TimeToStart', {
      Alert: diff < AlertTime && diff > RedAlertTime,
      RedAlert: diff < RedAlertTime
    }].concat(super.classNames)
  }

  renderContent() {
    const {minutes, seconds} = this.state
    return (
      <div className='Content'>
        <h5>Presentation begins in</h5>
        <div className='countdown'>
          <span>{minutes}</span>
          <span className='lifted'>:</span>
          <span>{seconds}</span>
        </div>
      </div>
    )
  }
}

TimeToStart.propTypes = {
  ...Slide.propTypes
}

TimeToStart.defaultProps = {
  ...Slide.defaultProps
}

export default TimeToStart