import React from "react";
import ReactDOM from "react-dom/client";

/**HOT Module Replacement
 * File Watching Algorithm (written in c++)
 *Bundling
 minification
 cleaning up
 *Dev and production build
 superfast build algorithm
 Image optimization
 Caching while development
 Compression
 Compatible with older version of browser
 https on dev
 port Number is managed
 we have to put parcel-cache in gitignore
 consistent algorithm
 Zero Configuration
 */

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
    key: "h1",
  },
  "Hello world"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading",
    key: "h2",
  },
  "Hello India"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
