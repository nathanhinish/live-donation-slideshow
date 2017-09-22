import React, {Component} from 'react'
import currFormatter from 'format-currency'

function hexToRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

function formatCurrency(value) {
  return currFormatter(value, {format: '%s%v', symbol: '$'})
}

class Thermometer extends Component {
  render() {
    const {
      instructions: {
        keyword,
        phone
      },
      mercury,
      fundraising: {
        raised
      }
    } = this.props

    const bgRGB = hexToRGB(mercury.color)
    
    const style = {
      background: `rgba(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b}, 0.2)`
    }
    const barStyle = {
      width: `${mercury.progress * 100}%`,
      background: `rgba(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b}, 0.8)`
    }

    const f = {
      opacity: 0.8
    }
    
    return (
      <div className='Thermometer' style={style}>
        <div className='Bar' style={barStyle} />

        <div className='Labels'>
          <div className='Instructions'>
            <span style={f}>text</span> <strong>{keyword}</strong> <span style={f}>to</span> <strong>{phone}</strong>
          </div>
          <div style={{flex: '1 1 100%'}} />
          <div className='Raised'>{formatCurrency(raised)}</div>
        </div>
      </div>
    )
  }
}



export default Thermometer
