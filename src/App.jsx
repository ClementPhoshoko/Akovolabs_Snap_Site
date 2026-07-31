import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="support" element={<Support />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
