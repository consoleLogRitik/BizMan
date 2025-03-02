import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <div className="flex flex-col text-center items-center justify-center h-screen bg-white text-gray-600">
        <h1 className="text-6xl font-extrabold mb-6">Welcome to <span className="text-lime-500">BizMan</span></h1>
        <p className="text-2xl mb-4">Revolutionizing Retail Management</p>
        <p className="text-md text-center max-w-2xl mb-6">
          BizMan is your ultimate solution for managing inventory, sales, and customers effortlessly. 
          Empower your retail business with cutting-edge technology and streamline your operations in one place.
        </p>
        <button className="bg-lime-600 text-white px-6 py-3 rounded-lg">Request a Demo</button>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Inventory Management</h3>
            <p className="mt-2 text-gray-600">Track your inventory in real-time and manage stock levels efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Sales Analytics</h3>
            <p className="mt-2 text-gray-600">Gain insights into your sales performance with detailed analytics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Customer Management</h3>
            <p className="mt-2 text-gray-600">Manage customer relationships and improve customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg">Our software is designed to streamline your retail operations and boost your business growth.</p>
          <ul className="mt-6 space-y-2">
            <li className="text-gray-700">✔️ User-friendly interface</li>
            <li className="text-gray-700">✔️ 24/7 Customer Support</li>
            <li className="text-gray-700">✔️ Scalable solutions for businesses of all sizes</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="mt-10">
          <blockquote className="text-center italic text-gray-600">
            "BizMan has transformed the way we manage our retail operations. It's intuitive and powerful!"
          </blockquote>
          <p className="mt-2 w-full text-center text-gray-800 font-semibold">- Jane Doe, Retail Manager</p>
        </div>
        <div className="mt-10">
          <blockquote className="text-center italic text-gray-600">
            "BizMan's customer support is exceptional. They are always ready to help!"
          </blockquote>
          <p className="mt-2 w-full text-center text-gray-800 font-semibold">- John Smith, Store Owner</p>
        </div>
        <div className="mt-10">
          <blockquote className="text-center italic text-gray-600">
            "The analytics provided by BizMan have helped us increase our sales significantly."
          </blockquote>
          <p className="mt-2 w-full text-center text-gray-800 font-semibold">- Emily Johnson, Sales Manager</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
