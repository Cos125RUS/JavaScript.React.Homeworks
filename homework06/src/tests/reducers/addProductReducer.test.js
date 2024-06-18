import Product from "../../entity/product";
import {addProductReducer} from "../../reducers/addProductReducer";
import {state} from "../initState";

describe('Add Reducer tests', () => {
    test("add product test", () => {
        const testProduct = {
            payload: new Product("Nokia", "Забытая классика", 10_000),
        };
        addProductReducer(state, testProduct);
        expect(state.productList.length).toBe(5);
        expect(state.productList[4]).toEqual(testProduct.payload);
        expect(state.productList[0].name).toEqual("iPhone");
    });
})