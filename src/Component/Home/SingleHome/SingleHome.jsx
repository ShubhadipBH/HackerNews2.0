import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillCaretUpFill,BsFillCaretDownFill } from "react-icons/bs"
import {Button} from 'react-bootstrap'

const SingleHome = ({id}) => {
    const [sData, setSData] = useState("")
     let [counter,setcounter]=useState(0)
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => {
            console.log(res.data)
            setSData(res.data)
        })
    }, [id])
    return (

        
        <>
        {
            id && 
            <div style={{border: "1px solid black",borderRadius:"10px"}} className="ItemSingleDiv">
            {/* <p>Id: {sData.id}</p> */}
            <a href="#" style={{textDecoration:"none" , color:"black"}} ><BsFillCaretUpFill /> </a>
            <a href="#" style={{textDecoration:"none" }} >    <BsFillCaretDownFill style={{marginRight:"18px"}}/> </a>
            <a href={sData.url}
                className="LinkClicked" style={{textDecoration: "none"}}>
            {sData.title}
            </a>
           
            {/* <p>Type : {sData.type}</p> */}
            <p className="SingleDataPara"> by <span style={{fontWeight:"bold",color:"#F6AE99"}}> {sData.by} </span> 
            {/* <span style={{marginLeft:"30px"}}>  descendants : {sData.descendants}
            </span>  */}
            </p>
         
            {/* <p className="SingleDataPara"> score : {sData.score}
             <span style={{marginLeft:"30px"}}>  TIME : { sData.time}</span> 
             </p> */}
            {/* <p className="SingleDataPara">TEXT : {sData.text} </p> */}
            {/* <p>TIME : {Math.floor((sData.time / (1000 * 60 * 60)) % 24)}</p> */}
           
            {/* <div>keys : {sData.kids.map((e) => (<h1>{e}</h1>))}</div> */}
        </div>
        }

        
         </>
         )
}

export default SingleHome
