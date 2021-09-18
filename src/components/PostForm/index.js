import React, { useState } from "react";
import "./styles.css";
import { func } from "prop-types";
import * as PostService from "../../api/PostService";

const PostForm = ({getPostsAgain}) => {
    const [article, setArticle] = useState("");
    const [post, setPost] = useState("");
    const [player, setPlayer] = useState("");
    
    const handleSubmit = async () => {
        let newPost = { article, post, player };
        const res = await PostService.create(newPost);

        if(res.status === 201) {
            setArticle("");
            setPost("");
            setPlayer("");
            getPostsAgain();

        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="posts-input">
            <input
                onChange={(e) => setArticle(e.target.value)}
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
                onChange={(e) => setPlayer(e.target.value)}
                value={player}
                type="text"
                name="player"
                placeholder="PLAYER"
            />
            <button onClick={handleSubmit}>Post</button>
        </div>
    )
};
PostForm.propTypes = {
    getPostsAgain: func,
};

export default PostForm;