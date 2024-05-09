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

function App() {
  return (
    <>
      <TopBar />
      <Header />

      <Section
        id={"home"}
        mainTitle={true}
        title={"FrontEnd\nDeveloper"}
        // sentence={"< FrontEnd Developer />"}
        defineHeight={"150svh"}
      />

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
      <Available />
      {/* <CursorDiamond /> */}
    </>
  );
}

export default App;
