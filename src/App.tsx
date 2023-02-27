import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Visualization } from "./components/Visualization";

function App() {
  return (
    <div className="flex mx-auto flex-col items-center py-2 w-11/12 min-h-screen">
      <Header />
      <Visualization />
      {/* <Description/> */}
      <Footer />
    </div>
  );
}

export default App;
