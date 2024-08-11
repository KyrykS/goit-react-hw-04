import React, { useState } from 'react';
import styles from './ImageGallery.module.css';
import ImageModal from '../ImageModal/ImageModal';

const ImageGallery = ({ images }) => {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li key={image.id} className={styles.imageCard} onClick={() => openModal(image)}>
            <img src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
      </ul>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalImage}
      />
    </>
  );
};

export default ImageGallery;
