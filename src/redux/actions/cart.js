import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_TOTALPRICES,
  DELETE_PRODUCT,
  CLEAR_CART,
  SET_PRODUCT_LIST,
} from "../constants/cart";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
  };
};

export const updateTotalPrices = (payload) => {
  return {
    type: UPDATE_TOTALPRICES,
    payload,
  };
};

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const setProductList = (payload) => {
  return {
    type: SET_PRODUCT_LIST,
    payload,
  };
};
