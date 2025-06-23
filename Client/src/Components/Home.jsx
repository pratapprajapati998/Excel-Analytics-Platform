import React from 'react';
import { useState } from 'react'
import image from '../assets/Home.png'
import style from '../Styles/Home.module.css'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


function Home() {
//   const navigate = useNavigate();
//   const handleGetStarted = () =>{
// navigate('/auth');
//   // You can add any additional logic here if needed
//   }
  return (
    <main>
    <section className={`${style.bg} py-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between`}>
      {/* Left Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
          <span className="text-blue-700">Excellytics</span> <span className='text-black'>transforms your Excel data into </span><br />
          <span className="text-yellow-400">interactive charts</span> <span className='text-black'>& smart insights</span>
        </h1>
        <p className="dark:text-slate-500 text-xl font-semibold md:text-xl mb-6">
          Upload Excel files, choose chart types, generate downloadable graphs, and get AI-powered insights — all in one dashboard.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link to="/auth">
          <Button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-lg px-6 py-3 rounded-lg">
            Get Started
          </Button></Link>
          <ScrollLink
                to="about" // this should match the id of the target section
                smooth={true}
                duration={500}
                offset={-80} // adjust for navbar height if needed
              >
  <Button color="gray" className="font-medium text-lg px-6 py-3 rounded-lg border border-gray-300">
    Learn More
  </Button>
</ScrollLink>

        </div>
      </div>

      {/* Right Side Image */}
      <div className="mb-10 md:mb-0">
        <img
          src={image}
          alt="Data Analysis Illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
    </main>
  );
}

export default Home;

