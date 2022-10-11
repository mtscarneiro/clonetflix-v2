import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path={"/"} element={<HomeScreen />} />
          </Routes>
        )}
      </Router>


    </div>
  );
}

export default App;
