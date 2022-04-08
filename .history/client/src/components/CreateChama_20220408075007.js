import React from "react";
import { Button, Card, Container, FloatingLabel, Form, ListGroup } from "react-bootstrap";

const CreateChama = () => {
  return (
    <div>
      <Container style={{ width: "60rem" }}>
        <Form className="mt-5">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateChama;
