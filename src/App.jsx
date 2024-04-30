import "./App.css";
// import Mesh from "./components/Mesh";
import Header from "./components/Header";
import Section from "./components/Section";
import SocialBar from "./components/SocialBar";
import ProjectsSlider from "./components/ProjectsSlider";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

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
        defineHeight={"40vh"}
      />
      <ProjectsSlider />
      <Section
        id={"skills"}
        number={"02."}
        title={"SKILLS"}
        sentence={""}
        defineHeight={"40vh"}
      />
      <Skills />
      <Section
        id={"experiences"}
        number={"03."}
        title={"EXPERIENCES"}
        sentence={""}
        defineHeight={"40vh"}
      />
      <Experiences />
      <Section id={"contact"} number={"04."} title={"CONTACT"} sentence={""} />
      <SocialBar />
    </>
  );
}

export default App;
