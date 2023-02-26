import React from 'react';
import { Link } from 'react-scroll';
// import nav data
import { navData } from '../data';

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className='flex gap-x-[58px] cursor-pointer'>
       
       
            <li >
              <Link to="hero" smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                Home
              </Link>
            </li>
            <li >
              <Link to='about' smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                About
              </Link>
            </li>
            <li >
              <Link to='gallery' smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                Gallery
              </Link>
            </li>
            <li >
              <Link to='interveiw' smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                Interview
              </Link>
            </li>
            <li >
              <Link to='testimonials' smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                Articles
              </Link>
            </li>
            <li >
              <Link to='contact' smooth={true} duration={500}
                className='link hover:border-b-2 hover:border-dark transition duration-300'
                
              >
                Contact
              </Link>
            </li>
    
       
      </ul>
    </nav>
  );
};

export default Nav;
