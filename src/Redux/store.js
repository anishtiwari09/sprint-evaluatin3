import {createStore,combineReducers} from "redux"
//import { reducer } from "./getData/reducer"
import {reducer as authReducer} from "./Auth/reducer"
import {reducer as gitReducer} from "./getData/reducer"

const rootReducer=combineReducers({auth:authReducer,gitRepo:gitReducer})
export const store=createStore(rootReducer)