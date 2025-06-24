import React from "react";
import { FaEnvelope, FaPhoneAlt, FaClock, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-slate-600 to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="text-white space-y-4">
            <h3 className="text-3xl font-semibold" style={{ fontFamily: '"Anton", sans-serif' }}>
              Get in Touch
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300 }}
            >
              Have questions about features, pricing, or support? We're here to help.
              Reach out to our team and we'll get back to you as soon as possible.
            </p>

            <div className="pt-4 space-y-3 text-lg">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-xl text-violet-300" />
                <span style={{ fontFamily: '"Poppins", sans-serif' }}>pratappraj211@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl text-violet-300" />
                <span style={{ fontFamily: '"Poppins", sans-serif' }}>+91 9569266034</span>
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-xl text-violet-300" />
                <span style={{ fontFamily: '"Poppins", sans-serif' }}>Mon–Fri, 9AM–7PM</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-3 rounded-md font-semibold hover:bg-violet-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/abarna-vijay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/Abarnavijayakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
