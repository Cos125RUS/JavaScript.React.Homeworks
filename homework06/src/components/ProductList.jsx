import {useDispatch, useSelector} from "react-redux";
import {updateProduct} from "../reducers/productSlice";
import ProductComponent from "./ProductComponent";

/**
 * Компонент, отображающий список товаров
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ProductList = (props) => {
    const products = useSelector(state => state.product.productList);

    return (
        <ul className="products">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductComponent product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;