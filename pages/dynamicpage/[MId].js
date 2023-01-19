import axios from 'axios'
import React from 'react'

const Pages = ({data}) => {
  return (
    <div>
        Each prod
    </div>
  )
}

export async function getServerSideProps(context){
  console.log(context)
    const {MId}=context.params
    const res=await axios.get(`http://localhost:8080/product/${MId}`)
    return{
        props:{
            data:res.data
        }
    }
}
export default Pages