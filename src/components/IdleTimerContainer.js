import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const idleTimerRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sessionTimeoutRef = useRef(null)

  const onIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 5000)
  };

  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('User is Active')
  }
  const logOut = () => {
    setModalIsOpen(false)
    setIsLoggedIn(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('User has logged out')
  }

  
 
  return (
    <div>
      <h2>IdleTimerContainer</h2>
      <a
        href="https://github.com/SupremeTechnopriest/react-idle-timer"
        target="_blank"
      >
        Docs
      </a>
      {/* //start */}
      {
          isLoggedIn ? <h2>Hello Tommy</h2> : <h2>Hello Guest</h2>
      }
      <Modal isOpen={modalIsOpen}>
          <h2>You've been idle for a while</h2>
          <p>You will be Logged out soon </p>
          <button onClick={logOut}>Logout</button>
          <button onClick={stayActive}>Keep me signed In</button>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimerContainer;
