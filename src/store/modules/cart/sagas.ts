import { all, takeLatest, select } from "redux-saga/effects";
import { addProductToCartSuccess } from "./actions";
import { IState } from "../..";

type CheckProductStockRequest = ReturnType<typeof addProductToCartSuccess>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
