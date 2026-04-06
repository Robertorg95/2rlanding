import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Modulos from "@/pages/Modulos";
import NotFound from "@/pages/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/modulos" element={<Modulos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
