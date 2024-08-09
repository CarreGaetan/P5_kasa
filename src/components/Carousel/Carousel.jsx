import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './Carousel.scss';

function Carousel({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div className="carousel_inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {pictures.map((picture, index) => (
                    <img key={index} src={picture} alt={title} className="carousel_image" />
                ))}
            </div>
            {pictures.length > 1 && (
                <>
                    <div className="carousel_buttons">
                        <img src={leftArrow} alt="previous" onClick={goToPrevious} />
                        <img src={rightArrow} alt="next" onClick={goToNext} />
                    </div>
                    <div className="carousel_counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Carousel;
