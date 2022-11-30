import {Carousel} from "../../components";
import {CardSlider} from '../../components';
import {Separator} from '../../components';
import {Division} from '../../components';
import {CardFooter} from '../../components';
import {BotonFlotante} from '../../components'
import {PopupWhatsApp} from '../../components'



function Home (){

return(
    <>
    <BotonFlotante></BotonFlotante>
    {/* <PopupWhatsApp></PopupWhatsApp> */}
    <Carousel></Carousel>
    <Separator></Separator>
    <CardSlider></CardSlider>
    <Division></Division>
    <CardFooter></CardFooter>     
    </>
) 
}

export default Home;
