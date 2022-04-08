import React, { useState } from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";

const AvailableChamas = () => {
  // Functionality if the list item is selected
  const selectItem = () => {
    console.log("This will be changed");
  };

  // The number of people in a group
  const [membersCount, setMembersCount] = useState(0);
  const [full, setFull] = useState("");

  const isFull = () => {
    if (membersCount === 10) {
      setFull("Full")
    }

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
            {isFull ? (
              <Badge bg="primary" pill>
                full
              </Badge>
            ) : 
              <Badge bg="primary" pill>
                full
              </Badge>
            }
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
