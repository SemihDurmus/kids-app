import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Points from "pages/points/Points";
import Welcome from "pages/welcome/Welcome";
import NavBar from "maincomponents/navbar/Navbar";
import MultiplicationRouter from "pages/multiplication/MultiplicationRouter";
import Back from "maincomponents/back/Back";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/multiplication/*" element={<MultiplicationRouter />} />
        <Route path="/points" element={<Points />} />
      </Routes>
      <Back />
    </Router>
  );
}

export default App;
