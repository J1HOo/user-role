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
        function (keyword, setPost, setErr) {
        axios.get(`${API_POST_URL}/search?keyword=${encodeURIComponent(keyword)}`)
            .then(res => setPost(res.data))
            .catch(err => setErr(err));
    },

    createPost:
        function (postData, setErr) {
        axios.post(API_POST_URL, postData, {
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.data)
            .catch(err => setErr(err));
    },
}

    export default apiService;