import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import posts from './postsData.json';
import { remark } from 'remark';
import html from 'remark-html';
import './blog.css'; // Import custom CSS for additional styles

const Post = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    if (post) {
      const processContent = async () => {
        const processedContent = await remark().use(html).process(post.content);
        setContentHtml(processedContent.toString());
      };

      processContent();
    }
  }, [post]);

  if (!post) {
    return <div className="container py-4">Post not found</div>;
  }

  return (
    <div className="blog-container" style={{ marginTop: '60px' }}>
    <div className="container blog-container py-4">
      <h1 className="mb-4">{post.title}</h1>
      <div className="content prispevek" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
    </div>
  );
};

export default Post;
