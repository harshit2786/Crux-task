// src/App.tsx
import React, {useState} from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import SimpleCharts from './components/graph';
import { Widget } from './models/widgets';

const App: React.FC = () => {

  const data : Widget[] = [{"color": "black", "title":"","widget":"bar"}];
  
  return (
    <div className="flex bg-[#F4F4FF]">
      <div className='w-20'>
      <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar />
        <div className='flex flex-wrap justify-start mx-10'>
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
          <SimpleCharts color={data[0].color} widget={data[0].widget} title={data[0].title} />
        </div>
        
      </div>
    </div>
  );
};

export default App;
