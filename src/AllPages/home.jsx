import { useState } from "react"
import {useDispatch} from "react-redux"
import { getUserLogout } from "../Redux/Auth/action"
import {Redirect,useHistory} from "react-router-dom"
export default function Home()
{

const dispatch=useDispatch()
const handleLogout=()=>
{
    dispatch(getUserLogout())
}
const history=useHistory()
const getSearchData=()=>{
return fetch(`https://api.github.com/search/repositories?q=masai&page=2&per_page=4`).then(res=>res.json()).catch(err=>{
    console.log(err)
})
}
const handleSearch=async ()=>{
    let url=`/search/q=${text}`
    history.push(url)
}

const [text,setText]=useState("")
return <div>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <h3>Home</h3>
        <div>
            <div>
            <input type="search" placeholder="|Search Repository" value={text} onChange={(e)=>setText(e.target.value)} />
            
                <button onClick={handleSearch}>Search</button>
            
            </div>
        </div>
    </div>
}