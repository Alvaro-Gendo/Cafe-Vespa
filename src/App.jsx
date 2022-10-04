import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "./components/views/Admin";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Admin></Admin>}/>
        <Route path="*" element={<Error404></Error404>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
