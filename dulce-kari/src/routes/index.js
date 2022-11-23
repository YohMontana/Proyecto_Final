// Paso1: Importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import { HomeView, AboutView, ProductView } from "../pages";
import { MainLayout } from "../layouts";
import Products from "../pages/products";


// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView/>} />
          <Route path="/postproduct" element={<ProductView/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;