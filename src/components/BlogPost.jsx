// src/components/BlogPost.js
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = ({ title, date, author, content }) => {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className="blog-post">
      <header>
        <h1>{title}</h1>
        <div className="meta">
          <span className="date">{date}</span>
          <span className="author">By {author}</span>
        </div>
      </header>
      <div className="content">
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
