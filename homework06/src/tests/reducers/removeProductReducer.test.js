import {state} from "../initState";
import {removeProductReducer} from "../../reducers/removeProductReducer";

describe('Remove ProductComponent tests', () => {
    test('Remove product test', () => {
        const removeAction = {payload: state.productList[0].id};
        const removeProductName = state.productList[0].name;
        removeProductReducer(state, removeAction);
        expect(state.productList.length).toBe(3);
        expect(state.productList[0].name).not.toEqual(removeProductName);
    });
})