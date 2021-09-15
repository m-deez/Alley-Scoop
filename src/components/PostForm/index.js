import React, { useState } from "react";
import "./styles.css";
import { func } from "prop-types";
import * as PostService from "../../api/PostService";

const PostForm = ({getPostsAgain}) => {
    const [article, setAriticle] = useState("");
    const [post, setPost] = useState("");
    const [user, setUser] = useState("");
    
    const handleSubmit = async () => {
        let newPost = { article, post, user };
        const res = await PostService.create(newPost);

        if(res.status === 201) {
            setAriticle("");
            setPost("");
            setUser("");
            getPostsAgain();

        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="posts-input">
            <input
                onChange={(e) => setAriticle(e.target.value)}
                value={article}
                type="text"
                name="article"
                placeholder="ARTICLE"
            />
            <input
                onChange={(e) => setPost(e.target.value)}
                value={post}
                type="text"
                name="post"
                placeholder="POST"
            />
            <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                type="text"
                name="user"
                placeholder="USER"
            />
            <button onClick={handleSubmit}>Post</button>
        </div>
    )
};
PostForm.propTypes = {
    getPostsAgain: func,
};

export default PostForm;