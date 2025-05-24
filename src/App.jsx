/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */
import lastLogo from './assets/last.svg'
import dsiLogo from "./assets/dsi_logo_large.png";
import inHouse from "./assets/In-House-Edu-Expo-May25-Dream-Study-International.jpg";
import oneStop from "./assets/one-stop.png";
import whatsapp from "./assets/whatsapp.png";
import { Navigation, Twitter } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
  ChevronDown,
  CircleUserRound,
  PersonStanding,
  GlobeLock,
  BookCheck,
  MapPin,
  MessageCircleHeart,
} from "lucide-react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <nav className="">
        <div className="h-auto lg:h-full w-full bg-[#22254B] text-white flex justify-between items-center pr-10">
          <h1 className="p-5 lg:px-20">
            We're Leading Educational Consultancy in Bangladesh.
          </h1>
          <div className="flex justify-between items-center gap-5">
            <p className='hidden lg:inline-block'>Office Hours: 10:00AM- 07:00PM</p>
            <a href="http://www.facebook.com">
              <Facebook />
            </a>
            <a href="http://www.instagram.com">
              <Instagram />
            </a>
            <a href="http://www.linkedin.com">
              <Linkedin />
            </a>
            <a href="http://www.youtube.com">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 space-y-10  lg:flex justify-between items-center max-h-auto bg-gray-200 px-20 py-10">
          <img src={dsiLogo} alt="dream_study_logo" className="h-20" />

          <div className="flex items-center  ">
            <Phone size={40} color="#005CC5" />
            <p>
              <span className="text-lg font-bold">Call Us:</span> <br />
              +880 14066 99551-4
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Mail size={40} color="#005CC5" />
            <p>
              <span className="text-lg font-bold">Email Us:</span> <br />
              dreamstudyinternational@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Navigation size={40} color="#005CC5" />
            <p>
              <span className="text-lg font-bold">
                Location:
                <br />
                Gulshan 02
              </span>
            </p>
          </div>
        </div>

        <div className="hidden lg:inline-block top-0 z-20 px-20 w-full ">
          <div className=" flex  justify-between bg-gray-800">
            <ul className=" flex list-none m-0 p-0">
              <li>
                <a
                  href="#home"
                  className="block text-white text-center px-4 py-5 hover:text-gray-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="block text-white text-center px-4 py-5 hover:text-gray-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#home"
                  className="block text-white text-center px-4 py-5 hover:text-gray-400"
                >
                  Services
                </a>
              </li>
              <li className="relative group ">
                <a
                  href="#i"
                  className=" text-white text-center px-4 py-5 hover:text-gray-400 flex"
                >
                  Countries <ChevronDown />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute hidden group-hover:block transition duration-150 ease-in-out bg-gray-300 min-w-[160px] shadow-lg z-100 ">
                  <a href="#p" className="block px-4 py-5 text-black">
                    Canada
                  </a>
                  <a href="#p" className="block px-4 py-5 text-black">
                    Australia
                  </a>
                  <a href="#p" className="block px-4 py-5 text-black ">
                    UK
                  </a>
                  <a href="#p" className="block px-4 py-5 text-black ">
                    USA
                  </a>
                </div>
              </li>

              <li>
                <a
                  href="#home"
                  className="block text-white text-center px-4 py-5 hover:text-gray-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="block text-white text-center px-4 py-5 hover:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <button className="btn-primary">Apply now!</button>
          </div>
        </div>
      </nav>

      {/* Main section */}
      <section className=''>
        <div className="text-center mt-20">
          <img
            src={dsiLogo}
            alt="dream_study_logo"
            className="h-20 inline-block"
          />
        </div>

        <section className=" grid grid-cols-1  lg:flex bg-bgImage bg-cover h-full w-full mt-10 ">
          <div className=" w-auto lg:w-7/12 p-10">
            <img src={inHouse} alt="section img" />
          </div>

          <div className="w-auto lg:w-5/12 h-auto p-10">
            <button className="btn-secondary w-full">
              Apply Now
            </button>
            {/* <div className='grid grid-cols-1 m-10'>
                 <input type="text" placeholder='<ChevronDown/> Name' className='text-xl border outline-none p-3 border-sky-100 hover:border-sky-300 rounded-lg'/> 
               </div> */}

            <div className="space-y-4 p-10 bg-white">
              <div className="flex items-center bg-blue-50 border hover:border-blue-400   rounded-lg px-4 py-3">
                <PersonStanding className="text-gray-500 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent font-bold outline-none text-gray-700 w-full placeholder:text-gray-600 "
                />
              </div>

              <div className="flex items-center bg-blue-50 border hover:border-blue-400   rounded-lg px-4 py-3">
                <Phone className="text-gray-500 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-transparent font-bold outline-none text-gray-700 w-full placeholder:text-gray-600 "
                />
              </div>

              <div className="flex  bg-blue-50 border hover:border-blue-400   rounded-lg px-4 py-3">
                <PersonStanding className="text-gray-500 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Last Education:"
                  className="bg-transparent font-bold outline-none text-gray-700 w-full placeholder:text-gray-600 "
                />

                <button className="ml-3 text-gray-500 hover:text-gray-700 focus:outline-none">
                  <ChevronDown size={20} />
                </button>
              </div>

              <div className="flex items-center bg-blue-50 border hover:border-blue-400   rounded-lg px-4 py-3">
                <GlobeLock className="text-gray-500 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Preferred Country"
                  className="bg-transparent font-bold outline-none text-gray-700 w-full placeholder:text-gray-600 "
                />
              </div>
               <button className="btn-secondary w-1/2">Register</button>
            </div>
           
          </div>
        </section>
      </section>

     {/* Dark Mode: One-spot  */}
     <section className="container max-w-full mx-auto bg-gray-200 overflow-hidden ">
        {/* <div className="text-center mt-20">
          <img src={oneStop} alt="one stop section" className="inline-block h-20"/>
        </div> */}
        <div className="flex justify-center items-center h-auto py-10 ">
          <img src={oneStop} alt="one stop section" className="h-20" />
        </div>

        <div className="container max-w-7xl mx-auto py-10 grid grid-cols-1  sm:grid-cols-4">
                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Eligibility Assessment</h3>
                </div>

                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">University & Program Selection</h3>
                </div>

                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Scholarship Application</h3>
                </div>

                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Sponsor Documents Support</h3>
                </div>
                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Bank Statement Support</h3>
                </div>
                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">SOP Letter Writting</h3>
                </div>
                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Visa Application Support</h3>
                </div>
                <div className="oneSpot-card">
                    <BookCheck size={40} />
                    <h3 className="text-xl ">Pre-Departure Information</h3>
                </div>
        </div>
     </section>

     {/* Footer Section */}

     <footer className="container max-w-full mx-auto items-center  bg-gray-100 grid grid-cols-1 lg:grid-cols-3">
          
          <div className="p-20 flex flex-col">
             <img src={dsiLogo} alt="dsiLogo" className=" h-10 sm:h-20 " />
             <p className="py-10 text-lg">We are renowned education consultancy for prospective students who would like to study in CANADA, UK, USA, Australia, Sweden, Netherlands, Denmark & other European Countries.</p>
             <div className="flex gap-4 ">
              <Facebook size = {35} className="bg-sky-200 hover:text-white hover:bg-sky-400 p-2  rounded-2xl"/>
              <Twitter size = {35} className="bg-sky-200 hover:text-white hover:bg-sky-400 p-2 rounded-2xl"/>
              <Linkedin size = {35} className="bg-sky-200 hover:text-white hover:bg-sky-400 p-2 rounded-2xl"/>
              <Youtube size = {35} className="bg-sky-200 hover:text-white hover:bg-sky-400 p-2 rounded-2xl"/>
             </div>
             
          </div>

          <div className="flex justify-around  items-center ">
            <div>
            <h3 className="font-semibold"><span className="bg-sky-500 rounded-2xl p-1">S</span>itemap</h3>
             <ul className="pl-4 py-3">
              <li className="py-3 text-md list-disc hover:text-sky-400">Home</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">About</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">Services</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">Countries</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">Contact</li>
             </ul>
            
          </div>
          <div>
            <h3 className="text-xl font-semibold"><span className="bg-sky-500 rounded-2xl p-1">C</span>ountries</h3>
             <ul className="pl-4 py-3">
              <li className="py-3 text-md list-disc hover:text-sky-400">Australia</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">Canada</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">New Zealand</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">USA</li>
             <li className="py-3 text-md list-disc hover:text-sky-400">UK</li>
             </ul>
          </div>
          </div>

          <div className="bg-white  h-auto p-3 mr-3">
            
            <img src={lastLogo} alt="last logo" className='h-15' />
            <div className='flex items-center gap-3 py-10'>
                  <MapPin />  
                  <p className='text-lg'><span className='font-semibold'>Gulshan-02:</span> House-12B, Lift-04, Flat-4A, Kamal <br />
                    Attaturk Avenue, Gulshan-02, Dhaka-1212.</p>
            </div>

            <div className='flex items-center gap-3 py-5'>
                  <img src={whatsapp} alt="" className='h-8' />
                  <p className='text-lg'><span className='font-semibold'>WhatsApp:</span>+8801384938348</p>
            </div>      
         </div>

     </footer>
      <section className='h-44 w-full'>
        <div className='flex justify-between items-center p-6  text-white bg-secondary'>
            <p className='px-10'>© 2023 Dream Study Int.. Designed By *hirebirds Team.</p>
            <ul className='flex justify-around gap-10 px-10 list-disc '>
            <li className='hover:text-sky-600'>About</li>
            <li className='hover:text-sky-600'>FAQ</li>
            <li className='hover:text-sky-600'>Contact</li>
            </ul>

         </div>
      </section>
    </>
  );
}

export default App;
