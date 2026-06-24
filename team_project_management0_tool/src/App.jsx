import { useState } from "react";
import Layout from "./components/layouts/Layout";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
