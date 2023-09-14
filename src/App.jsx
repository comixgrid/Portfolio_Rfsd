import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import TechStack from "./pages/techstack/TechStack";
import axios from "axios";
import Layout from "./components/Layout/Layout";

axios.defaults.baseURL = "https://porfolio-backend-8520.onrender.com";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
