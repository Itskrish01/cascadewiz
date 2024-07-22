import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Glassmorphism from "./pages/Glassmorphism";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/css-glassmorphism" element={<Glassmorphism />} />
      </Route>
    </Routes>
  );
};

export default App;
