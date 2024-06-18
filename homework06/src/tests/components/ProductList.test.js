import ProductList from "../../components/ProductList";
import {render, screen} from "@testing-library/react";
import productStore from "../../store/productStore";
import {Provider} from "react-redux";

describe("ProductList Component tests", () => {
    test("render product list test", () => {
        render(
            <Provider store={productStore}>
                <ProductList/>
            </Provider>
        );
        // eslint-disable-next-line testing-library/no-node-access
        const productsEl = document.querySelector(".products");
        // eslint-disable-next-line testing-library/no-node-access
        const products = productsEl.querySelectorAll(".product");
        // eslint-disable-next-line testing-library/no-node-access
        const productNames = productsEl.querySelectorAll(".product-name");
        expect(productsEl).toBeInTheDocument();
        expect(products.length).toBe(4);
        expect(productNames.length).toBe(4);
    });

    test("render products content test", () => {
        render(
            <Provider store={productStore}>
                <ProductList/>
            </Provider>
        );
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByText("iPhone")).toBeInTheDocument();
        expect(screen.getByText("Samsung")).toBeInTheDocument();
        expect(screen.getByText("Honor")).toBeInTheDocument();
        expect(screen.getByText("Xiaomi")).toBeInTheDocument();
    });
});