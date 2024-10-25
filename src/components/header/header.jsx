import React, { useState } from 'react'
import './header.css'
import profile from '/src/assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCircleHalfStroke, faLanguage, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'

const Header = ({onDivClick}) => {
  
  return (
    <div className="header">
      <div className="search">
        <div className="menu-icon" onClick={onDivClick}>
        <FontAwesomeIcon icon={faBars} style={{
          fontSize: 19,
        }} />
        </div>
      <div className="srch-icon">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <p>Search Here</p>
      </div>

      <div className="navbar">
        <div className="lan">
        <FontAwesomeIcon icon={faLanguage
        } style={{
          fontSize: "20px",
        }}/>
        </div>
        <div className="mode" style={{
          fontSize: "20px",
        }}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>
        <div className="star" style={{
          fontSize: "20px",
        }}>
        <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="bell" style={{
          fontSize: "20px",
        }}>
        <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header