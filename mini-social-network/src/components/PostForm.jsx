import React, { useState } from "react";

function PostForm({ addPost }) {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text && !image) return;
        addPost({ text, image });
        setText("");
        setImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="mb-4 bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
            <textarea
                className="w-full border p-2 mb-2"
                placeholder="Что у вас нового?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input type="file" onChange={handleImageChange} className="mb-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Опубликовать</button>
        </form>
    );
}

export default PostForm;
