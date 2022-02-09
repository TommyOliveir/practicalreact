
import "./App.css";
import ReactIcons from "./components/ReactIcons";
import ReactToastify from "./components/ReactToastify";
import ModalComponent from "./components/ModalComponent";
import ModalComponent2 from "./components/ModalComponent2";
import TippyComponent from "./components/TippyComponent";


function App() {
  return (
    <div className="App">
      <h1>Practical React</h1>
      <ReactIcons />
      <ReactToastify/>
      <ModalComponent/>
      <ModalComponent2/>
      <TippyComponent/>
    </div>
  );
}

export default App;
