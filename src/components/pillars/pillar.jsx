import React from 'react'
import './pillar.css'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'

const Pillar = ({pillHeight, pillColor}) => {
  return (
    <div className="pillars" style={{
        height: pillHeight,
        backgroundColor: pillColor
    }}></div>
  )
}

export default Pillar