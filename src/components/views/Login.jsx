import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      clave: "",
    },
  });

  const onSubmit = (datos) => {};

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header as="h4">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                {...register("email", {
                  required: "Complete este campo",
                  minLength: {
                    value: 4,
                    message: "Ingresar mínimo 4 dígitos",
                  },
                  maxLength: {
                    value: 30,
                    message: "Ingresar máximo 30 dígitos",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Email invalido",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.login?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar Contraseña"
                {...register("clave", {
                  required: "Complete este campo",
                  minLength: {
                    value: 8,
                    message: "Contraseña incorrecta",
                  },
                  maxLength: {
                    value: 30,
                    message: "Contraseña incorrecta",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "Contraseña invalida",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.clave?.message}
              </Form.Text>
            </Form.Group>
            <Button className="mt-3" type="submit">
              Ingresar
            </Button>
          </Form>
          <Link to={"/registro"} className="btn btn-outline-primary mt-4">
            Crear cuenta
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
