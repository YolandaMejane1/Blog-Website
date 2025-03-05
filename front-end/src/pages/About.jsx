import React from 'react';

const About = () => {
  return (
    <div className="container py-8">
      
      <section className="mb-8 text-center ml-4">
        <h1 className="text-8xl font-bold">Explore.Create. <br /> Code.Innovate. </h1>
        <p className="mt-2 text-lg">Our blog is a space for innovators, developers, and tech enthusiasts to <br /> share ideas, explore the latest technology trends and <br /> dive deep into the world of all things code.</p>
      </section>

      
      <section className="flex flex-col lg:flex-row mb-8">
  <div className="lg:w-1/2">
    <img 
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMHRlYW18ZW58MHx8MHx8fDA%3D" 
      alt="Main Image" 
      className="w-full h-auto"
    />
  </div>
  <div className="lg:w-1/2 pl-4 mt-4 lg:mt-0">
    <h3 className="text-3xl font-semibold">Our Story</h3>
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


<section className="mb-8">
  <h3 className="text-xl font-semibold mb-4 ml-5">Latest News</h3>
  <div className="overflow-hidden relative">
    <div className="flex space-x-6 animate-marquee">
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGV2ZW50fGVufDB8fDB8fHww" alt="Tech News #1" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h4 className="font-semibold">Gorilla Hackathon</h4>
        <p className="text-sm">This year's long awaited event is inviting young tech talent to join in their hacking competition.</p>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2glMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Tech News #2" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h4 className="font-semibold">Kodemor DevCon 2025</h4>
        <p className="text-sm">Kodemor is excited to announce its annual upcoming DevCon 2025.</p>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D" alt="Tech News #3" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h4 className="font-semibold">Meet Bongo!</h4>
        <p className="text-sm">The child friendly robot assisting kids with language and math problems.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <img src="https://images.unsplash.com/photo-1564865878688-9a244444042a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" alt="Tech News #3" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h4 className="font-semibold">Tech Socials! yey or nay?</h4>
        <p className="text-sm">A list of our top social media channels for your code funzies.</p>
      </div>
    </div>
  </div>
</section>

      
      <section className="mb-8">
  <h3 className="text-xl font-semibold mb-4">Upcoming Tech Events</h3>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <li className="bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold">Tech Conference 2025</h4>
      <p className="text-sm">Join us at the global tech conference to discuss innovations in the industry.</p>
    </li>
    <li className="bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold">AI Summit</h4>
      <p className="text-sm">An exclusive summit focusing on AI technologies and applications.</p>
    </li>
    <li className="bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold">Automation Workshop</h4>
      <p className="text-sm">A workshop to explore the world of IT automation.</p>
    </li>
    <li className="bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold">AWS Summit</h4>
      <p className="text-sm">An exciting event to introduce the world of cloud services.</p>
    </li>
  </ul>
</section>

    </div>
  );
};

export default About;
