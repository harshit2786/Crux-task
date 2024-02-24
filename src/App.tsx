// src/App.tsx
import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';


const App: React.FC = () => {

  
  return (
    <div className="flex">
      <div className='w-20'>
      <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
