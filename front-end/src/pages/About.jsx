import React from 'react';

const About = () => {
  return (
    <div className="container">
      
      <section
  className="relative h-[80vh] w-screen bg-cover bg-no-repeat bg-center text-white py-10 px-10 "
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
  <div className="lg:w-full  pl-4 mt-4 lg:mt-0 py-5">
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
      <div className="bg-gray-100 p-6 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGV2ZW50fGVufDB8fDB8fHww"
          alt="Tech News #1" 
          className="w-full h-40 object-cover rounded-lg mb-4" 
        />
        <h4 className="font-semibold">Gorilla Hackathon</h4>
        <p className="text-sm">This year's long awaited event is inviting young tech talent to join in their hacking competition.</p>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Tech News #2" 
          className="w-full h-40 object-cover rounded-lg mb-4" 
        />
        <h4 className="font-semibold">Kodemor DevCon 2025</h4>
        <p className="text-sm">Kodemor is excited to announce its annual upcoming DevCon 2025.</p>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D"
          alt="Tech News #3" 
          className="w-full h-40 object-cover rounded-lg mb-4" 
        />
        <h4 className="font-semibold">Meet Bongo!</h4>
        <p className="text-sm">The child friendly robot assisting kids with language and math problems.</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D"
          alt="Tech News #4" 
          className="w-full h-40 object-cover rounded-lg mb-4" 
        />
        <h4 className="font-semibold">Tech for Tomorrow</h4>
        <p className="text-sm">A look at the innovations shaping the tech industry in the coming years.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
