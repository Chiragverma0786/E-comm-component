import React from 'react'
import './trs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Trs = ({ paymentLogo, mainColor, company, recieve, mainPaisa, upDown, colorOfBack}) => {
  return (
    <>
    <div className="wrap-cont">
    <div className="trs-logo">
        <div className="main-logo" style={{
          backgroundColor: colorOfBack,
          
        }}>
        <FontAwesomeIcon icon={paymentLogo} style={{
          color: mainColor
        }}/>
        </div>
        <div className="name-logo">
            <h3>{company}</h3>
            <p>{recieve}</p>
        </div>
    </div>
    <div className="trs-money">
      <p>{mainPaisa}</p>
      <FontAwesomeIcon icon={upDown} />
    </div>
    </div>
    </>
  )
}

export default Trs