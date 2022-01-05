import { useEffect } from "react"
import {useParams} from "react-router-dom"

const createCard=()=>{

}


export default function Search()
{
    const params=useParams()
    const getSearchData=()=>{
        return fetch(`https://api.github.com/search/repositories?q=${params}&page=2&per_page=4`).then(res=>res.json()).catch(err=>{
            console.log(err)
        })
        }
useEffect(()=>{
if(params)
getSearchData().then(res=>{
    console.log(res.total_count)
})
},[])
    console.log(params)
    return <div>
        <div>
            
        </div>
    </div>
}