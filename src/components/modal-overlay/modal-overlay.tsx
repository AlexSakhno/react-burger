import React from 'react';
import styles from './modal-overlay.module.css';

type TProps = {
  onClose: () => void;
};

const ModalOverlay: React.FC<TProps> = ({ onClose }) => {
  return <div className={styles.container} onClick={onClose}></div>;
};

export default ModalOverlay;
