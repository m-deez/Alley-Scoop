import React, { useState, useEffect } from "react";
import "./styles.css";
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";
import Points from "../points";

function Post({ id, getPostsAgain, article, post, player }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedArticle, setArticle] = useState(article);
  const [editedPost, setPost] = useState(post);
  const [editedPlayer, setPlayer] = useState(player);

  const handleEdit = async () => {
    console.log("handleedit");
    setIsEditing(!isEditing);
    //meaning submit is showing
    if (isEditing) {
      let editedPost = {
        article: editedArticle,
        post: editedPost,
        player: editedPlayer,
      };
      await PostService.update(id, editedPost);
      getPostsAgain();
    }
  };

  const handleDelete = async () => {
    await PostService.remove(id);
    getPostsAgain();
  };

  return (
    <div>
      <div className="posts">
        <div className="top-posts">
          {!isEditing && <h1>{article}</h1>}
          {isEditing && (
            <input
              onChange={(e) => setArticle(e.target.value)}
              value={editedArticle}
              type="text"
              name="article"
              placeholder="ARTICLE"
            />
          )}
          <div>
            <button onClick={handleEdit}>
              {isEditing ? "SUBMIT" : "EDIT"}
            </button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
        <div className="middle-post">
          {!isEditing && <p>{post}</p>}
          {isEditing && (
            <input
              onChange={(e) => setPost(e.target.value)}
              value={editedPost}
              type="text"
              name="post"
              placeholder="POST"
            />
          )}
        </div>
        <div className="bottom-post">
          {!isEditing && <p>{player}</p>}
          {isEditing && (
            <input
              onChange={(e) => setPlayer(e.target.value)}
              value={editedPlayer}
              type="text"
              name="player"
              placeholder="PLAYER"
            />
          )}
        </div>
      </div>
      <div className="points">
        <Points />
      </div>
    </div>
  );
}
Post.propTypes = {
  id: string.isRequired,
  article: string.isRequired,
  post: string.isRequired,
  player: string.isRequired,
  // postComments: array,
  getPostsAgain: func,
};

export default Post;
