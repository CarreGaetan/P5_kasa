import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner";
import AppartmentGrid from "../components/ApartmentCards/ApartmentCards";
import Footer from "../components/Footer/Footer";
import "../styles/HomePage.scss";
import bannerImage from "../assets/banner_bg.png"

function App() {
  return (
    <>
      <div className="wrapper">
          <div className="main">
            <Header />
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
            <AppartmentGrid />
          </div>
        <Footer />
      </div>
    </>
  );
}

export default App;