import logo from "../../asset/img/logo.jpg"




function Header() {
    const background = {
        background: "#ED719F"
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark " style={background} id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="100" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Tienda</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contactanos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;