import { actionType } from "./actionContraint";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    payload:{}
}
 export function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case actionType.USER_LOGIN:{
            return {
                ...state,isAuth:true
            }
            
        }
        case actionType.USER_LOGOUT:{
            return {
                ...state,isAuth:false
            }
    }
    case actionType.GET_DATA_REQUEST:{
        return {
            ...state,isError:false,isLoading:true
        }
    }
    case actionType.GET_DATA_FAILURE:{
        return {
            ...state,isError:true,isLoading:false
        }
    }
    case actionType.GET_DATA_SUCCESS:{
        return {
            ...state,isError:false,isLoading:false,
            payload:action.payload
        }
    }
    default :{
        return state
    }

}
}