import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/products";

const ApiProductService = {
    // 상품 검색 결과 가져오기
    getProducts: function(keyword, callback, errorCallback) {
        axios
            .get(`${API_BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`)
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
            .get(`${API_BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`)
            .then(
                (res) => {
                    // 상품명만 추출하여 반환
                    const suggestionList = res.data?.map(product => product.productName) || [];
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
            .get(`${API_BASE_URL}/${productId}`)
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
    }
};

export default ApiProductService;