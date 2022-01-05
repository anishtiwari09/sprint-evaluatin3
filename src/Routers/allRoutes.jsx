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
        <Route exact path="/login"><Login /></Route>
        {/* <Route exact path="/search"><Search /></Route> */}
        <Route exact path="/search/:user"><Search /></Route>
        <PrivateRoutes exact={false} path="/search">
            <Search />
            
            </PrivateRoutes>
            <PrivateRoutes exact={true} path="/">
            <Home />
            
            </PrivateRoutes>
            {/* <PrivateRoutes exact path="/login">
            <Login />
            
            </PrivateRoutes> */}
    </Switch>
    </div>)
}