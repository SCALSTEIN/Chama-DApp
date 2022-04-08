import React from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";

const AvailableChamas = () => {
  const selectItem = () => {
console.log("This will be changed");
  }
  return (
    <div>
      <Container className="mt-5" style={{ width: "60rem" }}>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            action
            onClick={selectItem()}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default AvailableChamas;
