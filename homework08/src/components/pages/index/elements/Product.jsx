import AddToCart from "./AddToCart";

const Product = ({product}) => {
    const photo = `img/products/${product.photo}`;

    return (
        <figure className="product__item">
            <div className="product__view">
                <img src={photo} alt="product photo" className="product__img"/>
                <div className="product__rectangle"></div>
                <AddToCart productId={product.id} />
            </div>
            <figcaption className="product__info">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </figcaption>
        </figure>
    );
};

export default Product;