import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/common/Menu";
import Admin from "./components/views/Admin";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import "./style.css"
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Admin></Admin>}/>
        <Route exact path="/administrar/crear" element={<CrearProducto></CrearProducto>}/>
        <Route exact path="/administrar/editar/:id" element={<EditarProducto></EditarProducto>}/>
        <Route exact path="/detalle-producto" element={<DetalleProducto/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/registro" element={<Registro/>} />
        <Route path="*" element={<Error404></Error404>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
