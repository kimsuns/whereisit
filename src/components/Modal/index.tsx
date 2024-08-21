import { useRef, useState } from "react";
import Button from "../Button/Button";
import "./style.scss";

function Modal({ children, onClose }) {
  return (
    <div>
      {/* <Button onClick={() => setModalOpen(true)}>+</Button> */}
      <div
        className="modal"
        ref={modalRef}
        onClick={(e) => {
          if (e.target === modalRef.current) {
            setModalOpen(false);
          }
        }}
      >
        <div className="modal-content">
          {children}
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
