import React from 'react';
import Image1 from '../assets/6.jpg';
import { SearchOutlined } from '@ant-design/icons';

const Hero = () => {
  return (
    <div className="border-8 border-blue-200 relative h-96">
      <img src={Image1} alt="Your Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 top-10 flex flex-col items-center text-white">
        <h1 className="text-5xl font-bold text-gray-900">
          Your Property Lending 
        </h1>
        <h1 className='text-5xl font-bold text-gray-900'>Club</h1>
        <p className="mt-2 text-lg font-bold text-gray-900">
          Number One in Family, and you can find Houses of Various 
        </p>
        <p className="text-lg font-bold text-gray-900">
        Types here, and you can rent or buy them directly.
        </p>
        <div className="flex items-center justify-center mt-4 bg-white p-4 rounded-2 h-20 w-96">
        
          <input type="text"  className="text-black text-4xl form-input px-4 py-3 outline-none h-20 w-96" placeholder="Search your houses ..."  />
          <button className="bg-blue-400  hover:bg-blue-500 text-white rounded-md p-1 text-2xl px-4 py-3  h-20 w-96">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
