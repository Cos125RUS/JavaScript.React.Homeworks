import {Link} from "react-router-dom";

const IndexMain = () => {
    
    return (
        <main className="main">
            <section className="offer">
                <div className="offer__content center">
                    <Link to="#">
                        <div className="offer__card">
                            <img src="img/offer/1.jpg" alt="photo" className="offer__img"/>
                                <img src="img/offer/rectangle_small.png" alt="rectangle" className="offer__rectangle"/>
                                    <div className="offer__text">
                                        <h3 className="offer__title">30% OFF<br/><b>FOR WOMEN</b></h3>
                                    </div>
                        </div>
                    </Link>
                    <Link to="catalog">
                        <div className="offer__card">
                            <img src="img/offer/2.jpg" alt="photo" className="offer__img"/>
                                <img src="img/offer/rectangle_small.png" alt="rectangle" className="offer__rectangle"/>
                                    <div className="offer__text">
                                        <h3 className="offer__title">HOT DEAL<br/><b>FOR MEN</b></h3>
                                    </div>
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="offer__card">
                            <img src="img/offer/3.jpg" alt="photo" className="offer__img"/>
                                <img src="img/offer/rectangle_small.png" alt="rectangle" className="offer__rectangle"/>
                                    <div className="offer__text">
                                        <h3 className="offer__title">NEW ARRIVALS<br/><b>FOR KIDS</b></h3>
                                    </div>
                        </div>
                    </Link>
                    <Link to="#" className="offer__bottom">
                        <div className="offer__card offer__big">
                            <img src="img/offer/4.jpg" alt="photo" className="offer__img"/>
                                <img src="img/offer/rectangle_big.png" alt="rectangle" className="offer__rectangle"/>
                                    <div className="offer__text">
                                        <h3 className="offer__title">LUXIROUS & TRENDY<br/><b>ACCESORIES</b></h3>
                                    </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="products">
                <div className="product__content center">
                    <div className="product__head">
                        <h2 className="product__title">Fetured Items</h2>
                        <p className="product__subtitle">Shop for items based on what we featured in this week</p>
                    </div>
                    <div className="product__items">
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/1.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <div className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </div>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/2.png" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/3.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/4.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/5.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/6.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="product__bottom">
                        <Link to="#" className="product__browse__all">Browse All Product</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default IndexMain;