import React from "react";
import Modal from "react-native-modalbox";

const ModalComponent = ({ children, isVisible }) => {
  return (
    <Modal
      style={{
        alignItems: "center",
        backgroundColor: "#eee"
      }}
      isOpen={isVisible}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
