
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565120130287-96c1e8ec6a87?fit=crop&w=1920&q=80)' }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center flex-col text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            We Engineer Buyer Confidence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl mb-6 max-w-2xl"
          >
            Landscapes that accelerate your sales before the brochure does.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Softscape", desc: "Lush plantings designed for impact." },
            { title: "Hardscape", desc: "Paths, walls, and features built for longevity." },
            { title: "Vertical Gardens", desc: "Living walls that command attention." },
            { title: "Moss Walls", desc: "Zero-maintenance luxury moss installations." },
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="mb-6 text-lg">Let OneScape create landscapes that sell your vision.</p>
        <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-xl hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
}
