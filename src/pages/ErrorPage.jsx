 // import React from 'react'
import Header from "../components/Header/Header"
import ErrorImg from "../assets/ErrorImg.png" 
import "../styles/ErrorPage.scss"
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer"

function ErrorPage() {
  return (
      <div className="wrapper">
        <div className="main">
          <Header />
          <div className="errorImg">
            <img src={ErrorImg} alt="404" />
            <p>Oups ! La page que vous demandez n'existe pas</p>
            <Link to="/">
            Retourner sur la page d'accueil
            </Link>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ErrorPage