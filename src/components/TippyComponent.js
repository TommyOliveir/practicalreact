import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import 'tippy.js/themes/light.css';

function TippyComponent() {
  return (
    <div>
<<<<<<< HEAD
      <h2>tippy change</h2>
=======
      <h2>tippy</h2>
>>>>>>> 677cc084bb349e078e2e156893b1f6119aad1dba
      <a href="https://atomiks.github.io/tippyjs/" target="_blank">
        tippylink Docs
      </a><br></br>
      <a href="https://youtu.be/8y4Dr9jJtF0?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM" target="_blank">
        tippylink Video 
      </a>
      <div>
        <Tippy content="Hello Basic Tooltip">
          <button>My button</button>
        </Tippy>
      </div>
      <div >
        <Tippy theme={'light'} interactive={true}content={<span style={{color: 'orange'} }>color</span>}>
          <button>My button</button>
        </Tippy>
      </div>
      <div >
    
      </div>
    </div>
  );
}

export default TippyComponent;
