import "./App.css";
import circles from "./assets/pattern-circles.svg";
import Slider from "./components/Slider";
import { Views } from "./Views";

function App() {
  return (
    <div className="App">
      <img className="circles" src={circles} alt="circles"></img>
      <div className="titles">
        <h1>Simple, trafic-based pricing</h1>
        <p className="heading">Sign-up for our 30-day trial.</p>
        <p className="heading"> No credit card required. </p>
      </div>
      <Slider views={Views} />
    </div>
  );
}

export default App;
