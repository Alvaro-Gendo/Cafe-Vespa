import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queires";
import Swal from "sweetalert2";

const EditarProducto = () => {
  //traer el parametro de la ruta
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    //guarda en el parametro(datos) las cosas de los input del formulario
    // console.log(datos)
    //aqui enviar la peticion a la api para actualizar los datos del producto
    editarProductoAPI(id, datos).then((datos) =>{
      if(datos.status === 200){
        Swal.fire("Producto actualizado", "Good", "success")
        //redireccionar a admin
        navegacion("/administrador")
      }else{
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error")
      }
    })
  };

  useEffect(() => {
    //destro del parametro respuesta viene lo que devuelve la peticion(en esta caso obtenerProductoAPI)
    obtenerProductoAPI(id).then((respuesta) =>{
      if(respuesta.status === 200){
        //cargar los datos de la respuesta en el formulario
        setValue("nombreProducto", respuesta.dato.nombreProducto)
        setValue("precio", respuesta.dato.precio)
        setValue("imagen", respuesta.dato.imagen)
        setValue("categoria", respuesta.dato.categoria)
        console.log(respuesta)
      }else{
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error")
      }
      
    })
  },[]);

  return (
    <Container className="mt-3">
      <h1>Editar Producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nuevo Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "Complete este campo",
              minLength: {
                value: 2,
                message: "Debe ingresar minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar maximo 50 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: $150"
            {...register("precio", {
              required: "Complete este campo",
              min: {
                value: 50,
                message: "Debes ingresar un valor mayor a $50",
              },
              max: {
                value: 1000,
                message: "Debes ingresar un valor menor a $1000",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pixelart.com/pan"
            {...register("imagen", {
              required: "Completa este campo con una imagen valida",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debes ingresar una URL valida",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option>Selecione una opcion</option>
            <option value="Bebida caliente">Bebida Caliente</option>
            <option value="Bebida fria">Bebida Fria</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" className="mt-3">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarProducto;
