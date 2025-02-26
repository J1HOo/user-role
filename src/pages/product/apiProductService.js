import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/api/products";

const apiProductService = {
    // 상품 검색 결과 가져오기
    getProducts: function(keyword, callback, errorCallback) {
        axios
            .get(`${API_PRODUCT_URL}/search?keyword=${encodeURIComponent(keyword)}`) // 글씨 깨짐 방지를 위해 인코딩
            .then(
                (res) => {
                    callback(res.data);
                }
            )
            .catch(
                (err) => {
                    console.error("상품 검색 실패:", err);
                    errorCallback(err);
                }
            );
    },

    // 추천 검색어 가져오기
    getSuggestions: function(keyword, callback, errorCallback) {
        axios
            .get(`${API_PRODUCT_URL}/search?keyword=${encodeURIComponent(keyword)}`)
            .then(
                (res) => {
                    // 상품명만 추출하여 반환
                    const suggestionList = res.data?.map(product => product.productName) || []; // data가 없는 경우 빈 배열 반환
                    callback(suggestionList);
                }
            )
            .catch(
                (err) => {
                    console.error("추천 검색어 가져오기 실패:", err);
                    errorCallback(err);
                }
            );
    },

    // 특정 상품 상세 정보 가져오기
    getProductById: function(productId, callback, errorCallback) {
        axios
            .get(`${API_PRODUCT_URL}/${productId}`)
            .then(
                (res) => {
                    callback(res.data);
                }
            )
            .catch(
                (err) => {
                    console.error("상품 상세 정보 가져오기 실패:", err);
                    errorCallback(err);
                }
            );
    },

    getSearchProduct: function(keyword, callback, errorCallback) {
        axios
            .get(`${API_PRODUCT_URL}/search?keyword=${encodeURIComponent(keyword)}`)
            .then(
                (res) => {
                    callback(res.data);
                }
            )
            .catch(
                (err) => {
                    console.error("상품 검색 실패:", err);
                    errorCallback(err);
                }
            );
    },
};

export default apiProductService;