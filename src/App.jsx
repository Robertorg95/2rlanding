import HeaderHero from "./components/HeaderHero.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import Differentiators from "./components/Differentiators.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import Results from "./components/Results.jsx";
import Industries from "./components/Industries.jsx";
import WhatNotDo from "./components/WhatNotDo.jsx";
import Contact from "./components/Contact.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const App = () => {
  return (
    <div className="app">
      <HeaderHero />
      <main>
        <WhatWeDo />
        <Differentiators />
        <HowWeWork />
        <Results />
        <Industries />
        <WhatNotDo />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
