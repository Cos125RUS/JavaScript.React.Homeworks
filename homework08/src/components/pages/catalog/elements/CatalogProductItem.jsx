import {useDispatch} from "react-redux";
import {addToCart} from "../../../../reducers/shopSlice";

const CatalogProductItem = ({product}) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    }

    return (
        <figure className="product__item">
            <div className="product__view">
                <img src={product.photo} alt="product photo" className="product__img"/>
                <div className="product__rectangle"></div>
                <button onClick={addToCartHandler} className="product__button">
                    <img src="img/products/cart.svg" alt="cart"/>
                    Add to Cart
                </button>
            </div>
            <figcaption className="product__info">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </figcaption>
        </figure>
    );
};

export default CatalogProductItem;