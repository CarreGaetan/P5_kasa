// import React from 'react'
import "./ApartmentCards.scss";
import data from "../../datas/data"; // Assurez-vous que le chemin est correct
import { Link } from "react-router-dom";

function AppartmentGrid() {
  return (
    <div className="grid">
      {data.map((appartment) => (
        <Link className="appartment" to={`/appartment/${appartment.id}`} key={appartment.id}>
          <img className="appartment_image" src={appartment.cover} alt={appartment.title} />
          <h3 className="appartment_title">{appartment.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default AppartmentGrid;
