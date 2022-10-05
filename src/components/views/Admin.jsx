import { Button, Container, Table } from "react-bootstrap";

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
                    <td>
                        <Button variant="warning" className="m-1">Editar</Button>
                        <Button variant="danger" className="m-1 text-black">Borrar</Button>
                    </td>
                </tbody>
            </Table>
        </Container>
    );
};

export default Admin;