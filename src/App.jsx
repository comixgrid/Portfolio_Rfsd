import axios from "axios";
import Layout from "./components/Layout/Layout";

axios.defaults.baseURL = "https://porfolio-backend-8520.onrender.com";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
