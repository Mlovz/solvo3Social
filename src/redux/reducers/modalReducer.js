const initialState = {
  open: false,
  view: "login",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
