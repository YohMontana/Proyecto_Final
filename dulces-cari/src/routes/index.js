import{ BrowserRouter, Routes, Route} from "react-router-dom";


import { AboutUs } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/Nosotros" element={<AboutUs/>}/>
           
        </Routes>
        </BrowserRouter>
    );
};
export default Router;