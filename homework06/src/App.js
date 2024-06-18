import logo from './logo.svg';
import './App.css';
import ProductsProvider from "./components/ProductsProvider";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
    return (
        <ProductsProvider>
            <AddProduct/>
            <ProductList/>
        </ProductsProvider>
    );
}

export default App;
