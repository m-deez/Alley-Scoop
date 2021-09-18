import React, { useEffect, useState, Component } from "react";
import PostForm from "../PostForm";
import PropTypes from "prop-types";
// import setAuthToken from "../../utils/setAuthToken"


import * as PostService from "../../api/PostService";
import Post from "../Post"
import { getUser } from "../../api/userService";
const Forum = (props) => {
    const [posts, setPosts] = useState([]);
    // const [user, setUser] = useState(getUser);
    // const { user } = props.auth;
    const user = props.user
    console.log(user);
    console.log("props", 
    props)
        


    async function fetchPosts() {
        let res = await PostService.getAll();
        if (res.status === 200) {
            setPosts(res.data.data.reverse());
     
        }
    }

    useEffect(() => {
      console.log("user in forum", user)
        fetchPosts();
    }, []);

    return(
        <div>
            <div>
             
                <PostForm user={user}  getPostsAgain={() => fetchPosts()} />
                {posts.map((post) => {
                    // console.log("WHICH DATA AM I USING: ", post);
                    return (
                        <Post
                            user={user}
                            article={post.article}
                            post={post.post}
                            player={post.player}
                            postComments={post.comments}
                            key={post._id}
                            id={post._id}
                            getPostsAgain={() => fetchPosts()}
                        />
                    );
                })}
            </div>
        </div>
    );
};
// Forum.propTypes = {
    
//     auth: PropTypes.object.isRequired
// };
export default Forum;