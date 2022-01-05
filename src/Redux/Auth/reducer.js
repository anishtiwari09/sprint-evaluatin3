import { actionType } from "./actionContraint";

const initialState={
    isAuth:false,
    
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
    
    default :{
        return state
    }

}
}