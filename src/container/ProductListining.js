import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import ProductComponents from './ProductComponents';
import  { setProducts } from "../redux/actions/products";

function ProductListining() {
    const products = useSelector((state) => state);
     const dispatch = useDispatch();
    console.log(products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
        console.log("Error",err)
        } );
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
     fetchProducts()
    },[]);
    console.log("products:",products)

    return (
        <div className="">
            <h1>
               <ProductComponents/>
            </h1>
        </div>
    )
}

export default ProductListining
