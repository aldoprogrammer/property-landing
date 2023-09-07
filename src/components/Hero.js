import React from 'react';
import Image1 from '../assets/7.jpg';
import { SearchOutlined, ShoppingCartOutlined, CheckCircleOutlined, RightSquareOutlined, GoldOutlined, UpCircleOutlined } from '@ant-design/icons';
import './NavBar.css';

const Hero = () => {
  return (
    <div className="relative h-96">
      <img src={Image1} alt="Your Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 top-10 flex flex-col items-center text-white">
        <h1 className="text-5xl font-bold text-white">
        Make Your Dreams Come True
        </h1>
        <p className="mt-2 text-lg font-bold text-white">
        Whatever your goal is, we can help you get pre-
        </p>
        <p className="text-lg font-bold text-white">
        approved for the best possible mortgage
        </p>
        <div className="flex items-center justify-center mt-4">
        <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-gray-300 p-3 inputEmail text-black"
          />
          <button className="bg-blue-600 text-white p-3 iniBtn">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="sectionBawah">
        <div className="kotakSatu">
        <ShoppingCartOutlined  className="iniIcon" />
         <span>Low Interest Rate</span><br/>
         <p className="gede">From 3.75%</p>
        </div>
        <div className="kotakDua">
        <GoldOutlined className="iniIcon" />
        <span>Amount of Credit</span><br/>
         <p className="gede">Up to $7M</p>
        </div>
        <div className="kotakTiga">
        <RightSquareOutlined className="iniIcon" />
        <span>Amount of Credit</span><br/>
         <p className="gede">Up to $7M</p>
        </div>
        <div className="kotakEmpat">
        <UpCircleOutlined className="iniIcon"/>
        <span>Amount of Credit</span><br/>
         <p className="gede">Up to $7M</p>
        </div>
    </div>
    </div>
    
  );
};

export default Hero;
