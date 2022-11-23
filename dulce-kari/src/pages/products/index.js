import { useState } from "react";
import { PostProduct, GetProduct } from "../../services/ProductsServices";
import regalo1 from "../../asset/gif/regalo1.jpg";


function Products() {
  const [product, setProduct] = useState({
    productoNombre: "",
    productoPrecio: "",
    productoDescripcion: "",
    productoImagen: "",
    productoCategoria: "",
    productoStock: "",
  });

  
  const handleInputChange = (event) => {
    // const { name, value } = event.currentTarget;
    console.log(event.target.value)
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }
    
  const createProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await PostProduct(product);
      if (response){
          setProduct({
            productoNombre: "",
            productoPrecio: "",
            productoDescripcion: "",
            productoImagen: "",
            productoCategoria: "",
            productoStock: "",
            });
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <h1>Crear Productos</h1>
            <form className="Products-create-form" onSubmit={createProduct}>
              <div className="mb-3">
                <label for="nombre" className="form-label">
                  NOMBRE
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productoNombre"
                  placeholder="Nombre del Producto"
                  name="productoNombre"
                  value={product.productoNombre}
                  onChange={handleInputChange}
                  autofocus
                />
              </div>
              <div className="mb-3">
                <label for="precio" className="form-label">
                  PRECIO
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="productoPrecio"
                  name="productoPrecio"
                  value={product.productoPrecio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="descripcion" className="form-label">
                  DESCRIPCION
                </label>
                <textarea
                  className="form-control"
                  id="productoDescripcion"
                  placeholder="Descripción del producto"
                  rows="3"
                  name="productoDescripcion"
                  value={product.productoDescripcion}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="imagen" className="form-label">
                  IMAGEN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productoImagen"
                  placeholder="Url de la imagen"
                  autofocus
                  name="productoImagen"
                  value={product.productoImagen}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="categoria" className="form-label">
                  CATEGORIA
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productoCategoria"
                  name="productoCategoria"
                  placeholder="Categoria del Producto"
                  autofocus
                  value={product.productoCategoria}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="programadores" className="form-label">
                  STOCK
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="productoStock"
                  name="productoStock"
                  value={product.productoStock}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success">Crear</button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <img src={regalo1} className="d-block w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
