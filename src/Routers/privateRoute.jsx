
import {Route,Redirect} from "react-router-dom"
import Home from "../AllPages/home";

import {useSelector,shallowEqual} from "react-redux"
export default function PrivateRoutes({path,children,exact})
{
    const {isAuth}=useSelector(state=>state.auth,shallowEqual)

    if(!isAuth)
    return <Redirect to="/login" />
    return <Route exact={exact} path={path}>{children}</Route>

}