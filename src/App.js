import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import Humburger from "./components/humburger/Humburger";
import Nav from "./components/nav/Nav";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Humburger open={open} setOpen={setOpen} />
      <Nav open={open} />
      <Home />
    </div>
  );
}

export default App;
