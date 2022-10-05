import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={6} lg={5} >
              <Card.Img
                src="https://es.cravingsjournal.com/wp-content/uploads/2018/10/brownies-de-chocolate-5-500x375.jpg"
                alt="Brownie"
                className="img-fluid"
              />
            </Col>
            <Col sm={12} md={6} lg={7}>
              <Card.Title>Brownie</Card.Title>
              <hr />
              <Badge bg="success">Dulce</Badge>
              <Card.Text>Precio $ 400</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
