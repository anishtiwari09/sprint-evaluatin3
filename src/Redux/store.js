import {createStore,combineReducers} from "redux"
import { reducer } from "./Auth/reducer"


// const rootReducer=combineReducers({auth:authReducer,data:dataReducer})
export const store=createStore(reducer)