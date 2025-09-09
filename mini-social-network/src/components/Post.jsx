import React from "react";

function Post({ post, likePost }) {
    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <p className="font-bold">{post.user}</p>
            <p className="mb-2">{post.text}</p>
            {post.image && <img src={post.image} alt="post" className="mb-2 rounded" />}
            <button
                className="bg-gray-200 px-3 py-1 rounded"
                onClick={() => likePost(post.id)}
            >
                👍 {post.likes}
            </button>
        </div>
    );
}

export default Post;
