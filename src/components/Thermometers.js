import React, {Component} from 'react'
import Promise from 'promise-polyfill'
import {parseString} from 'xml2js'
import 'whatwg-fetch'

import './Thermometers.css'
import Therm from './Therm'

import {CampaignIds} from '../Constants'

const CurrencyFixRe = /[$,]/g

function parseCurrency(str) {
  return parseInt(str.replace(CurrencyFixRe, ''), 10)
}

function getThermData(id) {
  return fetch(`/mc/campaigns_keywords/${id}/graph.js`)
}

function parseThermData(data) {
  return new Promise((resolve, reject) => {
    parseString(`<r>${data}</r>`, (err, res) => {
      if (err) {
        return reject(err)
      }

      // Text purpleteam to 91999 ~ (no space in purpleteam)

      const cta = res.r.div[0]._
      const instructions = {
        keyword: cta.split(' ')[1],
        phone: cta.split(' ')[3]
      }
      
      // res.r.div[3] is the therm mercury settings
      const mercury = {
        color: res.r.div[3].div[0].$['data-mercury-color'],
        progress: 1 - parseFloat(res.r.div[3].div[1].$['data-mercury-percent-empty']),
      }

      // res.r.div[4] is the fundraising data
      const fundraising = {
        goal: parseCurrency(res.r.div[4].div[0].div[1]._),
        raised: parseCurrency(res.r.div[4].div[1].div[1]._),
        numDonors: parseInt(res.r.div[4].div[2].div[1]._, 10),
        remaining: parseCurrency(res.r.div[4].div[3].div[1]._),
        exceeded: parseCurrency(res.r.div[4].div[4].div[1]._)
      }


      // res.r.ul is the pledge wall
      const wall = res.r.ul[0].li.map(li => {
        return {
          amount: parseCurrency(li.div[0]._),
          donor: li.div[1]._
        }
      })
      
      resolve({
        instructions,
        mercury,
        fundraising,
        wall
      })
    })
  })
}

class Thermometers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.getThermData()
    this.interval = setInterval(() => {
      this.getThermData()
    }, 5 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getThermData() {
    const promise = Promise.all(CampaignIds.map(getThermData))
    
    return promise.then(results => Promise.all(results.map(r => r.text())))
                  .then(results => Promise.all(results.map(r => parseThermData(r))))
                  .then(thermData => {
                    this.setState({thermData})
                  })
  }

  render() {
    const thermData = this.state.thermData || []
    return (
      <div className='Thermometers'>
        {thermData.map((data, i) => <Therm key={`therm${i}`} {...data} />)}
      </div>
    )
  }
}

Thermometers.propTypes = {
  
}

Thermometers.defaultProps = {
  
}

export default Thermometers