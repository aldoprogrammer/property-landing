import React from 'react';
import Image1 from '../assets/7.jpg';

const Content = () => {
  return (
    <div className="flex items-center mt-10">
      <div className="w-1/2">
        {/* Image */}
        <img
          src={Image1}
          alt="Image"
          className="max-w-xs w-auto h-96 ml-52 mb-11 rounded-md"
        />
      </div>
      <div className="w-1/2 p-4 mr-28">
        {/* Text */}
        <h2 className="text-2xl font-bold mb-4">Looking for real
Returns?</h2>
        <p className="text-gray-700">
        Leand from $1,000 and earn up to 12% fixed return p.a on property loans through Blend.
        </p>
        {/* Button */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Send
        </button>
      </div>
    </div>
  );
};

export default Content;
