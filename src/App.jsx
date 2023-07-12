import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/header";
import Home from "./Components/home/Home";
import Qualification from "./Components/qualification/Qualification";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
