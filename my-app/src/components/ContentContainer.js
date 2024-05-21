import React, { useState } from "react";
import "../stylesheets/ContentContainer.css";

const ContentContainer = ({ children, isPicked }) => {
  return (
    <div className="main_template">
      <div className="header_template">
        <h1>
          Geo Adivi
          <strong>nya</strong>
          dor
        </h1>
      </div>
      <div className="content_template">
        {!isPicked && (
          <>
            <h3>Haz click en tu gatito favorito 😸.</h3>
          </>
        )}

        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
