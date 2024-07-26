import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Glassmorphism from "./pages/Glassmorphism";
import FlexBoxGuide from "./pages/flex-box-guide";
import GlitchTextEffect from "./pages/glitch-text";
import BoxShadowTool from "./pages/box-shadow";
import CursorCSSGuide from "./pages/cursor-guide";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/css-glassmorphism" element={<Glassmorphism />} />
        <Route path="/css-flexbox-guide" element={<FlexBoxGuide />} />
        <Route path="/css-glitch-text-effect" element={<GlitchTextEffect />} />
        <Route path="/css-box-shadow" element={<BoxShadowTool />} />
        <Route path="/css-cursor-guide" element={<CursorCSSGuide />} />
      </Route>
    </Routes>
  );
};

export default App;
