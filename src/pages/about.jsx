// import React from 'react'
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Dropwdown from "../components/Dropdown/dropdown"
import Footer from "../components/Footer/Footer"
import "../styles/About.scss"
import bannerImgAbout from "../assets/banner_bg_aboutPage.png"

function about() {
  return (
    <>
      <div className="wrapper">
          <div className="main">
            <Header />
            <Banner image={bannerImgAbout} />
            <div className="dropdowns_container">
              <Dropwdown title="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </Dropwdown>
              <Dropwdown title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </Dropwdown>
              <Dropwdown title="Services">
                <p>La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
              </Dropwdown>
              <Dropwdown title="Sécurité">
                <p>La sécurité est la priorité chez Kasa. Que ce soit pour nos hôtes ou nos voyageurs, chaque logement respecte les critères de sécurité établis par nos services. En laissant une note, que ce soit à l'hôte ou au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </Dropwdown>
            </div>
          </div>
        <Footer />
      </div>
    </>
  )
}

export default about