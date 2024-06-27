import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Product from "../../other/Product";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import {useLocation} from "react-router-dom";

const CatalogProducts = ({category}) => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
    let year = null;
    let size = null;
    let price = null;

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        year = query.get("year");
        size = query.get("size");
        price = query.get("price");
        console.log(year, size, price);
    }, [location]);

    return (
        <div className="catalog_page__list">
            <div className="product__items">
                {products.filter(product => ((product.category === category)
                    // && (year && (product.year === parseInt(year)))
                    // && (size && (product.size === size))
                    // && (price && (price.price === price))
                    )).map((product, index) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default CatalogProducts;