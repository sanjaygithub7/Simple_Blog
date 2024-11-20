import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
  const [post, setPost] = useState();
  const {id}=useParams()

  useEffect(() => {
  setTimeout(()=>{
    fetchPost()
  },2000)
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/posts/${id}`); // Replace 'id' with dynamic value as needed
      setPost(response.data.post);
      console.log("Fetched Post Data:", response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8">
      {post ? (
        <>
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>

          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <p>
              By <span className="font-medium text-red-700">{post.author}</span>
            </p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>

          {/* Blog Image */}
          <div className="mb-6">
            <img
              src={post.image || "https://via.placeholder.com/800x400"}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Blog Content */}
          <div className="text-gray-700 leading-relaxed">
            <p>{post.content}</p>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800">Tags:</h3>
              <div className="flex flex-wrap space-x-2 mt-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-xl text-black">Loading post details...</p>
      )}
    </div>
  );
}
