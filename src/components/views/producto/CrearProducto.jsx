import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearProductoAPI } from "../../helpers/queires";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      categoria: "",
    },
  });
  //inicializar a useNavigate
  const navegacion = useNavigate()

  const onSubmit = (datos) => {
    //los datos estan validados
    console.log(datos);
    // enviar los datos a la api
    crearProductoAPI(datos).then((respuesta)=>{
      if(respuesta.status === 201){
        //el producto se creo
        Swal.fire("Producto creado", "El producto fue creado correcta mente", "success")
        reset();
        //redireccionar 
        navegacion("/administrador")
      }else{
        //mostrar msj de error al usuario
        Swal.fire("Ocurrio un error", "Vuelve a intentar", "error")
      }
    })
  };

  return (
    <Container className="mt-3">
      <h1>Nuevo Producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nuevo Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            minLength={2}
            maxLength={50}
            {...register("nombreProducto", {
              required: "Completa este campo",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 20 caracteres",
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
            minLength={2}
            maxLength={3}
            placeholder="Ej: $150"
            {...register("precio", {
              required: "Completa este campo",
              min: {
                value: 20,
                message: "El precio debe ser mayor a 20",
              },
              max: {
                value: 500,
                message: "El precio debe ser menos de 500",
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
              required: "Completa este campo",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una url valida",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Select {...register("categoria",{
            required:"Debe seleccionar una categoria"
          })}>
            <option value="">Selecione una opcion</option>
            <option value="Bebida Caliente">Bebida Caliente</option>
            <option value="Bebida fria">Bebida fria</option>
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

export default CrearProducto;
