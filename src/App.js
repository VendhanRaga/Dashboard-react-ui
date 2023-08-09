
import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar></Navbar>
          <div className="container-fluid">
            <Dashboard></Dashboard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;