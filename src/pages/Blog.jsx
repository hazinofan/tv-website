import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { trackPageVisit, trackMouseClick, trackButtonClick, trackScrollDepth } from "../utils/trackingService"; // ✅ Import tracking functions

export default function Blog() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        trackPageVisit("/blog");   // ✅ Track Page Visit
        trackScrollDepth("/blog"); // ✅ Track Scroll Depth
    }, []);

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
                const language = i18n.language;
                const res = await fetch(`/locales/blogs_${language}.json`);
                if (!res.ok) {
                    throw new Error('Error Fetching the Data');
                }
                const data = await res.json();
        
                setBlogs(data.blogs || []); 
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, [i18n.language]);

    return (
        <>
        <Helmet>
        <title>Blog Platinium IPTV - Séries TV, Films HD et Films pour Adultes</title>
        <meta
            name="description"
            content="Découvrez les derniers articles de blog sur les séries TV, films HD, films pour adultes et contenus liés à l'IPTV sur le blog Platinium IPTV. Restez à jour sur le divertissement !"
        />
        <meta name="keywords" content="blog, séries TV, films HD, films pour adultes, IPTV, divertissement" />
        </Helmet>

        {/* ✅ Track Mouse Clicks */}
        <div 
            className="mt-32"
            onClick={(e) => trackMouseClick("/blog", e.clientX, e.clientY)}
        >
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1
                        className="mb-12 text-3xl font-extrabold text-center text-purple-600 md:text-5xl lg:text-6xl"
                        data-aos="fade-down"
                        data-aos-delay="400"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-700"
                        >
                            {t('blog.h1')}
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-down" data-aos-delay="400">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="group w-full border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="overflow-hidden rounded-t-2xl">
                                    <img
                                        src={blog.blogImage}
                                        alt={blog.title}
                                        className="w-full object-cover h-56 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 bg-white group-hover:bg-gray-900 transition-all duration-300 rounded-b-2xl">
                                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white leading-8 mb-3">
                                        {blog.title}
                                    </h4>
                                    <p className="text-gray-600 group-hover:text-gray-300 leading-6 mb-6">
                                        {blog.description}
                                    </p>
                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="text-indigo-600 group-hover:text-red-500 font-semibold text-lg transition-all duration-300"
                                        onClick={() => trackButtonClick(`read-blog-${blog.title.replace(/\s+/g, '-')}`)} // ✅ Track Blog Click
                                    >
                                        En savoir plus..
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal SEO Links */}
            <div className="internal-links my-10 hidden">
                <p>Discover more on our <Link to="/blog">IPTV Blog</Link>, where we share insights and updates about the latest in IPTV technology.</p>
                <p>Learn about the variety of <Link to="/produits">IPTV packages</Link> we offer, tailored to fit every customer’s needs.</p>
                <p>Need assistance? Visit our <Link to="/contact">contact page</Link> for support or inquiries.</p>
            </div>
            
            {/* External SEO Links */}
            <div className="external-links my-10 hidden">
                <p>Stay informed with the latest IPTV news at <a href="https://www.guru99.com/best-iptv-services.html" target="_blank" rel="noopener noreferrer">IPTV News</a>.</p>
                <p>Find out more about how <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">PayPal</a> secures your online payments.</p>
                <p>Find out more about how <a href="https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9vision_IP" target="_blank" rel="noopener noreferrer">PayPal</a> secures your online payments.</p>
            </div>
        </div>
        </>
    );
}
