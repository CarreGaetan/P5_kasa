// import React from 'react'
import "./Footer.scss"
import logo_footer from "../../assets/logo_footer.png"

function Footer() {
  return (
    <footer className="footer"> 
        <img className="logo_footer" src={logo_footer} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer