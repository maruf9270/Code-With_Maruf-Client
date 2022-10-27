import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextApi/UserContextApi';
import Avater from '../../Asstes/Images/User-avatar.svg.png'
import Logo from '../../Asstes/Images/logo.png'

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {currentUser,signout} = useContext(UserContext)
    const handleSignout =() =>{
        signout()
        .then(data=>{
            console.log(data);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    console.log(currentUser);

    return (
        
        <div>
          {/* Navber section starts frmo here */}
                    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-primary my-6 rounded-md">
                        <div className="relative flex items-center justify-between">
                            <Link
                            to='/'
                            aria-label="Code With Maruf"
                            title="Code With Maruf"
                            className="inline-flex items-center"
                            >
                           <img src={Logo} alt=""  className='w-[20%] rounded-full'/>
                            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                                Code With Maruf
                            </span>
                            </Link>
                            <ul className="flex items-center hidden space-x-8 lg:flex">
                           
                            <li>
                                <Link
                                to='/courses'
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-purple-400"
                                >
                                Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                               to='/blog'
                                aria-label="Blog"
                                title="Blog"
                                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-purple-400"
                                >
                                Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to='/faq'
                                aria-label="FAQ"
                                title="FAQ"
                                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-purple-400"
                                >
                                FAQ
                                </Link>
                            </li>
                              {/* Log in link */}
                            {
                                currentUser?.uid ? <>
                                 <li >
                                        <Link title={currentUser?.displayName ? currentUser.displayName : 'No name'} >
                                        {currentUser?.photoURL  ? <img className='w-[50px] h-[50px] rounded-full' src={currentUser.photoURL} alt="" />: <img className='rounded-full h-[50px] w-[50px] '  src={Avater} alt='user Profile'/>}
                                        
                                        </Link>
                                       

                                    </li>
                                <li>
                                    <Link onClick={handleSignout} 
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign Out"
                                    title="Sign Out">Sign Out</Link>
                                    </li>
                                   
                                    </>
                                    :  <>
                                    <li>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Log-In"
                                        title="Log-In"
                                        >
                                        Log-In
                                        </Link>
                                    </li>
                                   
                                    <li>
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                        >
                                        Sign up
                                        </Link>
                                    </li>
                                    </>
                            }
                          
                            <li>
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>Light</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                                <span>Dark</span>
                            </label>
                            </li>
                            </ul>
                            <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                        >
                                         <img src={Logo} alt=""  className='w-[30%]'/>
                                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                            Code With Maruf
                                        </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                        >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                        </button>
                                    </div>
                                    </div>
                                    <nav>
                                    <ul className="space-y-4">
                                        <li>
                                        <Link
                                            to='/courses'
                                            aria-label="Our Courses"
                                            title="Courses"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-purple-400"
                                        >
                                            Courses
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            to='/blog'
                                            aria-label="Our product"
                                            title="Our product"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-purple-400"
                                        >
                                            Blog
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                          to='/faq'
                                            aria-label="Blog"
                                            title="Blog"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-purple-400"
                                        >
                                           FAQ
                                        </Link>
                                        </li>
                                        
                                        {
                                currentUser?.uid ? <>
                                <li className='flex items-center'>
                                        <Link title={currentUser?.displayName ? currentUser.displayName : 'No name'} className='mr-2' >

                                        {currentUser?.photoURL  ? <img className='w-[50px] h-[50px] rounded-full' src={currentUser.photoURL} alt="" />: <img className='rounded-full h-[50px] w-[50px] '  src={Avater} alt='user Profile'/>}
                                        
                                        </Link>
                                       

                                    <Link onClick={handleSignout} 
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign Out"
                                    title="Sign Out">Sign Out</Link>
                                    </li>
                                    
                                    </>
                                    :  <>
                                    <li>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Log-In"
                                        title="Log-In"
                                        >
                                        Log-In
                                        </Link>
                                    </li>
                                   
                                    <li>
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                        >
                                        Sign up
                                        </Link>
                                    </li>
                                    </>
                            }
                                    </ul>
                                    </nav>
                                </div>
                                </div>
                            )}
                            </div>
                        </div>
                        </div>

          {/* Navber section ends here */}
        </div>
    );
};

export default Navber;