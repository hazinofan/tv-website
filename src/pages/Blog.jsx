import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Blog() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/blogs.json');
                if (!res.ok) {
                    throw new Error('Error Fetching the Data');
                }
                const data = await res.json();
                console.log(data);
                setBlogs(data.blogs);
            } catch (error) {
                console.log('Error fetching:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="mt-48 ">
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1
                        className="mb-8 text-3xl font-extrabold text-purple-600 md:text-5xl lg:text-6xl"
                        data-aos="fade-down"
                        data-aos-delay="400"
                    >
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 flex items-center mb-28"
                            style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}
                        >
                            PLATINIUM IPTV BLOG PAGE
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-down" data-aos-delay="400">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="group w-full border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src={blog.blogImage} alt={blog.title} className="rounded-t-2xl w-full" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-800">
                                    <span className="text-red-500 font-semibold mb-3 block"></span>
                                    <h4 className="text-xl text-black hover:text-white font-medium leading-8 mb-5">{blog.title}</h4>
                                    <p className="text-gray-500 leading-6 mb-10">{blog.description}</p>
                                    <Link to={`/blogs/${blog.id}`} className="cursor-pointer text-lg text-indigo-600 font-semibold hover:text-red-600 transition-all duration-300">
                                    En savoir plus..
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
