import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const Hats = (props) => {
  console.log(props);
  return <h1>Hats page</h1>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </>
  );
}

export default App;
