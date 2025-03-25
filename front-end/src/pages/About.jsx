import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/posts'); 
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div className="container">
      <section
        className="relative h-[70vh] w-screen bg-cover bg-no-repeat bg-center text-white py-10 px-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-6xl mx-auto mt-20 text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Explore. Create. <br /> Code. Innovate.
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            Our blog is a space for innovators, developers, and tech enthusiasts to  
            share ideas, explore the latest technology trends, and dive deep into  
            the world of all things code.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mb-8 w-screen">
        <div className="lg:w-2/3">
          <img 
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D" 
            alt="Main Image" 
            className="w-full h-full py-5 px-5"
          />
        </div>
        <div className="lg:w-screen pl-4 mt-4 lg:mt-0 py-5 w-screen">
          <h3 className="text-3xl font-semibold">Our Story...</h3>
          <p className="mt-2 text-gray-600">
            At KODEMOR, we are committed to providing valuable insights and fostering a community focused on tech education and development.
          </p>

          <h4 className="text-l font-semibold mt-6">Who We Are</h4>
          <p className="mt-2 text-gray-600">
            We are a passionate group of developers and tech enthusiasts dedicated to empowering individuals with the knowledge and tools to thrive in tech.
          </p>

          <h4 className="text-l font-semibold mt-6">Mission</h4>
          <p className="mt-2 text-gray-600">
            Our mission is to form a supportive community to help individuals develop their skills and unlock new opportunities in the tech industry.
          </p>

          <h4 className="text-l font-semibold mt-6">Vision</h4>
          <p className="mt-2 text-gray-600">
            We envision a future where everyone has access to the tools, knowledge, and networks they need to succeed in the tech world.
          </p>
        </div>
      </section>

      <section className="mb-8 w-screen">
        <h3 className="text-3xl font-semibold mb-4 ml-5">Latest Blogs</h3>
        <div className="overflow-hidden relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-marquee">
            {posts.length > 0 ? (
              posts.slice(0, 4).map((post) => (
                <div key={post.id} className="bg-gray-100 p-6 rounded-lg">
                  {post.image_url && (
                    <img
                      src={`http://localhost:5001${post.image_url}`} 
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      onError={(e) => e.target.src = '/assets/nasa-Q1p7bh3SHj8-unsplash.jpg'}
                    />
                  )}
                  <h4 className="font-semibold">{post.title}</h4>
                  <p className="text-sm">{post.content.slice(0, 100)}...</p>
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
