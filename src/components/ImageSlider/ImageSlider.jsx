import { useEffect, useState } from 'react';
import style from "./ImageSlider.module.css"

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const timer = setInterval(goToNext,3000);
        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [currentIndex]);

    return (
        <div className={style["slider"]}>
            <button onClick={goToPrevious} className={style["slider-button"]}>{'<'}</button>
            <img src={images[currentIndex]} alt="slide" className={style["slider-image"]} />
            <button onClick={goToNext} className={style["slider-button"]}>{'>'}</button>
        </div>
    );
};

export default ImageSlider;
