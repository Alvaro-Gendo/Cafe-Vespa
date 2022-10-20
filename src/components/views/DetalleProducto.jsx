import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerProductoAPI } from "../helpers/queires";

const DetalleProducto = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      } else {
        Swal.fire("Ocurrio un error", "Vuelve a intentar", "error");
      }
    });
  }, []);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={6} lg={5}>
              <Card.Img
                src={producto.imagen}
                alt={producto.nombreProducto}
                className="img-fluid w-75"
              />
            </Col>
            <Col sm={12} md={6} lg={7}>
              <Card.Title className="display-6 mt-2">{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text className="display-6 mt-2">Precio ${producto.precio}</Card.Text>
              <Badge bg="success">{producto.categoria}</Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
