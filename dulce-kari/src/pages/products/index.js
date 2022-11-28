import { useState } from "react";
import { PostProduct } from "../../services";
import regalo1 from "../../asset/gif/regalo1.jpg";


function Products() {
  const [product, setProduct] = useState({
    name: "",
    precio: "",
    descripcion: "",
    imagen: "",
    categoria: "",
    stock: "",
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setProduct({
      ...product,
      [name] : value,
    })
  }
    
  const createProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await PostProduct(product);
      if (response){
          setProduct({
            name: "",
            precio: "",
            descripcion: "",
            imagen: "",
            categoria: "",
            stock: "",
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
                  id="name"
                  placeholder="Nombre del Producto"
                  name="name"
                  value={product.name}
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
                  id="precio"
                  name="precio"
                  value={product.precio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label for="descripcion" className="form-label">
                  DESCRIPCION
                </label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  placeholder="Descripción del producto"
                  rows="3"
                  name="descripcion"
                  value={product.descripcion}
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
                  id="imagen"
                  placeholder="Url de la imagen"
                  autofocus
                  name="imagen"
                  value={product.imagen}
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
                  id="categoria"
                  name="categoria"
                  placeholder="Categoria del Producto"
                  autofocus
                  value={product.categoria}
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
                  id="stock"
                  name="stock"
                  value={product.stock}
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
