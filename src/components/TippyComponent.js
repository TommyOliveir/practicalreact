import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import 'tippy.js/themes/light.css';

function TippyComponent() {
  return (
    <div>
      <h2>tippy change</h2>
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
