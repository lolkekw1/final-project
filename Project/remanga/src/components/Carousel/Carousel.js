import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const mangaList = [
    { id: 1, title: 'Истребитель Демонов', image: 'carousel-images/image1.jpg' },
    { id: 2, title: 'Ван пис', image: 'carousel-images/image2.jpg' },
    { id: 3, title: 'Человек-Бензопила', image: 'carousel-images/image3.jpg' },
    { id: 4, title: 'Так ли плохо быть вороной', image: 'carousel-images/image4.jpg' },
    { id: 5, title: 'Звездное Дитя', image: 'carousel-images/image5.jpg' },
    { id: 6, title: 'У Коми проблемы с общением', image: 'carousel-images/image6.jpg' },
    { id: 7, title: 'Восхождение Героя Щита', image: 'carousel-images/image7.jpg' },
    { id: 8, title: 'Дракорничная Господи Кобаяси', image: 'carousel-images/image8.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % mangaList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mangaList.length]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % mangaList.length);
  };
  
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + mangaList.length) % mangaList.length);
  };  

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Обновления популярной манги</h2>
      <div className="carousel-images">
        {mangaList.map((manga, i) => (
          <div
            key={manga.id}
            className={`carousel-image-container ${i >= startIndex && i < startIndex + visibleImages ? 'active' : ''}`}
            style={{ transform: `translateX(-${startIndex * 100}%)` }}
          >
            <img
              className="carousel-image"
              src={`${process.env.PUBLIC_URL}/${manga.image}`}
              alt={manga.title}
            />
          </div>
        ))}
      </div>
      <div>
        <button className="carousel-prev" onClick={handlePrev}>{'<'}</button>
        <button className="carousel-next" onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousel;
