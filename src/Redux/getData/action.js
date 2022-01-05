import { actionType } from "./actionContraint";

export const getdataSuccess=(data)=>({
    type:actionType.GET_DATA_SUCCESS,
    payload:{
        item:data.item,
        totalPage:data.total_count
    },
    isLoading:false,
    isError:false
})
export const getdataRequest=()=>({
    type:actionType.GET_DATA_REQUEST,
    
    isLoading:true,
    isError:false

})
export const getdataFailure=(a)=>({
    type:actionType.GET_DATA_FAILURE,
    isLoading:false,
    isError:true

})