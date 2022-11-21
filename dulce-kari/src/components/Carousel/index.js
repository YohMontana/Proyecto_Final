import por1 from "../../asset/img/por1.png"
import por2 from "../../asset/img/por2.png"
import por3 from "../../asset/img/por3.png"
import por4 from "../../asset/img/por4.png"
function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={por1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={por2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={por3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={por4} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;