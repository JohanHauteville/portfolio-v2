import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import SocialBar from "./components/SocialBar";
import ProjectsSlider from "./components/ProjectsSlider";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import Available from "./components/Available";
// import Mesh from "./components/Mesh";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Loading />
      <TopBar />
      <Header />

      <Section
        id={"home"}
        mainTitle={true}
        title={"FrontEnd\nDeveloper"}
        defineHeight={"150svh"}
        meshUrl={"https://prod.spline.design/wggkT2YOr3kJWCSl/scene.splinecode"}
      />

      <Section
        id={"skills"}
        number={"0 1."}
        title={"SKILLS"}
        // meshUrl={"https://prod.spline.design/tsa6zsvFXIHonGWL/scene.splinecode"}
        // meshFront={true}
        // meshUnFixed={false}
      >
        <Skills />
      </Section>

      <Section id={"experiences"} number={"02."} title={"EXPERIENCES"}>
        <Experiences />
      </Section>

      <Section id={"projects"} number={"03."} title={"PROJECTS"}>
        <ProjectsSlider />
      </Section>

      <Section id={"contact"} number={"04."} title={"CONTACT"}>
        <Contact />
      </Section>

      {/* <p>Copyrights® 2024 - Made by JHauteville.</p> */}
      <SocialBar />
      <Available />
      {/* <Mesh fullwidth={true} isUnFixed={false} /> */}
      {/* <CursorDiamond /> */}
      <img
        src="../assets/img/website/background@0.5x.png"
        alt="background"
        className="app-background"
      />
    </>
  );
}

export default App;
