import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card}>
      <img
        src={urls.small}
        alt={alt_description}
        className={styles.image}
        onClick={() => onImageClick(urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
