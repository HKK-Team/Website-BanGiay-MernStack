import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataProvider } from "./GlobalState";
import Pages from "./page/Pages";
function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DataProvider>
        <Router>
          <Pages>{/* VD : localhost:3000/header */}</Pages>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
