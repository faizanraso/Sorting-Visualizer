import React from "react";
import Header from "./components/Header";
import { Visualization } from "./components/Visualization";

function App() {
  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2">
      <Header />
      <Visualization />
    </div>
  );
}

export default App;
