import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";



function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;