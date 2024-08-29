import React, { useState } from "react";

const Content = () => {
  const [activePage, setActivePage] = useState("One");

  const renderContent = () => {
    switch (activePage) {
      case "One":
        return <div>This is content for One.</div>;
      case "Two":
        return <div>This is content for Two.</div>;
      case "Three":
        return <div>This is content for Three.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <ul className="content-nav">
        <li onClick={() => setActivePage("One")}>One</li>
        <li onClick={() => setActivePage("Two")}>Two</li>
        <li onClick={() => setActivePage("Three")}>Three</li>
      </ul>
      <div className="content-display">{renderContent()}</div>
    </div>
  );
};

export default Content;
