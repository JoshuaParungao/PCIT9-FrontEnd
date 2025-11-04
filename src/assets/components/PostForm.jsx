import { useState } from "react";

function PostForm({ onAddPost }) {
  const [form, setForm] = useState({
    author: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.author || !form.content) return;
    onAddPost(form);
    setForm({ author: "", content: "", imageUrl: "" });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="What's on your mind?"
        value={form.content}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL (optional)"
        value={form.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
