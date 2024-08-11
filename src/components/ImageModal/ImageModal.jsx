import React from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

// Налаштування стилів модального вікна
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <img className={styles.modalImage} src={image.urls.regular} alt={image.alt_description} />
        <div className={styles.imageDetails}>
          <p><strong>Author:</strong> {image.user.name}</p>
          <p><strong>Likes:</strong> {image.likes}</p>
          {image.description && <p><strong>Description:</strong> {image.description}</p>}
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
