import "./App.css";
// import Mesh from "./components/Mesh";
import Header from "./components/Header";
import Section from "./components/Section";
import SocialBar from "./components/SocialBar";
import ProjectsSlider from "./components/ProjectsSlider";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import CursorDiamond from "./components/CursorDiamond";

function App() {
  // const [count, setCount] = useState(0);
  // let scrollY = 0;
  // window.addEventListener("scroll", () => {
  //   scrollY = window.scrollY;
  //   console.log(window.scrollY);
  // });
  return (
    <>
      <Header />
      <Section
        id={"home"}
        mainTitle={true}
        title={"PORTFOLIO"}
        sentence={"< FrontEnd Developer />"}
        defineHeight={"150svh"}
      />
      {/* <Mesh /> */}
      <Section
        id={"projects"}
        number={"0 1."}
        title={"PROJECTS"}
        // sentence={"Navigate through my projects !"}
      >
        <ProjectsSlider />
      </Section>

      <Section id={"skills"} number={"02."} title={"SKILLS"}>
        <Skills />
      </Section>

      <Section id={"experiences"} number={"03."} title={"EXPERIENCES"}>
        <Experiences />
      </Section>

      <Section id={"contact"} number={"04."} title={"CONTACT"}>
        <Contact />
      </Section>
      {/* <p>Copyrights® 2024 - Made by JHauteville.</p> */}
      <SocialBar />
      {/* <CursorDiamond /> */}
    </>
  );
}

export default App;
