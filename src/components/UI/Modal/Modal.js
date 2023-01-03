import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.closeHandler}>
      <div className="content">{props.children}</div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className="modal_content">{props.children}</div>;
};

const portals = document.querySelector("#portals");

const Modal = (props) => {
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      props.closeHandler();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeHandler={props.closeHandler} />,
        portals
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portals
      )}
    </>
  );
};

export default Modal;
