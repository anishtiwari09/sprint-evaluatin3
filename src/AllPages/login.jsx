import {useSelector,useDispatch} from "react-redux"
import {Redirect} from "react-router-dom"
import { getUserLogin } from "../Redux/Auth/action"
export default function Login()
{
    const {isAuth}=useSelector(state=>state)
    console.log(isAuth)
    const dispatch=useDispatch()
    const handleLogin=()=>{
        dispatch(getUserLogin())
    }
    if(!isAuth)
    return( <div>
        <button onClick={handleLogin}>Login</button>
    </div>)
    return <Redirect to="/" />
}