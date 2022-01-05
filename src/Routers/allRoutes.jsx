import {Route,Switch} from "react-router-dom"
import Home from "../AllPages/home"
import Login from "../AllPages/login"
import Search from "../AllPages/search"
import PrivateRoutes from "./privateRoute"
export default function AllRoutes()
{
    return (<div>
        <Switch>
        {/* <Route exact path="/"><Home /></Route> */}
        <Route path="/login"><Login /></Route>
        {/* <Route exact path="/search"><Search /></Route> */}
        <PrivateRoutes exact={true} path="/search/:users"><Search /></PrivateRoutes>

        <PrivateRoutes exact={true} path="/search"><Search /></PrivateRoutes>
            <PrivateRoutes exact={true} path="/">
            <Home />
            
            </PrivateRoutes>
            {/* <PrivateRoutes exact path="/login">
            <Login />
            
            </PrivateRoutes> */}
    </Switch>
    </div>)
}