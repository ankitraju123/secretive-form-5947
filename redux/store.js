
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { Globalreducer } from "../redux/products/reducer";
import thunk from "redux-thunk";

 export const store=legacy_createStore(Globalreducer,applyMiddleware(thunk))
