import React, { useState } from 'react';
import Modal from 'react-modal';
import nb1 from '../imgs/nbicon1.png';
import nb2 from '../imgs/nbicon2.png';
import nb3 from '../imgs/createwid.png';
import bar from '../imgs/bar.png';
import pie from '../imgs/pie.png';
import line from '../imgs/line.png';
import SimpleCharts from './graph';
import { Widget } from '../models/widgets';


const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [widgetData, setWidgetData] = useState<Widget>({title: '', color:'white',widget:'data'});
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <><div className="bg-white border fixed z-40 top-0 w-full p-2 h-16 flex justify-between">
      <div className='flex items-center'>
        <img className='cursor-pointer h-6 m-4' src={nb2} alt="" />
        
        <div className='bg-[#E0DFF8] border-t-2 rounded-lg cursor-pointer'>
          <p className='m-2 text-[#5E5ADB]'>Overview X</p>
        </div>
      </div>
      <div className='mr-20 flex items-center'>
      <div className='bg-[#E0DFF8] border-t-2 rounded-lg cursor-pointer' onClick={openModal}>
          <p className='m-2 text-[#5E5ADB]'>+ Add Widget</p>
        </div>
        <img className='cursor-pointer h-6 m-4' src={nb1} alt="" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Widget Modal"
      >
        
        <form>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='w-16 m-3' src={nb3} alt='' />
                        <div className='m-3 flex flex-col'>
                            <h2 className='text-[#5E5ADB] font-bold text-2xl'>Create Widget</h2>
                            <p className='text-[#888891] mt-2'>Manage the glossary of terms of your Database</p>
                        </div>
                    </div>
                    <div className='m-3 mt-8'>
                        <input
                            className='border py-2 pl-1 w-64'
                            type="text"
                            id="title"
                            name="title"
                            placeholder='Enter the title'
                            value={widgetData.title}
                            onChange={(e)=> setWidgetData({ ...widgetData, title: e.target.value })}
                        />
                    </div>
                </div>
                <hr className='w-[100%]'/>
                <div className='flex h-96'>
                    <div className='flex flex-col h-96 justify-between items-center w-[60%] border m-5'>
                      <div>
                        <h1 className='mt-8 text-xl h-5'>{widgetData.title}</h1>
                      </div>
                        <div className='mx-10'>
                            <SimpleCharts widget={widgetData.widget} title={widgetData.title} color={widgetData.color} />
                        </div>
                        <div className='flex h-10 mb-5'>
                            <div onClick={(e)=> setWidgetData({ ...widgetData, color: 'black' })} className={`rounded-full cursor-pointer ${widgetData.color === 'black' ? "border-t-4" : ""} w-5 h-5 mr-2 bg-[#282828]`}></div>
                            <div onClick={(e)=> setWidgetData({ ...widgetData, color: 'white' })} className={`rounded-full cursor-pointer ${widgetData.color === 'white' ? "border-t-4" : ""} w-5 h-5 mr-2 bg-[#CECECE]`}></div>
                            <div onClick={(e)=> setWidgetData({ ...widgetData, color: 'purple' })} className={`rounded-full cursor-pointer ${widgetData.color === 'purple' ? "border-t-4" : ""} w-5 h-5 mr-2 bg-[#5E5ADB]`}></div>
                        </div>
                    </div>
                    <div className='w-[40%] m-3 flex flex-col'>
                        <h1 className='text-[#2B2B2B] text-xl'> Components</h1>
                        <div onClick={(e)=> setWidgetData({ ...widgetData, widget: 'data' })} className='rounded-lg border m-2 h-24 flex flex-col cursor-pointer'>
                            <h2 className=' m-2 text-2xl'>Data</h2>
                            <p className='m-2'>Random Description</p>
                        </div>
                        <div className='border rounded-lg h-36 flex flex-col m-2'>
                            <h2 className='text-2xl m-2'>Graph</h2>
                            <p className='ml-3'>Random Description</p>
                            <div className='ml-2 mt-1 flex'>
                                <img onClick={(e)=> setWidgetData({ ...widgetData, widget: 'bar' })} className='w-16 cursor-pointer' src={bar} alt="" />
                                <img onClick={(e)=> setWidgetData({ ...widgetData, widget: 'pie' })} className='w-16 cursor-pointer' src={pie} alt="" />
                                <img onClick={(e)=> setWidgetData({ ...widgetData, widget: 'line' })} className='w-16 cursor-pointer' src={line} alt="" />
                            </div>
                        </div>
                        <div onClick={(e)=> setWidgetData({ ...widgetData, widget: 'summary' })} className='rounded-lg m-2 border cursor-pointer h-24 flex flex-col'>
                            <h2 className='text-2xl ml-2'>Summary</h2>
                            <p className='m-2'>Random Description</p>
                        </div>
                        <div className='flex m-1 mt-2 justify-end'>
                            <button type="button" onClick={closeModal} className='rounded-lg p-2 mr-10 w-20 border border-[#9F9F9F] text-[#9F9F9F]'>Cancel</button>
                            <button className='rounded-lg p-2 w-20 bg-[#5E5ADB] text-white'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </Modal>
    </div>
    {/* {widget.map((wid, index) => (
          <div key={index}><SimpleCharts color={wid.color} widget={wid.widget} title={wid.title} /></div>
        ))} */}
    </>
  );
};

export default Navbar;
