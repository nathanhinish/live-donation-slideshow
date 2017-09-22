import React from 'react'
import Slide from '../components/Slide'

import LogoBar from '../components/LogoBar'

const Lists = [
  [
    'Washington Cracker Co. ',
    'Anvil Coffee',
    'Overbluff Cellars',
    'Spokane Produce',
    'Wandering Table',
    'Common Crumb',
    'A Catered Affair',
    'Cole’s Bakery ',
  ],
  [
    'Belle Mira Consulting ',
    'Jewelry Design Center ',
    'Pounder’s Jewelry',
    'Volunteer Committee',
    'Rosauers',
    'Terrain',
    'Jesse Pierpoint',
    'Steve Schott',
  ],
  [
    'Art Seed',
    'Ildikó Kalapács',
    'Sam White',
    'Shana Smith',
    'Denny Carman',
    'Tracy Dupuis',
    'Terran Echegoyen',
    'Rebecca Lloyd',
  ],
  [
    'Laura Novak',
    'Scott Dillon',
    'Evan Denlinger',
    'Sister Sue Orlowski',
    'Video participants',
    'Crosswalk Artists',
    'Anonymous Donors',
  ]
]

class SpecialThanks extends Slide {
  get classNames() {
    return ['SpecialThanks ThanksLists'].concat(super.classNames)
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
      <h1>speakers, artists & in-kind donations</h1>
      <div className='Lists'>
        {content}
      </div>
      <LogoBar />
    </div>
  }
}

SpecialThanks.propTypes = {
  ...Slide.propTypes
}

SpecialThanks.defaultProps = {
  ...Slide.defaultProps
}

export default SpecialThanks