import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal-overlay.module.css';

type TProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalOverlay: React.FC<TProps> = ({ children, onClose }) => {
  const modalsContainer = document.getElementById('modals');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!modalsContainer) {
    return null;
  }

  return createPortal(
    <div className={styles.container} onClick={onClose}>
      {children}
    </div>,
    modalsContainer
  );
};

export default ModalOverlay;
