import React, { Fragment, FC } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

interface Props {
  onClose: () => void;
}


const Modal: FC<Props> = ({ onClose, children }) => {
  const portalElement = document.getElementById('overlays') as HTMLDivElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

const Backdrop: FC<Props> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: FC = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Modal;
