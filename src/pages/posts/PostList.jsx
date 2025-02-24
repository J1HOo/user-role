import {useEffect, useState} from "react";
import apiService from "./apiService";
import {Link} from "react-router-dom";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [keyword, setKeyword] = useState("");

    // keyword를 통해 가져온 추천 검색어 목록
    const [sugs, setSugs] = useState([]); // 추천 검색어 목록
    const [show, setShow] = useState(false); // 추천 검색어 목록 보이기 여부

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);

        if (value.trim()) {
            apiService.suggestedPosts(
                value,
                (suggestions) => {
                    setSugs(suggestions);
                    setShow(true);
                },
                (err) => {
                    console.error(err);
                    setSugs([]);
                    setShow(false);
                }
            );
        } else {
            setSugs([]);
            setShow(false);
        }
    };

    const handleSugClick = (sug) => {
        setKeyword(sug);
        setShow(false);
    };


    useEffect(() => {
        apiService.getAllPosts(setPosts, setErr);
    }, []);

    function handleSearch() {
        if (keyword.trim() === "") {
            alert("검색어가 없습니다.")
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
                    onChange={handleChange}
                    onMouseDown={() => setTimeout(() => setShow(false), 200)}
                />
                {show && sugs.length > 0 && (
                    <ul>
                        {sugs.map((sug, index) => (
                            <li key={index} onClick={() => handleSugClick(sug)}>
                                {sug}
                            </li>
                        ))}
                    </ul>
                )}

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
}

export default PostList;
