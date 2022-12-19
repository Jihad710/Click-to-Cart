import React from 'react'
import { useParams } from 'react-router-dom'


function ProductsDetails() {
    const { id } = useParams ();
  return (
    <div>
        <h1>Hellow from product details page.product id is : {id} </h1>
    </div>
  )
}

export default ProductsDetails