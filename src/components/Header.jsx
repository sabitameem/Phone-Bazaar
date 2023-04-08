import React, { useState } from 'react';
import { DevicePhoneMobileIcon, XMarkIcon,Bars3BottomRightIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='bg-gray-100 px-4 py-5 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
{/* logo section */}
                   <Link to='/' className='inline-flex items-center'>
                       <DevicePhoneMobileIcon className="h-10 w-10 text-orange-500" />
                            <p className='text-3xl font-bold tracking-wide'>Phone<span className='text-orange-500'>Bazaar</span></p>
                  </Link>

{/* nav item section */}
             <ul className='items-center space-x-8 lg:flex hidden'>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Home</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/shop'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >Shop</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/about'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >About Us</NavLink>
                </li>
             </ul>
{/* nav item for mobile device */}
       <div className='lg:hidden'>
          <button
          aria-label='Open Menu'
          title='Open Menu'
          onClick={()=> setIsMenuOpen(true)}
          >
               <Bars3BottomRightIcon className='w-5 text-gray-600'></Bars3BottomRightIcon>
          </button>

          {
            isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link to='/' className='inline-flex items-center'>
                      <DevicePhoneMobileIcon className="h-10 w-10 text-orange-500" />
                      <p className='text-3xl font-bold tracking-wide'>Phone<span className='text-orange-500'>Bazaar</span></p>
                      </Link>
                    </div>
                      {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/shop'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-500'
                      >
                        Shop
                      </Link>
                      </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200  hover:text-orange-500'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
            

       </div>

                 
                    
                
            </div>
        </div>
    );
};

export default Header;