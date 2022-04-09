import React, { useRef } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
} from "react-bootstrap";

const CreateChama = (props) => {
  const nameInputRef = useRef('');
  const regFeeInputRef = useRef('');
  const premiumInputRef = useRef('');
  const targetInputRef = useRef('');
  const reemitancePeriodInputRef = useRef('');
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const regFee = +regFeeInputRef.current.value;
    const prem = +premiumInputRef.current.value;
    const tar = +targetInputRef.current.value;
    const reemit = reemitancePeriodInputRef.current.value;

    props.onSubmit.bind(this, name, regFee, prem, tar, reemit);
  };
  return (
    <div>
      <Container className="mt-5" style={{ width: "60rem" }}>
        <Form onSubmit={formSubmitHandler}>
          <h4>Create a Chama </h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Chama Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Women For Women"
                ref={nameInputRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel
              controlId="floatingInput"
              label="Registration Fee"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="0.333Eth"
                rer={regFeeInputRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel
              controlId="floatingInput"
              label="Premiums"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="0.333Eth"
                ref={premiumInputRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel
              controlId="floatingInput"
              label="Target"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="0.333Eth"
                ref={targetInputRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Reemittance Period"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Women For Women"
                ref={reemitancePeriodInputRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateChama;
