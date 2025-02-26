import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiService from "./apiService";

const PostDetail = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        apiService.getPostById(postId, setPost, setErr);
    }, [postId]);

    if (!post) {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">로딩 중...</span>
                        </div>
                        <p className="mt-3">게시물 불러오는 중입니다.</p>
                    </div>
                </div>
            </div>
        );
    }

    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            apiService.deletePost(postId, "삭제 성공", "삭제 실패");
            navigate("/");
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title display-6 mb-4">{post.postTitle}</h2>
                            <p className="card-text lead mb-5">{post.postContent}</p>

                            <div className="d-flex justify-content-end gap-2">
                                {/* 수정 버튼 */}
                                <Link to={`/posts/edit/${postId}`} className="text-decoration-none">
                                    <button className="btn btn-warning">
                                        <i className="bi bi-pencil-fill me-1"></i> 수정
                                    </button>
                                </Link>

                                {/* 삭제 버튼 */}
                                <button onClick={handleDelete} className="btn btn-danger">
                                    <i className="bi bi-trash-fill me-1"></i> 삭제
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;