import { useLayoutEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Login from "./components/Authentication/Login";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Intro from "./components/Hero/Intro";
//import VideoDisplay from "./components/VideoDisplay/VideoDisplay";
import Signup from "./components/Authentication/Signup";
import Employee from "./Screen/Employee";
import Admin from "./Screen/Admin";

import axios from "axios";
import { AnimatePresence } from "framer-motion";
function App() {
  const [user, setUser] = useState({ name: "", email: "", token: "" });
  const navigate = useNavigate("");
  const location = useLocation();
  const handleUser = (name, email, token) => {
    setUser({
      name: name,
      email: email,
      token: token,
    });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    navigate("/");
  };
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/api/logout`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        //console.log(response);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
      })
      .then(() => handleUser("", "", ""))
      .catch((err) => console.error(err));
  };
  useLayoutEffect(() => {
    let token = sessionStorage.getItem("token");
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");

    if (token) {
      handleUser(name, email, token);
    }
  }, []);
  return (
    <div className="App">
      <Hero key={"Hero"} user={user} handleLogout={handleLogout} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            key={"Home"}
            path="/"
            element={
              <>
                <Intro user={user} handleUser={handleUser} />
                <Employee user={user} handleUser={handleUser} />
              </>
            }
          />
          <Route
            key={"Login"}
            path="/login"
            element={<Login user={user} handleUser={handleUser} />}
          />
          <Route
            key={"Signup"}
            path="/Signup"
            element={<Signup user={user} handleUser={handleUser} />}
          />
      <Route path="/Admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>

      <Footer key={"footer"} />
    </div>
  );
}

export default App;
