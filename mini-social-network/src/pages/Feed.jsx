import React, { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import Post from "../components/Post";
import Profile from "../components/Profile";
import Header from "../components/Header";

function Feed({ user }) {
    const [posts, setPosts] = useState([]);
    const [view, setView] = useState("feed"); // "feed" или "profile"

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
        setPosts(savedPosts);
    }, []);

    const addPost = ({ text, image }) => {
        const newPost = { id: Date.now(), text, user: user.name, likes: 0, image };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    const likePost = (id) => {
        const updatedPosts = posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p);
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header user={user} setView={setView} handleLogout={handleLogout} />
            <main className="max-w-md mx-auto mt-6">
                {view === "feed" && (
                    <>
                        <PostForm addPost={addPost} />
                        {posts.map(post => (
                            <Post key={post.id} post={post} likePost={likePost} />
                        ))}
                    </>
                )}
                {view === "profile" && <Profile user={user} posts={posts} />}
            </main>
        </div>
    );
}

export default Feed;
