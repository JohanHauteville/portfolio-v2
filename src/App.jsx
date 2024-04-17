// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Mesh from "./components/Mesh";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  // const [count, setCount] = useState(0);
  // let scrollY = 0;
  // window.addEventListener("scroll", () => {
  //   scrollY = window.scrollY;
  //   console.log(window.scrollY);
  // });
  return (
    <>
      {}
      <Header />
      <Section
        id={"home"}
        mainTitle={true}
        title={"PORTFOLIO"}
        sentence={"< FrontEnd Developer />"}
      />
      <Mesh />
      <Section
        id={"projects"}
        number={"01."}
        title={"PROJECTS"}
        sentence={"Navigate through my projects !"}
      />
      <Section id={"skills"} number={"02."} title={"SKILLS"} sentence={""} />
      <Section id={"about"} number={"03."} title={"ABOUT"} sentence={""} />
      <Section id={"contact"} number={"04."} title={"CONTACT"} sentence={""} />
    </>
  );
}

export default App;
