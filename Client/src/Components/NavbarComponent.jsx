import React from 'react';
import style from '../Styles/Home.module.css';
import Logo from '../assets/logo.svg';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Charts', to: 'Charts' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (to) => {
    if (location.pathname === '/') {
      scroller.scrollTo(to, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    } else {
      navigate('/');

      // Wait a moment for homepage to render before scrolling
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          offset: -80,
          duration: 500,
        });
      }, 100);
    }
  };

  return (
    <>
      <Navbar
        fluid
        rounded
        className={`${style.bg} sticky top-0 z-50 bg-white shadow-sm`}
      >
        <NavbarBrand href="#">
          <img src={Logo} className="mr-2 h-10" alt="Logo" />
          <span
            className="text-yellow-400 text-3xl font-bold"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Excel
          </span>
          <span
            className="text-blue-900 text-2xl font-bold"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            lytics
          </span>
        </NavbarBrand>

        <div className="flex md:order-2 gap-2">
          <Button
            className="bg-blue-500 !text-white hover:bg-blue-800 font-medium hidden md:block"
            onClick={() => navigate('/auth')}
          >
            Get Started
          </Button>
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-12 items-start md:items-center">
            {navItems.map(({ name, to }) => (
              <span
                key={name}
                onClick={() => handleNavClick(to)}
                className="cursor-pointer text-zinc-700 hover:text-blue-700 text-base font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
