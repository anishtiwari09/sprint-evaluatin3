import { actionType as getActionType } from "./actionContraint";

const initialState={
    
    isLoading:false,
    isError:false,
    payload:{}
}
 export function reducer(state=initialState,action)
{
    switch(action.type)
    {
       
    case getActionType.GET_DATA_REQUEST:{
        return {
            ...state,isError:false,isLoading:true
        }
    }
    case getActionType.GET_DATA_FAILURE:{
        return {
            ...state,isError:true,isLoading:false
        }
    }
    case getActionType.GET_DATA_SUCCESS:{
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