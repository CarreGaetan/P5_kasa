import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from "../../datas/data";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/dropdown";
import ApartmentInfo from "../../components/ApartmentInfos/ApartmentInfos";
import "./ApartmentDetails.scss";

function ApartmentDetails() {
    const { id } = useParams();
    const apartment = data.find((item) => item.id === id);

    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipementOpen, setEquipementOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen(!isDescriptionOpen);
    };

    const toggleEquipement = () => {
        setEquipementOpen(!isEquipementOpen);
    };

    if (!apartment) {
        return <div>Appartement non trouvé</div>;  // useNavigate = redirection vers 404
    }

  

    return (
        <div className="apt_main">
            <Carousel pictures={apartment.pictures} title={apartment.title} />
            <ApartmentInfo 
                title={apartment.title} 
                location={apartment.location} 
                host={apartment.host} 
                tags={apartment.tags} 
                rating={apartment.rating} 
            />
            <div className="apt_dropdown">
                <Dropdown title="Description" isOpen={isDescriptionOpen} toggle={toggleDescription}>
                    <p>{apartment.description}</p>
                </Dropdown>
                <Dropdown title="Equipements" isOpen={isEquipementOpen} toggle={toggleEquipement}>
                    <ul>
                        {apartment.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
}

export default ApartmentDetails;
