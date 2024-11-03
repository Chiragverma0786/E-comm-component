import React from 'react'
import './dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Dash = ({faltu, icon,styling}) => {
  return (
    <div className="icon" style={{
      backgroundColor: styling
      }}>
        <div className="one"> 
        <div className="font-icon">
        <FontAwesomeIcon icon={icon} style={{color: "rgb(140, 87, 255)",
          fontSize: "18px",
        }}/>
        </div>
        <div className="font-title">
        <h2>{faltu}</h2>
        </div>
        </div>
        <div className="two">
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </div>
  )
}

export default Dash