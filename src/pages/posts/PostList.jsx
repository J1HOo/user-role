import { useEffect, useState } from "react";
import apiService from "./apiService";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        apiService.getAllPosts(setPosts, setErr);
    }, []);

    function handleSearch() {
        if (keyword.trim() === "") {
            apiService.getAllPosts(setPosts, setErr);
        } else {
            apiService.searchPosts(keyword, setPosts, setErr);
        }
    }

    return (
        <div>
            <h2>게시물 목록</h2>

            {/* 검색 입력 필드 */}
            <div>
                <input
                    type="text"
                    placeholder="검색어 입력"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={handleSearch}>검색</button>
            </div>

            {err && <p style={{ color: "red" }}>{err.message}</p>}

            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post.postId}>
                            <h3>{post.postTitle}</h3>
                            <p>{post.postContent}</p>
                            <Link to={`/posts/${post.postId}`}>이동하기</Link>
                        </li>
                    ))
                ) : (
                    <p>게시물이 없습니다.</p>
                )}
            </ul>
        </div>
    );
};

export default PostList;
