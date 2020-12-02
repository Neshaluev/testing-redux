import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

export const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
