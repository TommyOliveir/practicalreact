import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function ModalComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <h2>Click Modal 2</h2>
      <a href="https://www.npmjs.com/package/react-modal" target="_blank">
        react modal
      </a>
      <button onClick={() => setModalIsOpen(true)}>Open modal2</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'yellow',
          },
          content: {
            color: 'darkslategray'
          }
        }}
      >
        <h2>Modal 2</h2>
        <p>Modal body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
