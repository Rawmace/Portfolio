// src/app/blog/[id]/page.tsx
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface PostType {
  _id: string;
  title: string;
  content: string;
  backgroundImage?: string;
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  // Await params before using them
  const { id } = await params;

  await dbConnect();

  const post = (await Post.findById(id).lean()) as PostType | null;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto my-12 p-6 text-center text-red-600">
        Post not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-6">
      <Link
        href="/blog"
        className="text-teal-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      {post.backgroundImage && (
        <div
          className="h-64 w-full bg-cover bg-center rounded-lg mb-8 shadow-md"
          style={{ backgroundImage: `url(${post.backgroundImage})` }}
        />
      )}

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
