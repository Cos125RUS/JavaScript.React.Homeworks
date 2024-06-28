import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import Product from "../../other/Product";

const ProductOffer = () => {
    const products = useSelector(state => state.products);
    const loadingStatus = useSelector(state => state.loadingStatus.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    return (
        <section className="product">
            <div className="product__items">
                {loadingStatus ? <h5>loading...</h5> : products.slice(0, 3).map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
};

export default ProductOffer;