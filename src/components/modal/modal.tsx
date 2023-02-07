import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ReactNode } from 'react';
import styles from './modal.module.css';

interface Props {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<Props> = ({ onClose, children, title }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.container} p-10`} onClick={handleContainerClick}>
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
  );
};

export default Modal;
