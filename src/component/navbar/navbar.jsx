import {Link} from "react-router-dom"
import {
    AppBar,Toolbar,IconButton,Typography
  } from "@material-ui/core";
export default function Navbar(){
    return <>
        {/* <Link>Home</Link> */}
<div>
<Link to="/">Home</Link>
</div>
<div>
<Link to="/login">Login</Link>
</div>
<div>
<Link to="/search">Search</Link>
</div>
        
    </>
}