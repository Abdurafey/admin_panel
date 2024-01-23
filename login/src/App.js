import React from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from './Components/Login';
function App() {
  return (
    <div className="App">


      <Routes>
        <Route
          path="/"
          element={<Login />}
          />
      </Routes>
    </div>
  );
}

export default App;