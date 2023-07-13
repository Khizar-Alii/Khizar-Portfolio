import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Header from "./Components/header/header";
import Home from "./Components/home/Home";
import Qualification from "./Components/qualification/Qualification";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";
import Testimonials from "./Components/testimonials/Testimonials";

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
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
