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
import GridGuide from "./pages/css-grid-guide";
import GradientGenerator from "./pages/css-gradient-generator";
import BorderRadiusStudio from "./pages/css-border-radius";
import EasingVisualizer from "./pages/css-easing-visualizer";
import TypeScale from "./pages/css-type-scale";
import ClampCalculator from "./pages/css-clamp-calculator";
import FilterLab from "./pages/css-filter-lab";
import TransformLab from "./pages/css-transform-lab";
import Selectors from "./pages/css-selectors";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/css-glassmorphism" element={<Glassmorphism />} />
        <Route path="/css-flexbox-guide" element={<FlexBoxGuide />} />
        <Route path="/css-grid-guide" element={<GridGuide />} />
        <Route path="/css-glitch-text-effect" element={<GlitchTextEffect />} />
        <Route path="/css-box-shadow" element={<BoxShadowTool />} />
        <Route path="/css-cursor-guide" element={<CursorCSSGuide />} />
        <Route
          path="/color-shades-generator"
          element={<ColorShadesGenerator />}
        />
        <Route
          path="/css-gradient-generator"
          element={<GradientGenerator />}
        />
        <Route path="/css-border-radius" element={<BorderRadiusStudio />} />
        <Route
          path="/css-easing-visualizer"
          element={<EasingVisualizer />}
        />
        <Route path="/css-type-scale" element={<TypeScale />} />
        <Route path="/css-clamp-calculator" element={<ClampCalculator />} />
        <Route path="/css-filter-lab" element={<FilterLab />} />
        <Route path="/css-transform-lab" element={<TransformLab />} />
        <Route path="/css-selectors" element={<Selectors />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
