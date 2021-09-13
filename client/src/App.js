import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Pages from "./page/Pages";
function App() {
  return (
      <DataProvider>
        <Router>
          <Pages>{/* VD : localhost:3000/header */}</Pages>
        </Router>
      </DataProvider>
  );
}

export default App;
