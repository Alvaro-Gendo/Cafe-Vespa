import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreApellido: "",
      email: "",
      clave: "",
      clave2: "",
    },
  });

  const onSubmit = (datos) => {};

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h4">Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre y apellido"
                {...register("nombreApellido", {
                  required: "Competa este campo",
                  minLength: {
                    value: 10,
                    message: "Ingresa mínimo 10 dígitos",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingresa máximo 50 dígitos",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreApellido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar Email"
                {...register("email", {
                  required: "Completa este campo",
                  minLength: {
                    value: 10,
                    message: "Ingresa mínimo 10 dígitos",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingresa máximo 50 dígitos",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Email invalido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                {...register("clave", {
                  required: "Completa este campo",
                  minLength: {
                    value: 10,
                    message: "Contraseña no valida",
                  },
                  maxLength: {
                    value: 50,
                    message: "Contraseña no valida",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "Contraseña invalida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.clave?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                {...register("clave2", {
                  required: "Completa este campo",
                  minLength: {
                    value: 10,
                    message: "Contraseña no valida",
                  },
                  maxLength: {
                    value: 50,
                    message: "Contraseña no valida",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "La contraseña no coincide",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.clave2?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="mt-3">
              Crear Usuario
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
