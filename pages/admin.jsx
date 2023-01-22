import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const initData={
    quantity: 0,
      id: Date.now(),
      image: "",
      title: "",
      preprice: "",
      price: 0,
      discount: "",
      category: "lipstick",
     
}

const Admin = () => {

    const [title,setTitle]=useState("")
    
    const [image,setImage]=useState("")
    const [preprice,setPreprice]=useState(0)
    const [disc,setDisc]=useState(0)
    const [price,setPrice]=useState(0)
    const [category,setCategory]=useState("")
    const [rating,setRating]=useState(0)
    const handlechange={
                id:Date.now(),
                quantity:0,
                title,
                price,
                image,
                rating,
                preprice,
    }

    const post=async()=>{
        let res=await axios.post("https://nykaa-mock-api-6or1.onrender.com/product",handlechange)
        setTitle(""); setPrice(0); setImage(""); setPreprice(null)
    }

    const origprice=()=>{
       let x= preprice*(disc/100)
       setPrice(preprice-x)
    }


    
  return (
    <div>
        <input placeholder='Name of Product' style={{width:"500px",margin:"auto",backgroundColor:"red"}} type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        
        <input placeholder='Original Price' type="number" value={preprice} onChange={(e)=>{setPreprice(e.target.value)}} />
        <input placeholder='Discount' type="number" value={disc} onChange={(e)=>{setDisc(e.target.value)}} />
        <button onClick={()=>origprice()}>Calc Price</button>
        <input placeholder='Price' type="number" value={price}/>
        <input placeholder='Category' type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
        <input placeholder='Image' type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} />
        <input type="number" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
        <button onClick={()=>{post()}}>Submit</button>
        
    </div>
  )
}

export default Admin