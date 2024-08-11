import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Oval color="#007bff" height={80} width={80} />
  </div>
);

export default Loader;
