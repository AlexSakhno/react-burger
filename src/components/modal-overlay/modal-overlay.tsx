import React, { ReactNode } from 'react';
import styles from './modal-overlay.module.css';

type TProps = {
  setIsModal: (active: boolean) => void;
  children: ReactNode;
};

const ModalOverlay: React.FC<TProps> = ({ setIsModal, children }) => {
  return (
    <div onClick={() => setIsModal(false)} className={styles.container}>
      {children}
    </div>
  );
};

export default ModalOverlay;
