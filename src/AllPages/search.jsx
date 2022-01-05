import { useEffect } from "react"
import {useState} from "react"
import {useParams} from "react-router-dom"
import {useSelector,useDispatch,shallowEqual} from "react-redux"
import { getdataFailure, getdataRequest, getdataSuccess } from "../Redux/getData/action"
import Container from "@mui/material/Container";
import { Grid, MenuItem, Paper, Select } from "@mui/material";
import { Box } from "@mui/system";
const CreateCard=(item)=>{
    
    return <Grid xs={12} md={6}  xl={3} padding={4} item={true}>
        
        
            <div style={{border:"1px solid black"}}>
                <div style={{padding:"0.83rem"}}><img src={item?.item?.owner?.avatar_url} width="120px"/></div>
            <div style={{padding:"0.83rem"}}>
            <div style={{padding:".45rem"}}> <span style={{fontWeight:"bold",wordWrap:"break-word"}}>{item?.item?.full_name}</span></div>
                <div style={{wordWrap:"break"}}><span style={{fontSize:"20px",fontWeight:"bold",}}>Desc : &nbsp;</span> {item?.item?.description}</div>

                </div>
                </div>
                
        
    </Grid>
}

export default function Search()
{
const [current,setCurrent]=useState(1)
    const {users}=useParams()
    const getSearchData=(params,page,perPage)=>{
        return fetch(`https://api.github.com/search/repositories?${params}&page=${page}&per_page=${perPage}`).then(res=>res.json()).catch(err=>{
dispatch(getdataFailure())
        })
        }
 const {isLoading,isError,payload}=useSelector(state=>state.gitRepo,shallowEqual) 
 
 const dispatch=useDispatch()
 const [perPage,setPerPage]=useState(5)
const [totalPage,setTotalPage]=useState(1)
const pageArray=new Array(Math.min(Math.ceil(totalPage/perPage),100)).fill(0)
useEffect(()=>{
    console.log('params:',users)
if(users){
dispatch(getdataRequest())
getSearchData(users,current,perPage).then(res=>{

    dispatch(getdataSuccess(res))
    setTotalPage(Math.ceil(Number(res.total_count)))
    console.log(res.total_count)
})}


},[current,perPage])
const handlePageSet=(e)=>{
setPerPage(Number(e.target.value))
setCurrent(1)
}
const handlePagination=(i)=>{
    setCurrent(i+1)
}
if(isLoading||isError)
return <div>
    {isLoading && <h3>Loading...</h3>}
    {isError && <h3>Something went wrong</h3>}
</div>
    return <Container>
        <Box style={{padding:"2rem"}}>
            <label>Per page&nbsp;</label>
            <Select value={perPage} onChange={handlePageSet}>
                <MenuItem value={5}>Default 5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </Box>
       <Grid container spacing={0} position="relative">
{payload.item?.map((item)=><CreateCard key={item.id+1} item={item}/>)}
       </Grid>
       <div style={{padding:"2rem"}}>{users&&
           pageArray.map((_,i)=><button key={i} onClick={()=>handlePagination (i)} disabled={current==i+1?true:false} style={current===i+1?{backgroundColor:"coral"}:{backgroundColor:"white"}}>{i+1}</button>)
           }</div>
    </Container>
}