import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate} from "react-router-dom";
import "./styles.css";

function BotonFlotante() {


  return (
    <div className="float">
      <input type="checkbox" id="btn-mas" />
      <div className="redes">
        <a href="https://api.whatsapp.com/send?phone=+51971412245&text=Hola,%20quiero%20informaci%C3%B3n%20sobre..." target="_blank">
          <WhatsAppIcon />
        </a>
        <a href="https://web.facebook.com/DulcesKari1" target="_blank">
          <FacebookIcon />
        </a>
      </div>

      <div className="btn-mas">
        <div className="help">
          <p>¿Necesitas ayuda?</p>
        </div>
        <label for="btn-mas">
          <AccountCircleIcon />
        </label>
      </div>
    </div>
  );
}

export default BotonFlotante;