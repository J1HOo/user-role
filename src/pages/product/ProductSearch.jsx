import React, {useState} from "react";
import './ProductSearch.css';
import ApiProductService from "./apiProductService";

const ProductSearch = () => {
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);
    const [sugs, setSugs] = useState([]); // 추천 검색어를 제안하는 리스트
    const [show, setShow] = useState(false); // 추천 검색어 표시 여부

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);

        // 입력값이 존재하는 경우 추천 검색어 가져오기
        if (value.trim()) {
            ApiProductService.getSuggestions(
                value,
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
            // 입력값이 비어있는 경우 추천 검색어 리스트 비우기
            setSugs([]);
            setShow(false);
        }
    };

    // 추천 검색어 클릭 처리
    const handleSug = (suggestion) => {
        setKeyword(suggestion);
        setShow(false);
    };

    const searchProducts = () => {
        // 입력값이 비어있는지 확인
        if (!keyword.trim()) {
            alert("검색어를 입력하세요.");
            return;
        }

        ApiProductService.getProducts(
            keyword,
            (data) => {
                setProducts(data);
            },
            (err) => {
                console.error("검색 실패:", err);
                setProducts([]); // 에러 발생 시 검색 결과 비우기
                alert("상품 검색 중 오류가 발생했습니다.");
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
            <button onClick={searchProducts}>검색</button>

            <ul className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.productId}>
                            <h3>{product.productName}</h3>
                            <p>카테고리: {product.productCategory}</p>
                            {product.productPrice && (
                                <p>가격: {product.productPrice}원</p>
                            )}
                        </li>
                    ))
                ) : (
                    <div>
                        {keyword && <p>"{keyword}" 검색 결과가 없습니다.</p>}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default ProductSearch;