import { useState } from "react"


const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        
    }

    const handleLogin = () => {
        console.log(user);
    }


    return(
        <div className="container">
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Iniciar Sesión o Registrarse
                </span>
            </div>
            <div className="text-center pt-2">
                <h1>Mi cuenta</h1>
            </div>
            <div className=" d-flex justify-content-center align-center justify-content-evenly">
            <div style={{width: 330}}>
                <form>
                    <div>
                        <p>INICIAR SESIÓN</p>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="" onChange={handleInputChange} name="email" value={user.email}/>
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="" name="password" value={user.password} onChange={handleInputChange}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Recuérdame</label>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary" onClick={handleLogin}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
            <div style={{width: 330}}>
                <form>
                    <div>
                        <p>REGISTRARSE</p>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo Electrónico</label>
                        <input type="email2" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password2" className="form-control" placeholder=""/>
                    </div>
                    <div className="form-check">
                        <small>*Enviaremos la contraseña a su correo electrónico</small>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary">Registrarse</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;