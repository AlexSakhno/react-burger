import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

interface Props {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const modalsContainer = document.getElementById('modals');

const Modal: React.FC<Props> = ({ onClose, children, title }) => {
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

  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!modalsContainer) {
    return null;
  }

  return createPortal(
    <div className={styles.container}>
      <ModalOverlay onClose={onClose} />
      <div className={`${styles.modal} p-10`} onClick={handleContainerClick}>
        <header className={`${styles.header}`}>
          <div className={`${styles.title} text text_type_main-medium`}>
            {title}
          </div>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon type='primary' />
          </div>
        </header>
        {children}
      </div>
    </div>,
    modalsContainer
  );
};

export default Modal;
