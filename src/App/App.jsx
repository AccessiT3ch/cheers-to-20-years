import "./App.scss";
import Temp from "../components/Temp/Temp";
import { Button, Col, Container, Row } from "react-bootstrap";
import { reset, useCount } from "../store/count";
import store from "../store/store";

function App() {
  const count = useCount();

  return (
    <Container>
      <Row>
        <Col>
          <Temp />
          <p>Count is {count}</p>
          <Button
            variant="secondary"
            onClick={() => {
              store.dispatch(reset());
            }}
          >
            Reset Count
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
