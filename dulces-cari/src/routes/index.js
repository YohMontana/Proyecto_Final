// Paso1: Importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import { HomeView } from "../pages";
import { MainLayout } from "../layouts";
import { AboutUs } from "../pages";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeView />} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;