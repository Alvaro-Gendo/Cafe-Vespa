import { Button } from "react-bootstrap";

const ItemProducto = ({producto}) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Button variant="warning" className="m-1">
          Editar
        </Button>
        <Button variant="danger" className="m-1 text-black">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
