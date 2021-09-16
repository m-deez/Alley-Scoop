import React, { Component } from "react";
import PropTypes from "prop-types";
import Points from "../points";
import "./styles.css";

class Posts extends Component {
  render() {
    return (
      <div className="postsInput">
        <input type="text" name="post" placeholder="Post" />
        <input type="text" name="player" placeholder="Player" />
        <button>Post</button>
      </div>
    );
  }
}
export default Posts;
