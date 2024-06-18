import {useDispatch} from "react-redux";
import {useState} from "react";
import {updateProduct} from "../reducers/productSlice";

/**
 * Компонент, отображающий карточку товара
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
const ProductComponent = ({product}) => {
    const [availableProduct, setAvailable] = useState(product.available);
    const dispatch = useDispatch();

    /**
     * Обновления свойства available
     */
    const switchAvailable = () => {
        setAvailable(!availableProduct);
        dispatch(updateProduct(product));
    };

    return (
        <div className="product">
            <h3 className="product-name">{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <div className="product-available">
                {availableProduct ? (
                    <p>Available</p>
                ) : (
                    <p>Not Available</p>
                )}
                <button onClick={() => switchAvailable()}>switch</button>
            </div>
        </div>
    );
};

export default ProductComponent;