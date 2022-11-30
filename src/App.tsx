import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import { ProvideAuth } from "./hooks/useAuth";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;
