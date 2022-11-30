import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


const Registro = () => {
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
        
        
    }

    const handleLogin = () => {
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
        

    }

    const validateIsLogged = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) history("#")
        

    }

    useEffect(() => {
        validateIsLogged()
    }, [])


    return(
        <div className="container">
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Registrarse
                </span>
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
                        <h1>Registrarse</h1>
                        <input
                        type="text"
                        className="form-control mt-4"
                        placeholder="Nombre y Apellido"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        />
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
                            >Registrarse</button>
                        </div>
                        <div>
                        <a href="login" className='text-decoration-none p-2 fs-6' id="link">¿Ya tienes una cuenta? Acceder</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Registro;
