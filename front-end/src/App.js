import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
//import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import Zoom from 'react-reveal/Zoom'
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          {/*<WorkExp />*/}
          <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        <Zoom>
          <p className="text-center ml-2">Copyright &copy; 2023 personalportfolio || Design and Developed by Sai Srinivas Dandangi</p>
        </Zoom>
      </div>
      </div>
      <ScrollToTop smooth color="aqua" style={{ backgroundColor: "#1e1e2c", borderRadius: "75px" }} />
    </>
  );
}

export default App;
