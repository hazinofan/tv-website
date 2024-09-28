import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch('/blogs.json');
        const data = await res.json();

        // Debugging log to verify data structure
        console.log('Fetched data:', data);

        const foundBlog = data.blogs.find((item) => item.id === parseInt(id));
        setBlog(foundBlog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div>
        <div role="status" className="flex mt-72 mb-72 justify-center items-center gap-3 text-xl">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only text-white">Loading...</span>
          <p>No Blogs Found</p>
        </div>
      </div>
    );
  }

  // Add console log for debugging
  console.log('Blog details:', blog);

  return (
    <div className="mt-36">
      <div key={blog.id} className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden shadow-xl shadow-gray-600"
          style={{
            minHeight: '300px',
            backgroundImage: `url(${blog.blogImage})`
          }}
          title="Blog image"
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-gray-200 relative top-0 -mt-16 sm:-mt-24 md:-mt-32 p-5 sm:p-10">
              <h1
                className="text-transparent bg-clip-text bg-gradient-to-r text-2xl sm:text-3xl font-semibold to-red-700 from-blue-500 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}
              >
                {blog.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written on: 
                <span className="text-indigo-600 ml-2 font-medium hover:text-red-900 transition duration-500 ease-in-out">
                    {new Date(blog.creationTime).toLocaleDateString()}
                </span>
              </p>
              <p className="text-base leading-8 my-5">{blog.description}</p>
              {blog.content.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <h3 className="text-xl sm:text-2xl text-red-500 font-bold my-5">{paragraph.title}</h3>
                  <p className="text-base leading-8 my-5">{paragraph.text}</p>
                </div>
              ))}
              <Link to='/produits' aria-label="Go to Products Page">
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                {blog.blockquote}
              </blockquote>
              </Link>
              {blog.hashtags?.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
