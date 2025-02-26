import React, { useState, useEffect } from "react";
import './ProductSearch.css';
import ApiProductService from "./apiProductService";

const ProductSearch = () => {
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);
    const [sugs, setSugs] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            const trimmedKeyword = keyword.trim();

            if (trimmedKeyword) {
                ApiProductService.getSuggestions(
                    trimmedKeyword,
                    (suggestionList) => {
                        setSugs(suggestionList);
                        setShow(true);
                    },
                    (err) => {
                        console.error("추천 검색어 동작 실행 실패:", err);
                        setSugs([]);
                        setShow(false);
                    }
                );
            } else {
                setSugs([]);
                setShow(false);
            }
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [keyword]);

    const handleSug = (suggestion) => {
        setKeyword(suggestion);
        setShow(false);
    };

    const searchProducts = () => {
        if (!keyword.trim()) {
            setErrorMessage("검색어를 입력하세요.");
            return;
        }

        setLoading(true);
        setErrorMessage("");

        ApiProductService.getProducts(
            keyword.trim(),
            (data) => {
                setProducts(data);
                setLoading(false);

                if (data.length === 0) {
                    setErrorMessage(`"${keyword.trim()}" 검색 결과가 없습니다.`);
                }
            },
            (err) => {
                console.error("검색 실패:", err);
                setProducts([]);
                setLoading(false);

                if (err.response) {
                    if (err.response.status === 404) {
                        setErrorMessage("요청한 리소스를 찾을 수 없습니다.");
                    } else if (err.response.status === 500) {
                        setErrorMessage("서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
                    } else {
                        setErrorMessage(`상품 검색 중 오류가 발생했습니다. (${err.response.status})`);
                    }
                } else if (err.request) {
                    setErrorMessage("서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.");
                } else {
                    setErrorMessage("상품 검색 중 오류가 발생했습니다.");
                }
            }
        );
    };

    return (
        <div className="productsearch-container">
            <h2>상품 검색</h2>
            <div>
                <input
                    type="text"
                    value={keyword}
                    onFocus={() => setShow(true)}
                    onChange={handleChange}
                    onBlur={() => setTimeout(() => setShow(false), 200)}
                    placeholder="상품명을 입력하세요"
                />
                {show && sugs.length > 0 && (
                    <ul>
                        {sugs.map((suggestion, index) => (
                            <li key={index} onMouseDown={() => handleSug(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={searchProducts} disabled={loading}>
                {loading ? "검색 중..." : "검색"}
            </button>

            {/* 에러 메시지 표시 */}
            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}

            {/* 로딩 표시 */}
            {loading && (
                <div className="loading-message">검색 결과를 불러오는 중입니다...</div>
            )}

            {/* 검색 결과 목록 */}
            {!loading && products.length > 0 && (
                <ul className="product-list">
                    {products.map((product) => (
                        <li key={product.productId} className="product-item">
                            <h3>{product.productName}</h3>
                            <p>카테고리: {product.productCategory}</p>
                            {product.productPrice && (
                                <p>가격: {product.productPrice.toLocaleString()}원</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductSearch;