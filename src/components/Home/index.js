import React, { useEffect, useState } from "react";
import PostForm from "../PostForm";
import HomePage from "../homePage/HomePage";
import * as PostService from "../../api/PostService";
import Post from "../Post"
const Home = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        let res = await PostService.getAll();
        if (res.status === 200) {
            setPosts(res.data.data.reverse());
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return(
        <div>
            <div>
                <HomePage />
                <PostForm getPostsAgain={() => fetchPosts()} />
                {posts.map((post) => {
                    // console.log("WHICH DATA AM I USING: ", post);
                    return (
                        <Post
                            article={post.article}
                            post={post.post}
                            player={post.player}
                            // postComments={post.comments}
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
export default Home;