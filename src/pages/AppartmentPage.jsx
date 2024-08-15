// import React from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AppartmentDetails from "../components/ApartmentDetails/ApartmentDetails"

function AppartmentPage() {
  return (
    <div className="wrapper">
          <div className="main">
            <Header />
            <AppartmentDetails />
          </div>
        <Footer />
      </div>
  )
}

export default AppartmentPage