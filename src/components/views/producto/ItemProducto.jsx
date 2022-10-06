import { Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>cafe</td>
      <td>$300</td>
      <td>url</td>
      <td>dulce</td>
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
