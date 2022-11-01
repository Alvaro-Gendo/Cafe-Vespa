import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultaAPI } from "../../helpers/queires";

const CardProducto = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultaAPI().then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);

  return (
    <>
      {producto.map((producto) => (
        <Col sm={12} md={4} lg={3} className="my-1">
          <Card key={producto._id}>
            <Card.Body>
              <Card.Img
                src={producto.imagen}
                alt={producto.nombreProducto}
              />
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <Card.Text>Precio $ {producto.precio}</Card.Text>
              <hr />
              <Link className="btn btn-outline-danger" to={`/detalle-producto/${producto._id}`}>Ver más</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardProducto;
