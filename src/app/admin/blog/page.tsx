"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface BlogType {
  _id: string;
  title: string;
  content: string;
  backgroundImage?: string;
  tags?: string[];
}

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const tagsArray = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setBlogs(data);
  }

  function handleBackgroundChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setBackgroundImage(file);
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview(null);
  }

  function handleEdit(blog: BlogType) {
    setEditingId(blog._id);
    setTitle(blog.title);
    setContent(blog.content);
    setTags(blog.tags?.join(",") || "");
    setPreview(blog.backgroundImage || null);
    setBackgroundImage(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setBlogs(blogs.filter((b) => b._id !== id));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tagsArray.join(","));
    if (backgroundImage) formData.append("backgroundImage", backgroundImage);

    try {
      let res: Response;
      if (editingId) {
        // Update blog
        res = await fetch(`/api/posts/${editingId}`, {
          method: "PATCH",
          body: formData,
        });
      } else {
        // Create new blog
        res = await fetch("/api/posts", {
          method: "POST",
          body: formData,
        });
      }

      if (res.ok) {
        setMessage(editingId ? "Blog updated!" : "Blog added!");
        setTitle("");
        setContent("");
        setTags("");
        setBackgroundImage(null);
        setPreview(null);
        setEditingId(null);
        fetchBlogs();
      } else {
        setMessage("Failed to save blog.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred.");
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{editingId ? "Edit Blog" : "Add New Blog"}</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4 rounded bg-gray-50">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundChange}
          className="border p-2 rounded"
        />

        {preview && (
          <div className="mt-2">
            <p className="text-sm mb-1">Preview:</p>
            <Image
              src={preview}
              alt="Background Preview"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        )}

        <textarea
          placeholder="Content (Markdown supported)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded h-48"
          required
        />

        <button
          type="submit"
          className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition"
        >
          {editingId ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}

      {/* Blog List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            {blog.backgroundImage && (
              <Image
                src={blog.backgroundImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
            )}
            <h2 className="text-xl font-bold">{blog.title}</h2>
            {blog.tags && (
              <div className="flex flex-wrap gap-2 mb-2">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
