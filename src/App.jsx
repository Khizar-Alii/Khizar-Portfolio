import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/header";
import Home from "./Components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
