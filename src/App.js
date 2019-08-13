import React from "react";
import { Container, Alert } from "reactstrap";
import Navbar from "./components/Navbar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Alert color="primary">Test header</Alert>
      </Container>
    </div>
  );
}

export default App;
