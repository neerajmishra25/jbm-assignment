import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productCreateReducer,
	productUpdateReducer,
} from "./reducers/productReducers";

import { userLoginReducer, userReigsterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
	productList: productListReducer,
	productCreate: productCreateReducer,
	productDetails: productDetailsReducer,
	productDelete: productDeleteReducer,
	productUpdate: productUpdateReducer,
	userLogin: userLoginReducer,
	userRegister: userReigsterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
