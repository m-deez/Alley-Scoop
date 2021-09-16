import React, { useState } from "react";
import "./styles.css";
import * as PostService from "../../api/PostService";
import { func, string } from "prop-types";

const Comment = ({ id, user, body, getCommentsAgain, commentId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setUser] = useState(user);
    const [editedBody, setBody] = useState(body);

    const handleEdit = async () => {
        console.log("handleedit");
        setIsEditing(!isEditing);
        //meaning submit is showing
        if (isEditing) {
            let editedPost = {
                user: editedUser,
                body: editedBody,
            };
            await PostService.updateComment(id, commentId, editedPost);
            getCommentsAgain(id);
        }
    };

    const handleDelete = async () => {
        await PostService.removeComment(id, commentId);
        getCommentsAgain(id);
    };

    return (
        <div className="comment-sec">
            <span className="entry">
                 {!isEditing && <b>{user}</b>}
                 {isEditing && (
            <input
            onChange={(e) => setUser(e.target.value)}
            value={editedUser}
            type ="text"
            name="user"
            placeholder="User"
            />
        )}
                     :
                    {!isEditing && <span> {body}</span>}
                    {isEditing && (
                        <input
                            onChange={(e) => setBody(e.target.value)}
                            value={editedBody}
                            type="text"
                            name="body"
                            placeholder="BODY"
                        />
                    )}
            </span>
            <span className="comment-buttons">
                <button onClick={handleEdit}>
                    {isEditing ? "SUBMIT" : "EDIT"}
                </button>
                <button onClick={handleDelete}>DELETE</button>
            </span>
        </div>
    )
};
Comment.propTypes = {
    id: string.isRequired,
    user: string.isRequired,
    body: string.isRequired,
    commentId: string.isRequired,
    getPostsAgain: func,
};

export default Comment;