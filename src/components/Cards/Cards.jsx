// import React from 'react'
import "./Cards.scss";
import data from "../../datas/data";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="grid">
      {data.map((appartment) => (
        <Link className="appartment" to={`/apartment/${appartment.id}`} key={appartment.id}>
          <img className="appartment_image" src={appartment.cover} alt={appartment.title} />
          <h3 className="appartment_title">{appartment.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
