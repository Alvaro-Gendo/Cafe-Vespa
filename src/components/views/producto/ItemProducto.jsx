import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultaAPI } from "../../helpers/queires";

const ItemProducto = ({producto, setProducto}) => {

  const borrarProducto = ()=> {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir este paso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        //realizar la consulta a la api
        borrarProductoAPI(producto.id).then((respuesta)=>{
          if(respuesta.status === 200){
            // actualizar el state producto o la tabal
            consultaAPI().then((respuesta) =>{
              setProducto(respuesta)
            })  
            Swal.fire(
              'Borrado!',
              'El producto fue borrado.',
              'success'
            )
            
          }else{
            Swal.fire(
              "Se produjo un error",
              "Prube mas tarde",
              "error"
            )
          }
        })
      }
    })
    
  }

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
        <Button variant="danger" className="m-1 text-black" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
