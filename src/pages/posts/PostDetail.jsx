import {useEffect, useState} from "react";
import apiService from "./apiService";

const PostDetail = () => {
    const postId = 1;
    const [post, setPost] = useState({});
    const [err, setErr] = useState(null);

    useEffect(() => {
        apiService.getPostById(postId,setPost,setErr)
    }, []);


        return (
            <div className="PostDetail-container">
                PostDetail Component
            </div>
        )

    };

export default PostDetail;