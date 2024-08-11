import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ src, alt, largeImageURL }) => {
  const handleClick = () => {
    // Логіка відкриття модального вікна з великою версією зображення
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageCard;
