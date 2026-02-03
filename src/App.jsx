import HeaderHero from "./components/HeaderHero.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import Industries from "./components/Industries.jsx";
import Differentiators from "./components/Differentiators.jsx";
import Contact from "./components/Contact.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const App = () => {
  return (
    <div className="app">
      <HeaderHero />
      <main>
        <WhatWeDo />
        <HowWeWork />
        <Industries />
        <Differentiators />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
