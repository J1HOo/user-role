import React, { useState } from "react";
import ApiProductService from "./apiProductService";

const ProductDetail = () => {
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getProductDetail = () => {

        if (!productId.trim()) {
            alert("상품 ID를 입력하세요.");
            return;
        }

        ApiProductService.getProductById(
            productId,
            (data) => {
                setProduct(data);
            },
            (err) => {
                console.error("상품 상세 정보 가져오기 실패:", err);
                setProduct(null);
                setErrorMessage("상품 정보를 가져오는 중 오류가 발생했습니다.");
            }
        );
    };

    return (
        <div className="productdetail-container">
            <h2>상품 상세 조회</h2>
            <div className="search-container">
                <input
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="상품 ID 입력"
                />
                <button onClick={getProductDetail}>조회</button>
            </div>


            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}

            {product && !errorMessage && (
                <div className="product-info">
                    <h3>{product.productName}</h3>
                    <p>카테고리: {product.productCategory}</p>
                    <p>가격: {product.productPrice}원</p>
                    <p>재고: {product.productStock}개</p>
                    <p>설명: {product.productDescription}</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;