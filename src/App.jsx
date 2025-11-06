import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./assets/components/PostForm";
import PostList from "./assets/components/PostList";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://pcit9-backend.onrender.com/api/posts");
      setPosts(response.data.reverse()); // latest first
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Add new post and refresh list
  const addPost = async (newPost) => {
    try {
      await axios.post("https://pcit9-backend.onrender.com/api/posts", newPost);
      fetchPosts();
    } catch (err) {
      console.error("Error adding post:", err);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Facebook-Style Posts</h1>
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}
