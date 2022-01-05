import {Link} from "react-router-dom"
import {
    AppBar,Toolbar,IconButton,Typography
  } from "@material-ui/core";
export default function Navbar(){
    return <div style={{display:"flex",justifyContent:"center",gap:"1rem",padding:"0.9rem"}}>
        {/* <Link>Home</Link> */}
<div>
<Link to="/" style={{fontSize:"20px"}}>Home</Link>
</div>
<div>
<Link to="/login" style={{fontSize:"20px"}}>Login</Link>
</div>
<div>
<Link to="/search" style={{fontSize:"20px"}}>Search</Link>
</div>
        
    </div>
}