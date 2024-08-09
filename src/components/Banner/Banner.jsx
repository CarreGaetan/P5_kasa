// import React from 'react'
// import banner_bg from "../assets/banner_bg.png"
import "./Banner.scss"

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="banner_text">{text}</h1>
    </div>
  )
}

export default Banner