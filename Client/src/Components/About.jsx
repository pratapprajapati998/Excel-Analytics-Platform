import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import About1 from '../assets/team work1.jpg'
import { useNavigate } from 'react-router-dom';
import {
  Info,
  Users,
  Target,
  Eye,
  Star,
  ShieldCheck,
  BarChart3,
  UploadCloud,
} from 'lucide-react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-blue-600 w-6 h-6" />
      <h2 className="text-2xl font-semibold text-black-700">{title}</h2>
    </div>
  );
  const navigate = useNavigate();
  return (
    
    <div id='about' className="relative bg-white overflow-hidden min-h-screen text-[#1a1a1a]">
      {/* Gradient background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Info className="w-7 h-7" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mt-3">
            Discover the story behind Excelytics — our values, our mission, and the innovative journey to unlock the power of Excel analytics for all.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-blue-50 rounded-xl shadow-sm p-6"
        >
          <div>
            <SectionHeader icon={Users} title="Who We Are" />
            <p className="text-gray-700">
              Excelytics is a smart and intuitive platform that transforms your Excel files into powerful, interactive visualizations. Built for speed, simplicity, and clarity, we help individuals and teams make sense of their data without writing a single line of code.
            </p>
          </div>
          <img
            src={About1}
            alt="Team working"
            className="rounded-xl shadow-md w-full object-cover h-[300px]"
          />
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <SectionHeader icon={Target} title="Mission & Vision" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Target className="w-5 h-5" />
                <h3 className="font-bold text-lg">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To democratize data insights by turning raw spreadsheets into powerful dashboards and decisions.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Eye className="w-5 h-5" />
                <h3 className="font-bold text-lg">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To become the go-to platform for intuitive, real-time Excel analytics for businesses globally.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <SectionHeader icon={Star} title="Why Choose DataWise?" />

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
  {[
    {
      icon: UploadCloud,
      title: "User-Friendly",
      desc: "No code needed — simple upload & visualize interface",
    },
    {
      icon: BarChart3,
      title: "Fast Insights",
      desc: "Analyze huge Excel files in seconds",
    },
    {
      icon: Eye,
      title: "Customizable Charts",
      desc: "Tailor 2D/3D visualizations to your needs",
    },
    {
      icon: ShieldCheck,
      title: "Secure",
      desc: "We take your data privacy seriously",
    },
  ].map(({ icon: Icon, title, desc }, i) => (
    <div
      key={i}
      className="bg-white border border-blue-100 rounded-lg p-5 shadow hover:shadow-md transition-all duration-300"
    >
      {/* Icon Container with Background */}
      <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3 ">
        <Icon className="text-blue-700 w-5 h-5" />
      </div>

      {/* Title and Description */}
      <h3 className="font-semibold text-lg mb-1 text-black-700">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  ))}
</div>

        </motion.section>

        {/* Call to Action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 bg-blue-100 rounded-xl p-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-800">Ready to unlock your data?</h2>
          <p className="text-gray-700 mb-4">Join Excelytics and start transforming your spreadsheets into smart insights.</p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate("/auth")}  // or your signup/login route
        >
      Get Started
    </button>
        </motion.div>

      </div> 
    </div>
  );
}

export default About;
