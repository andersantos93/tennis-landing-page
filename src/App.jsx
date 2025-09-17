import "./App.css";
import "./styles/variables.css";

import About from "./components/About";
import DoMore from "./components/DoMore";
import LatestNews from "./components/LatestNews";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <About />
      <DoMore />
      <LatestNews />
      <NewsLetter />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
