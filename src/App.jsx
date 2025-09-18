import "./App.css";
import "./styles/variables.css";

import About from "./components/About";
import DoMore from "./components/DoMore";
import LatestNews from "./components/LatestNews";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
