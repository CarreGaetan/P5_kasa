// import React from 'react';
import Rate from '../../assets/rate.png';
import EmptyRate from '../../assets/emptyRate.png';
import './ApartmentInfos.scss';

function ApartmentInfo({ title, location, host, tags, rating }) {
    const totalStars = 5;

    return (
        <>
            <div className="apt_infos">
                <div className="apt_title_categories">
                    <div className="apt_title">
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                    <div className="apt_categories">
                        {tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="apt_host_rating">
                    <div className="apt_host">
                        <p>{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                    </div>
                    <div className="apt_rating">
                        {[...Array(parseInt(rating))].map((_, index) => (
                            <img key={index} src={Rate} alt="étoile" />
                        ))}
                        {[...Array(totalStars - parseInt(rating))].map((_, index) => (
                            <img key={index + rating} src={EmptyRate} alt="étoile vide" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApartmentInfo;
