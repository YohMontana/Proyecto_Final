import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import {verifyUserExist} from "../../services";


const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate()

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        if (!user.email || !user.password) {
            Swal.fire({
                title: "Error",
                text: "Completa el correo y password",
                icon: "error",

            });
            return;
        } 
        localStorage.setItem("user", JSON.stringify(user));
        validateIsLogged();

        const data = await verifyUserExist();
        console.log('DATA=', data);
        const foundUser = data.find((element) => (user.email === element.email) && (user.password === element.pass) );
        console.log('FOUND USER=', foundUser);
        if (foundUser && foundUser?.email === 'admin@dulceskari.com') {
		    history("/postProduct");
            return;
        }
        
        console.log('TIENDA');
        if (foundUser) {
		    history("/tienda");
            return;
        }
     };

     const validateIsLogged = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if(user) history("/tienda");
     };

     useEffect(() => {
        validateIsLogged()
     }, [])

     
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
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        />

                        <input
                        type="password"
                        className="form-control mt-4"
                        placeholder="Ingrese su password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        />

                        <div className="d-grid">
                            <button className="btn btn-outline-primary mt-4"
                            onClick={handleLogin}
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