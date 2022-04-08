import React from "react";
import { Button, Card, Container, FloatingLabel, Form, ListGroup } from "react-bootstrap";

const CreateChama = () => {
  return (
    <div>
      <Container style={{ width: "60rem" }}>
        <Form className="mt-5">
          <h4>This is where you can create your Chama</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateChama;
