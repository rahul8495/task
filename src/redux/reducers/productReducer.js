const initialState = [
  { id: 0, name: "hp", description: "Laptop with i5 processor", price: 35000.01 },
  { id: 1, name: "samsung", description: "smart phone", price: 12000.02 },
];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      state = [...state, action.payload];
      return state;
    case "DELETE_PRODUCT":
      const productFilter = state.filter((product) =>
        product.id === action.payload ? null : product
      );
      state = productFilter;
      return state;
    case "UPDATE_PRODUCT":
      const productUpdate = state.filter((product) =>
        product.id === action.payload.id
          ? Object.assign(product, action.payload)
          : product
      );
      state = productUpdate;
      return state;
    default:
      return state;
  }
};
