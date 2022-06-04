import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Context from "./Context/Context";
import AllRoute from "./Route/AllRoute";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Layout>
            <AllRoute />
          </Layout>
        </Router>
      </Context>
    </>
  );
}

export default App;
