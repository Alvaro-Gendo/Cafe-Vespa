import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { consultaAPI } from "../helpers/queires";
import ItemProducto from "./producto/ItemProducto";
import {Link} from "react-router-dom"


const Admin = () => {
    const [producto, setProducto] = useState([])

    useEffect(()=>{
        //opcion 1
        consultaAPI().then((respuesta)=>{
            console.log(respuesta)
            setProducto(respuesta)
        }) 

        //opcion 2
        // const consultaPrueba = async() =>{
        //     const prueba = await consultaAPI()
        //     console.log(prueba)
        // }
        // consultaPrueba();


    },[])

    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between">
            <h1>Productos disponibles</h1>
             <Link className="btn btn-outline-primary" to="/administrar/crear">Agregar</Link>   
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
                    {
                        producto.map((producto)=><ItemProducto key={producto._id} producto={producto} setProducto={setProducto}></ItemProducto>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Admin;