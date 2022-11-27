import React from 'react'
import "./style.css"

function PreguntasFrecuentes () {
    return (
        <div className='container text-info'>
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Preguntas Frecuentes 
                </span>
            </div>
            <div className='text-center m-5'>
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div>
                <h4>1. ¿Cómo puedo realizar un pedido?</h4>
                <p className='texto'>Los pedidos se pueden realizar mediante la página web, previo registro como cliente y seguir los pasos que se te indica para concretar la compra. También
                    se pueden realizar mediante nuestras redes sociales (Instagram y Facebook) y Whatsapp al número 971412245
                </p>
                <h4>2. ¿Con cúanto tiempo de anticipación tengo que realizar mi pedido?</h4>
                <p className='texto'>Los pedidos se realizan con 48h como minimo de anticipación</p>
                <h4>3. ¿Cúales son las zonas de cobertura de delivery y cúanto cuesta?</h4>
                <p className='texto'>Las zonas de cobertura de delivery son:</p>
                <ul>
                    <li>
                        Chorrillos, Surco,Barranco, Miraflores, Surquillo - 10 soles
                    </li>
                    <li>
                        San Borja, Lince, Breña - 12 soles 
                    </li>
                    <li>
                        Magdalena, San Miguel - 15 soles 
                    </li>
                </ul>
                <p className='delivery'>En caso de no encontrar tu distrito en la lista, se puede realizar el recojo en el local de atención</p>
                <h4>4. ¿Cúal es el horario de atención?</h4>
                <p className='texto'>El horario de atención es de lunes a domingo de 11am a 8pm</p>
                <h4>5. ¿Cúal es el horario de delivery</h4>
                <p className='texto'>El horario de delivery es de lunes a domingo de 11am a 6pm</p>
                <h4>6. ¿Puedo cancelar mi pedido?</h4>
                <p className='texto'>Una vez realizado el procedimiento de compra y haber realizado el pago, no hay opción a cancelación de la compra y devolución
                    del dinero
                </p>
                <h4>7. ¿Puedo cambiar la fecha de entrega de mi pedido?</h4>
                <p className='texto'>Si deseas cambiar la fecha de tu pedido puedes hacerlo comunicándote al número 971412245</p>
                <h4>8. ¿Puedo cambiar o devolver mi pedido?</h4>
                <p className='texto'>Una vez despachado el producto, no hay opción a cambios ni devoluciones. Si el producto aún no ha sido despachado puedes realizar un cambios
                    comunicándote con nosotros al número 971412245
                </p>
                <h4>9. ¿Qué hago si mi pedido llego en mal estado?</h4>
                <p className='texto'>Si tu pedido llego equivocado o incompleto, puedes llamarnos al número 971412245 indicándonos lo sucedido</p>
                <h4>10. ¿Realizan pedidos corporativos y eventos? </h4>
                <p className='texto'>Si, puedes comunicarte con nosotros al número 971412245 para brindarte más información</p>
                <h4>11. Cuál es el tipo de almacenamiento y tiempo de vida de los productos?</h4>
                <p className='texto'>Nuestras tortas y cupcakes deben almacenarse en la refrigeradora, en un máximo de 24 horas. Sin embargo recomendamos 
                    que los productos sean consumidos el mismo día de recojo para mantener la textura y el sabor del producto
                </p>
            </div>
        </div>
    );
}

export default PreguntasFrecuentes 