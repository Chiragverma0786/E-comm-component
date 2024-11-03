import React from 'react'
import './meeting.css'


const Meeting = ({meetIcon, meetHead, meetTitle, buttonName, lastColor, lastbgColor}) => {
  return (
    <>
    <div className="last-cont">
    <div className="left-side">
        <div className="logo-last">
            <img src={meetIcon} alt="" />
            </div>      
        <div className="dis-last">
            <h2>{meetHead}</h2>
            <p>{meetTitle}</p>
        </div>
    </div>
    <div className="right-side">
        <div className="type" style={{
            backgroundColor: lastbgColor
        }}>
            <p style={{
                color: lastColor
            }}>{buttonName}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Meeting
