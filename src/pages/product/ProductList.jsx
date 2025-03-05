
import {useEffect, useState} from "react";
import apiProductService from "./apiProductService";
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const API_PRODUCT_URL = "http://localhost:8080/api/products";
    useEffect(() => {
        apiProductService.getProducts(setProducts);


    }, []);


    return (
        <div className="ProductList-container">
            {
                products.map(
                    (p) => {
                        <div key={p.productId}>
                            <h3>{p.productName}</h3>
                            <p>가격 : {p.productPrice}원</p>
                            <p>수량 : {p.productStock}개</p>
                            <Link to={`/products/${p.productId}`}>이동</Link>
                        </div>
                    }




                )
            }
        </div>
    )

};
export default ProductList;
