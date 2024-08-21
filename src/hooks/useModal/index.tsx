import { useCallback, useRef, useState } from "react";
import "./style.scss";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef();

  const openModal = useCallback(() => {
    setIsOpen(true);
    console.log("모달 열렸다");
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Modal = ({ children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">{children}</div>
          </div>
        )}
      </>
    );
  };

  return { Modal, openModal, closeModal };
};
