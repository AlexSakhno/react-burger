import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

interface Props {
  setIsModal: (active: boolean) => void;
  isModal: boolean;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<Props> = ({ setIsModal, isModal, children, title }) => {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      setIsModal(false);
    }
  };

  return isModal
    ? createPortal(
        <ModalOverlay setIsModal={setIsModal}>
          <div className={`${styles.container}  p-10`}>
            <header className={`${styles.header}`}>
              <div className={`${styles.title} text text_type_main-medium`}>
                {title}
              </div>
              <div className={styles.close} onClick={() => setIsModal(false)}>
                <CloseIcon type='primary' />
              </div>
            </header>
            {children}
          </div>
        </ModalOverlay>,
        document.body
      )
    : null;
};

export default Modal;
