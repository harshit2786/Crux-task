// src/components/Sidebar.tsx
import React from 'react';
import logo from '../imgs/logo.png';
import sb1 from '../imgs/sbicon1.png';
import sb2 from '../imgs/sbicon2.png';
import sb3 from '../imgs/sbicon3.png';
import sb4 from '../imgs/sbicon4.png';
import sb5 from '../imgs/sbicon5.png';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white left-0 border fixed z-50 text-white h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold cursor-pointer"><img className='w-12' src={logo} alt=""/></div>
      <nav className="flex-1">
        <ul>
          <li className="cursor-pointer"><img className='w-12 m-4' src={sb1} alt=""/></li>
          <li className="cursor-pointer"><img className='w-12 m-4' src={sb2} alt=""/></li>
          <li className="cursor-pointer"><img className='w-12 m-4' src={sb3} alt=""/></li>
          <li className="cursor-pointer"><img className='w-12 m-4' src={sb4} alt=""/></li>
        </ul>
      </nav>
      <div className="absolute cursor-pointer bottom-0 left-0 w-20 "><img src={sb5} alt=""/></div>
    </div>
  );
};

export default Sidebar;
