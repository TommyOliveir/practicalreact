import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReactToastify() {
  const notify = () => toast("Wow so easy !", {
    position: toast.POSITION.TOP_CENTER
   
  });
  return (
    <div>
      <a href="https://fkhadra.github.io/react-toastify/introduction" target="_blank">
        React Toastify
      </a>
      <button onClick={notify}>Notify !</button>
      <ToastContainer autoClose={false}/>
    </div>
  );
}

export default ReactToastify;
