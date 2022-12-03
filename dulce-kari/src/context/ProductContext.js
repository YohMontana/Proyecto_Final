import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { children } = props;

  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("product")) ?? []
  );

  function addItem(product) {
    const newProducts = [...cartProducts, product];
    setCartProducts(newProducts);
    localStorage.setItem("product", JSON.stringify(newProducts));
  }

  function deleteItem(product) {
    const newProducts = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts([...newProducts]);
    localStorage.setItem("product", JSON.stringify(newProducts));
  }

  function searchProductInArray(product) {
    return cartProducts.find((item) => item.id === product.id);
  }

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        addItem,
        deleteItem,
        searchProductInArray,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};