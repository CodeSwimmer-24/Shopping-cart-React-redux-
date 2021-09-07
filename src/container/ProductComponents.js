import React from 'react'
import { useSelector } from 'react-redux'

function ProductComponents() {
    const products = useSelector((state) => state.allProducts.products);
    // const {id,title} = products[0];
    return (
        <div className="four wide column">
          {/* <h1>{title}</h1> */}
        </div>
    )
}

export default ProductComponents
