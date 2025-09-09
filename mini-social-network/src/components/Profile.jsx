import React, { useState, useEffect } from "react";
import Post from "./Post";

function Profile({ user, posts }) {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const filtered = posts.filter(p => p.user === user.name);
        setUserPosts(filtered);
    }, [posts, user]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white p-4 flex items-center shadow">
                <img
                    src={`https://i.pravatar.cc/50?u=${user.id}`}
                    alt="avatar"
                    className="rounded-full mr-4"
                />
                <h1 className="text-xl font-bold">{user.name}</h1>
            </header>

            <main className="max-w-md mx-auto mt-6">
                <h2 className="text-lg font-semibold mb-2">Мои посты</h2>
                {userPosts.length ? (
                    userPosts.map(post => <Post key={post.id} post={post} likePost={() => { }} />)
                ) : (
                    <p>У вас пока нет постов</p>
                )}
            </main>
        </div>
    );
}

export default Profile;
