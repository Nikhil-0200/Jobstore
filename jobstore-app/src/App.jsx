import {
  Nav,
} from "./Components/index";



// import AllRoutes from "./Components/AllRoutes";

import "./App.css";
import "./index.css";

import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <AllRoutes/>
      </main>
    </>
  );
}

export default App;
