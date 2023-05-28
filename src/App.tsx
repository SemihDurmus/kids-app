import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Profile from "pages/profile/Profile";
import Back from "maincomponents/back/Back";
import Welcome from "pages/welcome/Welcome";
import NavBar from "maincomponents/navbar/Navbar";
import MultiplicationRouter from "pages/multiplication/MultiplicationRouter";

import { UserContext } from "context/userContext";

function App() {
  const [currentUser, setCurrentUser] = useState({ id: "", userName: "" });
  return (
    <Router>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/multiplication/*" element={<MultiplicationRouter />} />
          <Route path="/:id/profile" element={<Profile />} />
        </Routes>
        <Back />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
