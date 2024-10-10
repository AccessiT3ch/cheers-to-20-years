import "./App.scss";
import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";

import store from "../store/store";

function App() {

  return (
    <Container>
      <Row className="section">
        <Col xs={12}>
          <header>
            <h1>Cheers to 20 Years!</h1>
          </header>
        </Col>
      </Row>
      <Row className="section">
        <Col xs={12} lg={{ span: 4, offset: 4 }}>
          <p>
            Sheela and Conor invite you to join us in Sacramento as we honor two
            decades of love, learning, and adventure!
          </p>
          <p>
            From high school sweethearts to adventurous partners, Conor and
            Sheela invite you to a joyful celebration filled with music,
            delicious food, and cherished memories.
          </p>
          <p>
            Come share in the fun and create new moments together as we toast to
            our beautiful journey!
          </p>
        </Col>
      </Row>
      <Row className="section">
        <Col xs={12} md={{ span: 4, offset: 2 }}>
          <h2 className="details-header">When</h2>
          <p className="details-text">October 16, 2021</p>

          <h2 className="details-header">Where</h2>
          <p className="details-text">Sacramento</p>
          <p>American River Parkway</p>

          <h2 className="details-header">What</h2>
          <p className="details-text">Let's Party and Play!</p>
          <p>
            A Festive Gathering to Celebrate 20 Years of Togetherness with Food,
            Fun, and Friends!
          </p>
          <Button
            size="lg"
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            variant="primary"
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjVqMzZkYjE2aGk2NmI5azZjcTY2YjlrNnBpamFiOXBjZ3A2MmI5amNjcGoyZHBsNzVpajRlOWxjOCBja2VsbHlkZXNpZ24ubmV0QG0&tmsrc=ckellydesign.net%40gmail.com"
            target="_blank"
          >
            Save the Date!!
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <img
            src="assets/splash.jpg"
            alt="Sheela and Conor at the beach"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="section">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h2>RSVP</h2>
          <p>Let us know you're coming!</p>

          <Form>
            {/* party name*, email*, number of adults, number of children, dietary restrictions */}
            <Form.Group controlId="partyName">
              <Form.Label>Party Name</Form.Label>
              <Form.Control type="text" placeholder="Who dis?" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="rsvp@right.now" />
            </Form.Group>

            <Form.Group controlId="numAdults">
              <Form.Label>Number of Adults</Form.Label>
              <Form.Control type="number" placeholder="Adults" />
            </Form.Group>

            <Form.Group controlId="numChildren">
              <Form.Label>Number of Children</Form.Label>
              <Form.Control
                type="number"
                placeholder="Children"
              />
            </Form.Group>

            <Form.Group controlId="dietaryRestrictions">
              <Form.Label>Dietary Restrictions</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Soy, Gluten, Dairy, Nightshades, etc." />
            </Form.Group>
            <div className="button-row">
              <Button variant="secondary" type="submit">
                We're In!
              </Button>
              <Button variant="danger">
                Can't Make It :(
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Agenda section */}
      <Row className="section">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h2>Agenda</h2>
          <p>More details to come!</p>
        </Col>
      </Row>

      {/* FAQs Section */}
      <Row className="section">
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <h2>FAQs</h2>
          <Accordion>
            {/* accordion item for the question: what is the dress code? */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>What is the dress code?</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  It's gonna be August in Sacramento, so... HOT! Dress in the
                  way you are most comfortable!
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Our Story Section */}
      <Row className="section">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h2>Our Story</h2>
          <p>More details to come!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
