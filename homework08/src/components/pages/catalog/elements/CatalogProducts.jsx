import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Product from "../../other/Product";
import productsLoader from "../../../../reducers/loaders/productsLoader";

const CatalogProducts = ({category}) => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    return (
        <div className="catalog_page__list">
            <div className="product__items">
                {products.filter(product => product.category === category).map((product, index) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default CatalogProducts;