import { Mailer } from '../../components' 
import { Encuentranos } from '../../components'
import { CardFooter } from '../../components';
import {Division} from '../../components';



function Contactanos () {
  return(
    <>
      <Mailer></Mailer>
      <div className="Container mb-0">
        <div className="d-flex justify-content-center">
            <h1> Encuentranos</h1>
        </div>
        <div className="d-flex justify-content-evenly">
        
        <Encuentranos></Encuentranos>          
        </div>
      </div>     
      
      <Division></Division>
      <CardFooter></CardFooter>
    </> 

  );
}

export default Contactanos;