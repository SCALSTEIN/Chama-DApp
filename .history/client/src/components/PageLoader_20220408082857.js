import React from 'react'
import { Button, Card, Placeholder } from 'react-bootstrap';

function PageLoader() {
  return (
    <div>
      <div className="mt-5">
        <Container>
          This is where you can create your Chama
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Container>
      </div>
    </div>
  );
}

export default PageLoader