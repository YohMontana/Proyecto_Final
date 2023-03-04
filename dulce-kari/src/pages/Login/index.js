import { useState, useContext } from "react"
import { signIn } from "../../services";
import { useNavigate, Navigate, Link } from "react-router-dom"
import { post } from "../../services";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2"
import {verifyUserExist} from "../../services";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
        const { authLogin, isAuth } = useContext(AuthContext);
      
        const [values, setValues] = useState({
          correo: "",
          password: "",
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setValues({
            ...values,
            [name]: value,
          });
        };
      
        if (isAuth()) return <Navigate to="/" />;
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const data = await post("login", values);
      
          if (data.ok) {
            authLogin(data.data); // Le envio al usuario authenticado al AuthContext.
          } else {
            Swal.fire({
              icon: "error",
              text: data.message,
            });
          }
        };
     
    return(
        <div className="container">
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Iniciar Sesión
                </span>
            </div>
            <div className="text-center pt-2">
                <h1>Mi cuenta</h1>
            </div>
            <div className="d-flex justify-content-center alignt-items-center"
                 style={{
                    height: "100vh"
                 }}>
                <div className="card-text-center p-3"
                style={{
                    width: 400,
                }}>
                    <div className="my-3 text-center">
                        <h1>Iniciar Sesión</h1>
                        <input
                        type="text"
                        className="form-control mt-4"
                        placeholder="Ingrese su email"
                        name="correo"
                        value={values.correo}
                        onChange={handleInputChange}
                        />

                        <input
                        type="password"
                        className="form-control mt-4"
                        placeholder="Ingrese su password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        />

                        <div className="d-grid">
                            <button className="btn btn-outline-primary mt-4"
                            onClick={handleSubmit}
                            >Ingresar</button>
                           
                        </div>
                        <div>
                        <a href="registro" className='text-decoration-none p-2 fs-6' id="link">¿No tienes una cuenta? Registrarse</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;