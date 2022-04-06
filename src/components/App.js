import React from "react";
import Header from "./header";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Note />
      <Footer />
    </div>
  );
};

export default App;
