import React, { useState } from "react";
import "./styles.css";
import { func } from "prop-types";


class Posts extends Component {
    render() {
        return (
            <div className="postsInput">
                <input 
                    type="text"
                    name="post"
                    placeholder="Post"
                />
                <input
                    type="text"
                    name="player"
                    placeholder="Player"
                />
                <button>Post</button>    
                   

            </div>
        )
    }
}
export default Posts