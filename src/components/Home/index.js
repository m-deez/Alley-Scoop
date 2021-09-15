import React, { useEffect, useState } from "react";
import PostForm from "../PostForm";
import HomePage from "../homePage/HomePage";
import * as PostService from "../../api/PostService";

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
            </div>
        </div>
    );
};
export default Home;