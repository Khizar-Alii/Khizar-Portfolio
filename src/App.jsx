import "./App.css";
import Header from "./Components/header/header";
import Home from "./Components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
