import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./styles.css";

function BotonFlotante() {
  return (
    <div className="float">
      <input type="checkbox" id="btn-mas" />
      <div className="redes">
        <a href="https://wa.link/hu2flm">
          <WhatsAppIcon />
        </a>
        <a href="https://web.facebook.com/DulcesKari1">
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
