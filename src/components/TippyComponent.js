import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import 'tippy.js/themes/light.css';

function TippyComponent() {
  return (
    <div>
      <h2>tippy</h2>
      <a href="https://atomiks.github.io/tippyjs/" target="_blank">
        tippylink
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
