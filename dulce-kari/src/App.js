import Router from "./routes";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router />
      </ProductProvider>
  );
}

export default App;