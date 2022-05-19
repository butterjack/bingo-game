import Bingo from "./components/Bingo";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bingo" element={
          <RequireAuth redirectTo="/">
            <Bingo />
          </RequireAuth>
          } 
        />
        <Route path="/" element={<Login />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
