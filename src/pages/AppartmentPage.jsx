// import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AppartmentDetails from "../components/ApartmentDetails/ApartmentDetails"

function AppartmentPage() {
  return (
    <div className="wrapper">
          <div className="main">
            <Navbar />
            <AppartmentDetails />
          </div>
        <Footer />
      </div>
  )
}

export default AppartmentPage