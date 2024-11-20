import React from 'react'
import { Link } from 'react-router-dom';

export default function post({post}) {
  console.log('Post received:', post);
  
return (
    <div>
        
        <div className="max-w-screen-lg mx-auto px-4 py-8">
        {/* Post 1 */}
        <div className="flex flex-col md:w-2/3 md:flex-row items-center bg-white border rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="w-full md:w-1/3 bg-gray-200 h-48">
            <div className="flex items-center justify-center h-full text-gray-500">
              800 x 400
            </div>
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="mt-2 text-gray-600">
              {post.content}
            </p>
            <Link to={`/posts/${post._id}`}>
  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Read More
  </button>
</Link>


            
           
          </div>
        </div>

        
       
      </div>
    </div>
  )
}
