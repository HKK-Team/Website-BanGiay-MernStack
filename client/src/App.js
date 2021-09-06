import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import { DataProvider } from "./GlobalState";
import Pages from "./page/Pages";
function App() {
  return (
      <DataProvider>
        <Router>
          <Pages>
          </Pages>
        </Router> 
      </DataProvider>
  );
}

export default App;
