import React, { useState } from "react";
import "./styles.css";
import propTypes from "prop-types";
import { func,  } from "prop-types";
import * as PostService from "../../api/PostService";

const PostForm = ({getPostsAgain, user}) => {
    const [article, setArticle] = useState("");
    const [post, setPost] = useState("");
    const [player, setPlayer] = useState("");
    // const [user, setUser] = useState({});
    
    const handleSubmit = async (props) => {
        let newPost = { article, post, player, user: user._id };
        const res = await PostService.create(newPost);

        if(res.status === 201) {
            setArticle("");
            setPost("");
            setPlayer("");
            // setUser({user})
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
    // auth: PropTypes.object.isRequired,
};

export default PostForm;