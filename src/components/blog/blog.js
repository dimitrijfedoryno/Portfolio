import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import posts from './postsData.json';
import './blog.css'; // Import custom CSS for additional styles

const Blog = () => {
  return (
    
  <Container fluid className="about-section">
    <Container>
    <div className="container py-4">
      <h1 className="text-center mb-5">Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5">{post.title}</h2>
                <p className="card-text text-muted">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  </Container>
  );
};

export default Blog;
