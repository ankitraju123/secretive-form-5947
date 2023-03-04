
//import { applyMiddleware, compose, legacy_createStore } from "redux";
//import { Globalreducer } from "@/redux/reducer";
//import thunk from "redux-thunk";

import { legacy_createStore,compose ,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer as productsReducer } from "./products/reducer";
import {reducer as user} from './Auth/reducer'

//const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

const rootReducers=combineReducers({productsReducer,user})

 const store=legacy_createStore(rootReducers,applyMiddleware(thunk))
 export {store}