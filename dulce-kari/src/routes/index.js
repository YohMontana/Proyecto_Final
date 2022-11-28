// Paso1: Importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pas2: Importar nuestras vistas
import { HomeView,
  AboutView,
  StoreView,
  ProductView,
   Product,
   Preguntas, 
    TerminosCondiciones, 
    LibroReclamaciones, 
    LoginView} from "../pages";
import { MainLayout } from "../layouts";
import { Bocaditos } from "../components/Store/Bocaditos";
import { CupCake } from "../components/Store/Cupcake";
import { Tortas } from "../components/Store/Tortas";


// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView/>} />
          <Route path="/tienda" element={<StoreView/>}>
            <Route path="bocaditos" element={<Bocaditos/>}/>
            <Route path="cupcake" element={<CupCake/>}/>
            <Route path="tortas" element={<Tortas/>}/>
          </Route>
          <Route path="/postproduct" element={<ProductView/>} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/preguntas-frecuentes" element={<Preguntas/>} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones/>} />
          <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones/>} />
          <Route path="/login" element={<LoginView/>} /> 
        
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
};
export default Router;