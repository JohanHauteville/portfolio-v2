import "./App.css";
// import Mesh from "./components/Mesh";
import Header from "./components/Header";
import Section from "./components/Section";
import SocialBar from "./components/SocialBar";
import ProjectsSlider from "./components/ProjectsSlider";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

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
      />
      {/* <Mesh /> */}
      <Section
        id={"projects"}
        number={"01."}
        title={"PROJECTS"}
        sentence={"Navigate through my projects !"}
        // defineHeight={"40vh"}
        childrenPosition="bottom"
      >
        <ProjectsSlider />
      </Section>

      <Section
        id={"skills"}
        number={"02."}
        title={"SKILLS"}
        // defineHeight={"40vh"}
        childrenPosition="bottom"
      >
        <Skills />
      </Section>

      <Section
        id={"experiences"}
        number={"03."}
        title={"EXPERIENCES"}
        // defineHeight={"40vh"}
        childrenPosition="bottom"
      >
        <Experiences />
      </Section>

      {/* <Experiences /> */}

      <Section
        id={"contact"}
        number={"04."}
        title={"CONTACT"}
        childrenPosition="top"
      >
        <Contact />
      </Section>
      {/* <p>Copyrights® 2024 - Made by JHauteville.</p> */}
      <SocialBar />
      {/* <CursorDiamond /> */}
    </>
  );
}

export default App;
