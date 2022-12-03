import { ProductProvider } from "./context/ProductContext";
import Router from "./routes";


function App() {
  return (
    <ProductProvider>
      <Router />
      </ProductProvider>
  );
}

export default App;