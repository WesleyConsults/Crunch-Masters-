import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Community from "./pages/Community";
import Admin from "./pages/Admin";
import Manifesto from "./pages/Manifesto";
import Terms from "./pages/Terms";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="admin" element={<Admin />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="terms" element={<Terms />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
