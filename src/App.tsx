import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Glassmorphism from "./pages/Glassmorphism";
import FlexBoxGuide from "./pages/flex-box-guide";
import GlitchTextEffect from "./pages/glitch-text";
import BoxShadowTool from "./pages/box-shadow";
import CursorCSSGuide from "./pages/cursor-guide";
import NotFound from "./pages/404";
import ColorShadesGenerator from "./pages/color-shades-generator";

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
        <Route
          path="/color-shades-generator"
          element={<ColorShadesGenerator />}
        />
        {/* create an route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
