// src/app/blog/page.tsx
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface PostType {
  _id: string;
  title: string;
  content: string;
  backgroundImage?: string;
  tags?: string[];
}

export default async function BlogPage() {
  await dbConnect();

  const posts = (await Post.find({}).lean()) as unknown as PostType[];

  if (!posts?.length) {
    return (
      <div className="p-6 text-center text-gray-500">
        No blog posts yet.
      </div>
    );
  }

  return (
    <>
    <div className="pt-16"> 
        <h1 className="text-3xl font-bold mb-6 text-center">
          👱 MY Curated BLOGGS ehhh!!!
        </h1>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group block border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Background Image */}
            {post.backgroundImage ? (
              <div className="h-48 w-full relative overflow-hidden">
                <Image
                  src={post.backgroundImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional overlay for text contrast */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ) : (
              <div className="h-48 w-full bg-gray-200" />
            )}

            <div className="p-4 flex flex-col gap-2">
              {/* Title */}
              <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>

              {/* Tags */}
              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-teal-100 text-teal-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Excerpt */}
              <div className="text-gray-700 line-clamp-4 mt-2">
                <ReactMarkdown>
                  {post.content.length > 200
                    ? post.content.substring(0, 200) + "..."
                    : post.content}
                </ReactMarkdown>
              </div>

              {/* Read more link */}
              <Link
                href={`/blog/${post._id}`}
                className="mt-2 inline-block text-teal-600 hover:underline font-semibold"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
