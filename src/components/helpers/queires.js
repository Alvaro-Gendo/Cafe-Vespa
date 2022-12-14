// archivo que nos sirve para hacer las consultas a la api (json-server)

// const URL = "http://localhost:3004/productos"; //json-server
const URL = process.env.REACT_APP_API_CAFE;
console.log(URL)
const URL2 = "http://localhost:3004/usuario";

// tipo de peticiones
//peticion GET que trae todos los productos o un producto
//peticion POST, crear un producto, login
//peticion DELETE, para borrar
//peticion PUT, modificar un producto

export const consultaAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    //console.log(listaProductos)
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE"
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id);

    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status
    }
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(URL + "/" + id,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosActualizados)
    });
    return respuesta;

  } catch (error) {
    console.log(error);
  }
};

export const crearAdminAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URL2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};