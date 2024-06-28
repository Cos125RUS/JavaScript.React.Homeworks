import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Product from "../../other/Product";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import {useLocation} from "react-router-dom";

const CatalogProducts = ({category}) => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
    const [year, setYear] = useState(null);
    const [size, setSize] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        setYear(query.get("year"));
        setSize(query.get("size"));
        setPrice(query.get("price"));
    }, [location]);

    return (
        <div className="catalog_page__list">
            <div className="product__items">
                {products
                    .filter(product => ((product.category === category)))
                    .filter(product => (!year || product.year === parseInt(year)))
                    .filter(product => (!size || product.size.indexOf(size)))
                    .map((product, index) => (
                        <Product key={product.id} product={product}/>
                    ))}
            </div>
        </div>
    );
};

export default CatalogProducts;