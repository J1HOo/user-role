import axios from "axios";
// axios. 작성했던 기능을 모아서 설정한다음 각 jsx 파일로 전달

const API_POST_URL = "http://localhost:8080/api/posts";
// 스프링부트 실행 포트 restcontroller 에서 requestMapping 에 작성한 api 를 그대로 작성


const apiService = {
    // 외부에서 사용할 메서드 명칭   기능설정 (파라미터값){ 기능작성}
    getAllPosts:
        function (setPosts, setErr) {
            axios.get(API_POST_URL)
                .then((res) => {
                    setPosts(res.data);
                })
                .catch((err) => {
                    setErr(err);
                });
        },

    getPostById:
        function (postId, setPost, setErr) {
            axios.get(`${API_POST_URL} + ${postId}`)
                .then((res) => {
                    setPost(res.data);
                })
                .catch((err) => {
                    setErr(err);
                });

        },

    searchPosts:
        function (keyword, callback, errorCallback) {
            // encodeURIComponent -> 영어, 숫자 이외 값이 왔을 때 문제가 생길 경우 UTF-8 로 한글 깨짐 없도록 설정
            // 예전 코드에선 필수 였으나, 근래 필수는 아님
            axios.get(`${API_POST_URL}/search?keyword=${encodeURIComponent(keyword)}`)
                .then(res => callback(res.data))
                .catch(err => errorCallback(err));
        },

    suggestedPosts:
        function (keyword, callback, errorCallback) {
            axios.get(`${API_POST_URL}/search?keyword=${encodeURIComponent(keyword)}`)
                .then((res) => {
                    const suggestions = res.data?.map(post => post.postTitle) || [];
                    callback(suggestions);
                })
                .catch((err) => {
                    errorCallback(err);
                });
        },
    createPost:
        function (postData, errorCallback) {
            axios.post(API_POST_URL, postData, {
                headers: {"Content-Type": "application/json"}
            })
                .then(res => res.data)
                .catch(err => errorCallback(err));
        },
}


export default apiService;