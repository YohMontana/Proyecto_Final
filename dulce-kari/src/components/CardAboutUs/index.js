import fotoKari from "../../asset/img/foto-Karina.png";
import "./styles.css"
import producticon from "../../asset/img/productos-frescos.png";
import hornoicon from "../../asset/img/horneamos-con-amor.png";
import timeicon from "../../asset/img/entrega-a-tiempo.png";

function CardAboutUs() {
 
  return (
    <div className="container-fluid" >
      <div className="first row container-fluid contain" >
        <div className="img-container col-sm-12  col-md-4 col-lg-6 "> <img className="foto" src={fotoKari} alt="" /> </div>
        <div className="text-container  col-sm-12  col-md-8  col-lg-6 ">
        <div className="d-flex justify-content-center">
            <h1>¿Porqué elegirnos?</h1>
        </div>
        <p className="text-center mt-5">Dulces Kari es un lugar donde la imaginación, los sabores y la inspiración se fusionan para crear las tortas más espectaculares.
        Preparamos nuestros postres con mucho amor, dedicación y cuidado, para que los disfrutes con toda familia.
        Somos una empresa peruana que convierte momentos familiares en únicos y especiales, elaborando postres con ingredientes naturales y frescos, basados en recetas mejoradas al estilo casero y preparadas con mucho amor y dedicación
        </p>
        <h4 className="text-center" >Bienvenido a nuestro dulce mundo.<br/>
        ¡Bienvenido a Dulces Kari!</h4>
        </div>
      </div>
      <div className="container-fluid h-100 info-section row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-2 m-3">
      <div className="col">
          <div className="card h-100">
              <img className="card-img-top" src={producticon}  alt="..."/>
              <div className="card-body text-center">
               <h5 className="card-title">Ingredientes frescos</h5>
               <p className="card-text">Todos nuestros productos están hechos con ingredientes de la mejor calidad y productos frescos garantizados.</p>
              </div>
          </div>
          </div>
          <div className="col">
          <div className="card h-100 ">
              <img className="card-img-top" src={hornoicon}  alt="..."/>
              <div className="card-body text-center">
               <h5 className="card-title ">Horneados con amor</h5>
               <p className="card-text">Nos apasiona la cocción. Cada uno de nuestros artículos hechos a mano son cuidadosamente horneados con amor.</p>
              </div>
          </div>
          </div>

          <div className="col">
          <div className="card h-100">
              <img className="card-img-top" src={timeicon}  alt="..."/>
              <div className="card-body text-center">
               <h5 className="card-title ">Cumplimos con los tiempos</h5>
               <p className="card-text">Somos muy puntuales y prometemos entregar productos frescos a tiempo a cada cliente.</p>
              </div>
          </div>
          </div>

      </div>
    </div>
  );
}

export default CardAboutUs;