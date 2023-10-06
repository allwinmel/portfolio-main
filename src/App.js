import "./App.css";
import "./components/component.css";

import TechStack from "./components/techStack";
import Guider from "./components/guider";
import Deploys from "./components/deploys";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import GitHub from "./components/gitHub";

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <TechStack />
      <Guider />
      <Deploys />
      <GitHub/>
      <Footer/>
      
    </div>
  );
}

export default App;
