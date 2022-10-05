import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
    return (
        <Container className="mt-4">
            <h1 className="text-center">Bienvenidos</h1>
            <hr />
            <Row>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
            </Row>
        </Container>
    );
};

export default Inicio;