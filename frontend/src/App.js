import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllRoute from "./Route/AllRoute";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <AllRoute />
        </Layout>
      </Router>
    </>
  );
}

export default App;
