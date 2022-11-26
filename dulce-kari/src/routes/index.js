import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, AboutView, ProductView, Product  } from "../pages";
import { MainLayout } from "../layouts";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/postproduct" element={<ProductView/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;