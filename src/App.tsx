import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Points from "pages/points/Points";
import Welcome from "pages/welcome/Welcome";
import NavBar from "maincomponents/navbar/Navbar";
import MultiplicationRouter from "pages/multiplication/MultiplicationRouter";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/multiplication/*" element={<MultiplicationRouter />} />
        <Route path="/points" element={<Points />} />
      </Routes>
    </Router>
  );
}

export default App;
