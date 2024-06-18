import {state} from "../initState";
import {updateProductReducer} from "../../reducers/updateProductReducer";
import Product from "../../entity/product";

describe('Update ProductList Reducer tests', () => {
    test('Update ProductList Reducer test', () => {
        const updatedProduct = new Product("New ProductComponent", "some text", 100, false);
        updatedProduct.id = state.productList[0].id;
        updateProductReducer(state, {payload: updatedProduct});
        expect(state.productList[0].name).toEqual("New ProductComponent");
        expect(state.productList[0].description).toEqual("some text");
        expect(state.productList[0].price).toBe(100);
        expect(state.productList[0].available).toEqual(false);
        expect(state.productList[1].name).not.toEqual("New ProductComponent");
        expect(state.productList[2].description).not.toEqual("some text");
        expect(state.productList[3].price).not.toBe(100);
        expect(state.productList[1].available).not.toEqual(false);
    });
})