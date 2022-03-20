import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_TOTALPRICES,
  DELETE_PRODUCT,
  CLEAR_CART,
  SET_PRODUCT_LIST,
} from "../constants/cart";

const initialState = {
  selectedProducts: [],
  totalPrices: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const index1 = state.selectedProducts.findIndex(
        (product) => product.book["_id"] === action.payload.book["_id"]
      );
      if (index1 !== -1) {
        const newProductList = [...state.selectedProducts];
        newProductList[index1].quantity += action.payload.quantity;
        return {
          ...state,
          selectedProducts: newProductList,
        };
      } else
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.payload],
        };
    case UPDATE_PRODUCT:
      const index2 = state.selectedProducts.findIndex(
        (product) => product.book["_id"] === action.payload.book["_id"]
      );
      const newProductList = [...state.selectedProducts];
      newProductList[index2] = action.payload;
      const newTotalPrices = newProductList.reduce(
        (accumulator, item) => accumulator + item.book.price * item.quantity,
        0
      );
      return {
        ...state,
        selectedProducts: newProductList,
        totalPrices: newTotalPrices,
      };
    case UPDATE_TOTALPRICES:
      return {
        ...state,
        totalPrices: action.payload,
      };
    case DELETE_PRODUCT:
      const newProducts = state.selectedProducts.filter(
        (product) => product.book["_id"] !== action.payload.book["_id"]
      );
      return {
        ...state,
        selectedProducts: newProducts,
      };
    case CLEAR_CART:
      return {
        ...state,
        selectedProducts: [],
        totalPrices: 0,
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        selectedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
