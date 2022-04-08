import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
const Home = (props) => {
  //console.log(loansReq);
  return (
    <div className="flex-justify-center">
      {props.loansReq.length > 0 ? (
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {props.loansReq.map((loanReq, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Body color="secondary">
                    <Card.Title>{loanReq.requestId}</Card.Title>
                    <Card.Text>{loanReq.desc}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="d-grid">
                      <Button
                        onClick={() => {
                          console.log("Approved!");
                        }}
                        variant="primary"
                        size="lg"
                      >
                        Approve Request
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <main style={{ padding: "1rem 0" }}>
          <Container>
            <Card className="w-19 text-center">
              <Card.Header>LOANS</Card.Header>
              <Card.Body>
                <Card.Title>Did you know you can Invest with US</Card.Title>
                <Card.Text>
                  description of how.............. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quibusdam repudiandae perferendis sapiente, vitae odit! Excepturi sint fuga voluptas minus consectetur eius, ex a sit modi architecto consequuntur, laboriosam cupiditate.
                </Card.Text>
                <Button variant="primary">Invest Now</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Container>
        </main>
      )}
    </div>
  );
};
export default Home;
