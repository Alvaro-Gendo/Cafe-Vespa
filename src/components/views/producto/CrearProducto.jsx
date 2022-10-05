import { Button, Container, Form  } from "react-bootstrap";

const CrearProducto = () => {
    return (
        <Container className="mt-3">
            <h1>Nuevo Producto</h1>
            <hr/>
            <Form>
                <Form.Group>
                    <Form.Label>Nuevo Producto</Form.Label>
                    <Form.Control required type="text" minLength={3} maxLength={20} placeholder="Ej: Cafe"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control required type="text" minLength={3} maxLength={20} placeholder="Ej: $150"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control required type="text" minLength={3} maxLength={100} placeholder="Ej: https://www.pixelart.com/pan"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select required>
                        <option>Selecione una opcion</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" className="mt-3">Guardar</Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;