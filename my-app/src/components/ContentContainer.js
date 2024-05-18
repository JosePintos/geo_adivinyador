import React from "react";
import "../stylesheets/ContentContainer.css";

const ContentContainer = ({ children }) => {
  return (
    <div className="main_template">
      <div className="header_template">
        <h1>
          Geo Adivi
          <strong>nya</strong>
          dor
        </h1>
        <h3>Haz click en tu gatito favorito 😸.</h3>
      </div>
      <div className="content_template">{children}</div>
    </div>
  );
};

export default ContentContainer;
