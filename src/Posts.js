// src/Posts.js
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h1>Posts</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
