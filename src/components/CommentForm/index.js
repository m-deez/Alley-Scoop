import React, { useState } from "react";
import "./styles.css";
import * as PostService from "../../api/PostService";
import { func, string } from "prop-types";

const CommentForm = ({ id, getCommentsAgain, getPostsAgain }) => {
    const [user, setUser] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newComment = { user, body, id };
      
        const res = await PostService.createComment(id, newComment);
        if (res.status === 201) {
            setUser("");
            setBody("");
            getCommentsAgain(id);
            getPostsAgain();
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="CommentForm">
            <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                type="text"
                name="user"
                placeholder="SIGNATURE"
            />
            <input
                onChange={(e) => setBody(e.target.value)}
                value={body}
                type="text"
                name="body"
                placeholder="BODY"
            />
            <button onClick={handleSubmit}>Comment</button>
        </div>
    );
};
CommentForm.protoTypes = {
    id: string.isRequired,
    getPostsAgain: func,
};
export default CommentForm;