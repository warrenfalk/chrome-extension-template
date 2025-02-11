// This is the content of the popup that is displayed when the extension is clicked
//
import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return <div>Hello World!</div>;
};

const container = document.querySelector("#container")!;
const root = createRoot(container);
root.render(<App />);
