import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import catalogProductLoader from "../../../../reducers/loaders/catalogProductLoader";
import Product from "../../index/elements/Product";
import CatalogProductItem from "./CatalogProductItem";

const CatalogProducts = () => {
    const products = useSelector(state => state.catalogProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(catalogProductLoader());
    }, []);

    return (
        <div className="catalog_page__list">
            <div className="product__items">
                {products.map((product, index) => (
                    <CatalogProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default CatalogProducts;