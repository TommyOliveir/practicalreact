
import "./App.css";
import ReactIcons from "./components/ReactIcons";
import ReactToastify from "./components/ReactToastify";
import ModalComponent from "./components/ModalComponent";
import ModalComponent2 from "./components/ModalComponent2";
import TippyComponent from "./components/TippyComponent";
import ReactCountUpComponent from "./components/ReactCountUpComponent";
import IdleTimerContainer from "./components/IdleTimerContainer";



function App() {
  return (
    <div className="App">
      <h1>Practical React</h1>
      <ReactIcons />
      <ReactToastify/>
      <ModalComponent/>
      <ModalComponent2/>
      <TippyComponent/>
      <ReactCountUpComponent/>
     <IdleTimerContainer/>
     
    </div>
  );
}

export default App;
