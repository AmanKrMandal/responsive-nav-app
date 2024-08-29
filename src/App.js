import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  const [activePage, setActivePage] = useState("one");

  const renderContent = () => {
    switch (activePage) {
      case "one":
        return <div>Content for Page One</div>;
      case "two":
        return <div>Content for Page Two</div>;
      case "three":
        return <div>Content for Page Three</div>;
      default:
        return <div>Content for Page One</div>;
    }
  };

  return (
    <div className="app">
      <Header onNavClick={setActivePage} />
      <main className="content">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
