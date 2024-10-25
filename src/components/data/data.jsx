import React from 'react'
import './data.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

const Data = ({icons, paisa, Data, styling, iconColor}) => {
  return (
    <div className="data">
        <div className="data-icon" style={{
            backgroundColor: styling,
            fontSize: 20,
            padding: 3,
        }}>
        <FontAwesomeIcon icon={icons} style={{
            color: iconColor
        }}/>
        </div>
        <div className="data-paisa">
            <h1>{paisa}</h1>
            <p>Total {Data}</p>
        </div>
    </div>
  )
}

export default Data