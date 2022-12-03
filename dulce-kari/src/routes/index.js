import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView,
  AboutView,
  StoreView,
   Product,
   Preguntas, 
    TerminosCondiciones, 
    LibroReclamaciones, 
    LoginView,
    RegistroView,
    ContactanosView,
  AddNewProduct,
  BasketView,} from "../pages";
import { MainLayout } from "../layouts";
import { Bocaditos } from "../components/Store/Bocaditos";
import { CupCake } from "../components/Store/Cupcake";
import { Tortas } from "../components/Store/Tortas";



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
          <Route path="/postproduct" element={<AddNewProduct/>} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/preguntas-frecuentes" element={<Preguntas/>} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones/>} />
          <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones/>} />
          <Route path="/login" element={<LoginView/>} /> 
          <Route path="/registro" element={<RegistroView/>} />
          <Route path="/Contactanos" element={<ContactanosView/>} />
          <Route path="/carrito" element={<BasketView/>} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
};
export default Router;