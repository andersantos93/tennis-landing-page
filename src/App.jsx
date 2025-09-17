import "./App.css";
import "./styles/variables.css";

import About from "./components/About";
import DoMore from "./components/DoMore";
import LatestNews from "./components/LatestNews";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <About />
      <DoMore />
      <LatestNews />
      <NewsLetter />
      <Contact />
    </>
  );
}

export default App;
