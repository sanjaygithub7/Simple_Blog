import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './post';

export default function Content() {
  const [postdata, setpostData] = useState([]);

  useEffect(() => {
    fetchpost();
  }, []);

  // GET all posts
  const fetchpost = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      console.log('API Response:', response.data);
      setpostData(response.data.posts || []); // Extract 'posts' array
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <main className="flex">
      {/* Posts Section */}
      <div className="flex-grow">
        <h1 className="text-4xl font-semibold mt-4 ml-10">Latest Posts</h1>
        {Array.isArray(postdata) && postdata.length > 0 ? (
          postdata.map((item) => <Post key={item._id} post={item} />)
        ) : (
          <p className="text-3xl font-semibold flex justify-center items-center mt-20">
            No posts available
          </p>
        )}
      </div>

      {/* Categories Filter Section */}
      <aside className="w-1/4 p-4 bg-gray-100 border-l border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Filter by Categories</h2>
        <ul className="space-y-2">
          {['Technology', 'Health', 'Education', 'Finance', 'Travel'].map(
            (category) => (
              <li key={category}>
                <button
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  onClick={() => console.log(`Filter by ${category}`)} // Replace with filtering logic
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>
      </aside>
    </main>
  );
}
