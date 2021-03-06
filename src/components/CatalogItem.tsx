import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      <button type="button" onClick={() => handleAddProductToCart()}>
        Buy
      </button>
    </article>
  );
};

export default CatalogItem;
