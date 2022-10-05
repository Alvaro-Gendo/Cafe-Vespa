import { Button, Card, Col } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Col sm={12} md={4} lg={3} className="my-1">
      <Card>
        <Card.Body>
        <Card.Img src="https://es.cravingsjournal.com/wp-content/uploads/2018/10/brownies-de-chocolate-5-500x375.jpg" alt="Brownie"/>
        <Card.Title>Bownie</Card.Title>
        <Card.Text>Precio $ 400</Card.Text>
        <hr/>
        <Button variant="danger">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
