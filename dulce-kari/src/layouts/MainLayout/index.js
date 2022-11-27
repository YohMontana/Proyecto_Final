import { useNavigate, Outlet } from "react-router-dom"
import logo from "../../asset/img/logo.jpg"

import "./styles.css"

const MainLayout = ()=>{
    const background = {
        background: "#ED719F"
    }
    const history = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark " style={background} id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="50" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto fw-bold ">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="/tienda">Tienda</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contactanos</a></li>
                            <li className="nav-item"><a className="nav-link" href="/login">Iniciar sesión</a></li>
                        </ul>
                     
                    </div>
                </div>
            </nav>
          <Outlet />
        </div>
      );
}

export default MainLayout;