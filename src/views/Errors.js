import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Oops! This page does not exists</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
