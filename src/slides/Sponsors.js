import React from 'react'
import Slide from '../components/Slide'

import Speaker from '../components/Speaker'
import LogoBar from '../components/LogoBar'

const Lists = [
  [
    'Northwest Spine and Pain Medicine',
    'Waddell and Reed',
    'Century Link',
    'Empire Health Foundation',
    'Sisters of Providence',
    'Coffman Engineers',
    'Molina',
  ],
  [
    'Forster Financial',
    'CHAS',
    'Coordinated Care',
    '10 Talents',
    'ZBA Architects',
    'Brenda Day and Peter Weitzman',
    'HUB International',
  ]
]

class Sponsors extends Slide {
  get classNames() {
    return ['Sponsors ThanksLists'].concat(super.classNames)
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount()
  }

  renderContent() {    
    const content = Lists.map((ul, i) => {
      return (
        <ul key={`list${i}`}>
          {ul.map((li, i) => <li>{li}</li>)}
        </ul>
      )
    })

    return <div className='Content'>
      <h1>sponsors</h1>
      <div className='Lists'>
        {content}
      </div>
      <LogoBar />
    </div>
  }
}

Sponsors.propTypes = {
  ...Slide.propTypes
}

Sponsors.defaultProps = {
  ...Slide.defaultProps
}

export default Sponsors