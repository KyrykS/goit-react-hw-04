import React from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ largeImageURL, onClose }) => {
  return (
    <ReactModal
      isOpen={!!largeImageURL}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <img src={largeImageURL} alt="" className={styles.image} />
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </ReactModal>
  );
};

export default ImageModal;
