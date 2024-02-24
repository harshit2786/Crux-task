import React, { useState,useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import config from '../config/index.json'
import { Widget,Pie } from '../models/widgets';

export default function SimpleCharts({color,widget} : Widget) {
    const [selectedDataset, setSelectedDataset] = useState(config.datasets[0]);
    const switchDataset = (index : number) => {
        setSelectedDataset(config.datasets[index]);
      };
      function convertToNumeric(value: number | string): number {
        if (typeof value === 'number') {
          return value;
        } else {
          return 0;
        }
      }
    const [data, setData] = useState<Pie[]>([]);

 useEffect(() => {
  console.log('Effect triggered');
  const transformedData: Pie[] = selectedDataset.data.map(([label, value], id) => ({
    id,
    value: Number(value),
    label: `${label}`,
  }));

  setData(transformedData);
}, [selectedDataset]);

            
  return (
    <div className={`${color==='purple' ? "bg-[#5E5ADB]" : color==='black' ? "bg-[#282828]" : 'bg-[#CECECE]'} shadow-lg relative w-48 rounded-2xl h-48 px-5 m-5`}>
        <div className='flex justify-between w-full'>
            {config.datasets.map((obj,index) =>( <p onClick={() => switchDataset(index)} className={`${selectedDataset === config.datasets[index] ? "text-white underline" : ""} mt-3 cursor-pointer`}>{obj.name}</p>))}
            <p className='text-white mt-2 cursor-pointer'>. . .</p>
        </div>
        {widget === "bar" &&  <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: selectedDataset.data.map(entry => entry[0]),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: selectedDataset.data.map(entry => convertToNumeric(entry[1])),
            color: '#FF8E8E',
          },
        ]}
        width={180}
        height={180}
      />}
      {widget === "pie" && <PieChart
      series={[
        {
          data,
          cx: 40,
          cy: 75,
          outerRadius: 30,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={180}
      
    />
      }
    {widget==="line" && <LineChart
      width={180}
      height={180}
      series={[
        { data: selectedDataset.data.map(entry => convertToNumeric(entry[1])) },
      ]}
      xAxis={[{ scaleType: 'point', data: selectedDataset.data.map(entry => entry[0]) }]}
    />}
    {widget==='data' && <div>
    <table>
        <thead>
          <tr>
            <th className='px-3'>Product</th>
            <th className='px-3'>Sales</th>
          </tr>
        </thead>
        <tbody>
          {selectedDataset.data.map(([label, value]) => (
            <tr key={label}>
              <td className='px-3'>{label}</td>
              <td className='px-3'>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>}
      {widget==="summary" && <div>
            <p className='text-xs p-2'>{String(selectedDataset.summary).slice(0, 200)}...</p>
      </div>
      }
    </div>
  );
}
