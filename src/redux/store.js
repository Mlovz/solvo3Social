import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import modalReducer from "./reducers/modalReducer";

export const store = createStore(modalReducer, composeWithDevTools());
