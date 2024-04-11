// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Mesh from "./components/Mesh";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Section
        id={"home"}
        number={"01."}
        title={"Hello World !"}
        sentence={"< FrontEnd Developer />"}
      />
      <Mesh />
      <Section
        id={"projects"}
        number={"02."}
        title={"Projects"}
        sentence={"Navigate through my projects !"}
      />
      <Section id={"skills"} number={"03."} title={"Skills"} sentence={""} />
      <Section id={"About"} number={"04."} title={"About"} sentence={""} />
    </>
  );
}

export default App;
