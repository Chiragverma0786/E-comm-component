import React from 'react'
import './Id.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Id = ({idNo, statusIcon, statusColor, statusbgColor, clientLogo, clientColor, clientbgColor,  clientName, clientEmail, totalAmount, balance}) => {
  return (
    <div className="id1">
                <div className="id-no1">
                  <div className="id-no">
                    <h2>{idNo}</h2>
                  </div>
                  <div className="status-no">
                  <FontAwesomeIcon icon={statusIcon} style={{
                    backgroundColor: statusbgColor,
                    color: statusColor,
                    borderRadius: 50,
                    padding: 7
                  }}/>
                  </div>
                  <div className="client-no">
                    <div className="client-logo" style={{
                        backgroundColor: clientbgColor,
                        color: clientColor,
                        borderRadius: 50,
                        padding: 7
                    }}>
                        <h3>{clientLogo}</h3>
                    </div>
                    <div className="client-dis">
                        <h1>{clientName}</h1>
                        <p>{clientEmail}</p>
                    </div>
                  </div>
                </div>
                <div className="person-balance-1">
                <div className="cl-total-no">
                    <h2>{totalAmount}</h2>
                  </div>
                  <div className="cl-balance-no">
                    <h2>{balance}</h2>
                  </div>
                </div>
              </div>
  )
}

export default Id