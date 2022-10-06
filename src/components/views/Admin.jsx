import { Button, Container, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";

const Admin = () => {
    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between">
            <h1>Productos disponibles</h1>
             <Button>Agregar</Button>   
            </div>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <ItemProducto></ItemProducto>
                </tbody>
            </Table>
        </Container>
    );
};

export default Admin;