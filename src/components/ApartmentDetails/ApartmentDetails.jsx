import { useNavigate, useParams } from 'react-router-dom';
import data from "../../datas/data";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../Dropdown/dropdown";
import ApartmentInfos from "../../components/ApartmentInfos/ApartmentInfos";
import "./ApartmentDetails.scss";

function ApartmentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const apartment = data.find((item) => item.id === id);

    if (!apartment) {
        navigate('/404'); 
        return null; 
    }

    return (
        <div className="apt_main">
            <Carousel pictures={apartment.pictures} title={apartment.title} />
            <ApartmentInfos 
                title={apartment.title} 
                location={apartment.location} 
                host={apartment.host} 
                tags={apartment.tags} 
                rating={apartment.rating} 
            />
            <div className="apt_dropdown">
                <Dropdown title="Description">
                    <p>{apartment.description}</p>
                </Dropdown>
                <Dropdown title="Equipements">
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
