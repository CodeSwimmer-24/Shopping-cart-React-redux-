import React from 'react'
import { useSelector } from 'react-redux';
import "../App.css";
import {Link} from "react-router-dom";

function ProductComponents() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const {image,id,title,price,category} = product;
      console.log(product);
      return (
        <div className="product-components"> 
        <Link to={`/product/${id}`}>
        <div className="four wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div classNam="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
        </Link>
        </div>
      );
    });
    return (
     <>{renderList}</>
    )
}

export default ProductComponents
