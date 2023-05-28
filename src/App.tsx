import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Points from "pages/points/Points";
import Back from "maincomponents/back/Back";
import Welcome from "pages/welcome/Welcome";
import NavBar from "maincomponents/navbar/Navbar";
import MultiplicationRouter from "pages/multiplication/MultiplicationRouter";

import { UserContext } from "context/userContext";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <Router>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/multiplication/*" element={<MultiplicationRouter />} />
          <Route path="/points" element={<Points />} />
        </Routes>
        <Back />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
