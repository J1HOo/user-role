
// ProductSearch
// ProductDetail
// 작성된 api 호출
// 분리하여 기능 사용

// 1. getProducts(keyword)
// 2. getSuggestions(keyword)
// 3. getProductById(keyword)

import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/api/products";


/*
apiProductService.js:27  Uncaught (in promise) TypeError: errCallback is not a function
    at apiProductService.js:27:1
    errCallback -> 함수가 아니면 문제가 발생
    err 의 경우 매개변수 이름으로 전달받아서 작성 XX


    AI 학습의 도움을 받을 경우

    기능명칭:
            function (callback, errCallback) {
                // 메인기능명칭을 호출할 경우 수행할 기능 작성
            }

       ===> 여기서 errCallback 의 경우 백엔드에서 문제가 생겼을 때
            해결해야할 문제
            매개변수 명칭으로 받아오지 않음
            err 관련 매개변수는 받아오지 않음 XXX
    바른 예제
            기능명칭:
            function (keyword) {
                // 메인기능명칭을 호출할 경우 수행할 기능 작성
            }


*/

const apiProductService = {
    getProducts:
        function (setProducts) {
            axios
                .get(API_PRODUCT_URL)
                .then( // 백엔드 연결 성공
                    (res) => {
                        console.log("data : " , res.data);
                        setProducts(res.data);
                    }
                )
                .catch( // 백엔드  연결 실패
                    (err) => {
                        alert("백엔드에서 문제가 발생했습니다.");
                        console.error("err 발생한 문제를 개발자만 확인할 수 있도록 설정", err);
                    }
                )
        },
    getSuggestions:
        function (value, setSugs, setShow) {
            axios
                .get(`${API_PRODUCT_URL}/search?keyword=${value}`)
                .then(      // 백엔드 연결 성공
                    (res) => {
                        const 제안리스트 = res.data?.map(p => p.productName) || [];
                        setSugs(제안리스트);
                        setShow(true);
                    })
                .catch(     // 백엔드 연결 실패
                    (err) => {
                        // console.log 일 경우에는
                        // function () 소 괄호 내부에 err 작성해야하지만
                        // console.error 경우에는
                        // function () 소 괄호 내부에 err 작성할 필요 없음
                        console.error("추천 검색어 동작 실행 실패 : ", err);
                        setSugs([]);
                    }
                )
        },
    getProductById:
        function (productId, setProduct) {
            axios
                .get(`${API_PRODUCT_URL}/${productId}`)
                .then(
                    (res) => {
                        setProduct(res.data);  // res 는 변수이름을 ABC 나 XYZ 사용 가능하지만 .data 메서드나 변수명으로 활동하는 기능이기 때문에 이름 변경 불가
                    }
                )
                .catch(
                    (err) => {
                        console.error("백엔드 연결 실패 : ", err)
                        alert("백엔드에서 데이터 조회를 실패했습니다.");
                    }
                )
        },
    getSearchProduct:
        function (keyword, setProducts) {
            axios
                .get(`http://localhost:8080/api/products/search?keyword=${keyword}`)
                .then(
                    (res) => {
                        setProducts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log("검색 실패 : ", err)
                        setProducts([]); // 기존에 검색된 데이터가 있다면 지워버리기
                    }
                )
        },
    불러올기능명칭:
        function (keyword, setProducts) {
            axios
                .get(`http://localhost:8080/api/products/search?keyword=${keyword}`)
                .then(
                    (res) => {
                        setProducts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log("검색 실패 : ", err)
                        setProducts([]); // 기존에 검색된 데이터가 있다면 지워버리기
                    }
                )
        }
}
export default apiProductService;
