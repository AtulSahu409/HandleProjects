import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"

import {reducer as Projectdata} from "./Projectdata/reducer"

import thunk from "redux-thunk"

const rootReducer =combineReducers({Projectdata})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};
