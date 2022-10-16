import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      categoria: "",
    },
  });

  const onSubmit = (datos) => {};

  useEffect(() => {});
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
            <option value="Bebida Caliente">Bebida Caliente</option>
            <option value="Bebida Fria">Bebida Fria</option>
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
