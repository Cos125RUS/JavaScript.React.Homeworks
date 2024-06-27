import SubNav from "../other/SubNav";
import CartForm from "./elements/CartForm";
import CartProducts from "./elements/CartProducts";
import {useSelector} from "react-redux";

const CartMain = () => {
    const products = useSelector(state => state.cart);
    const total = products.reduce((total, product) => total + parseInt(product.price), 0);
    
    return (
        <main className="main">
            <SubNav crumbs={[{name: "shopping cart"}]}/>
            <section className="cart center">
                <div className="cart__box">
                    <CartProducts products={products}/>
                    <CartForm grandTotal={total} subTotal={total}/>
                </div>
            </section>
        </main>
    );
};

export default CartMain;