import React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export interface VerticalBarCardProps {
    title: String,
    labels: string[] | undefined,
    fillData: number[] | undefined,
    canSwapOrder: boolean,
    canBypassNumberLimit: boolean,
    startingNumber: number,
}

const VerticalBarCard = ({ title, labels, fillData, canSwapOrder, canBypassNumberLimit, startingNumber }: VerticalBarCardProps) => {
    const [topNumber, setTopNumber] = useState(4);
    const [ascending, setAscending] = useState(true);
    
    const slicedLabels = ascending ? labels?.slice(0,topNumber) : labels?.slice(0 - topNumber) ;
    const slicedFillData = ascending ? fillData?.slice(0, topNumber) : fillData?.slice(0 - topNumber);

    useEffect(() => {
      setTopNumber(startingNumber);
    }, [startingNumber])
    

    // start out like this to show while data loads
    let data = {
        labels: ['Red'],
        datasets: [
            {
                label: '',
                data: [1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    //fill in data
    if (fillData) {
        data = {
            labels: slicedLabels as string[],
            datasets: [
                {
                    label: '',
                    data: slicedFillData as number[],
                    backgroundColor: ['rgba(255, 99, 132, 0.5)'],
                    borderColor: ['rgba(255, 99, 132, 0.5)'],
                    borderWidth: 1,
                },
            ],
        }
    }

    const onTopNumberChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(canBypassNumberLimit) {
            let num = parseInt(e.currentTarget.value);
            if(!num){num = 1};
            setTopNumber(num);
        } else {
            let num = parseInt(e.currentTarget.value);
            if(!num){num = 1};
            if(num > 25){num = 25; e.currentTarget.value = '25'};
            setTopNumber(num);
        }
        
      }
    
    const onOrderButton = () => {
        if(canSwapOrder){
            setAscending(!ascending);
        }
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <Bar options={options} data={data} />
            </div>
            <footer className="card-footer">
                <div className='card-footer-item'>
                    <label className="label"># of items </label>
                    <input className="input" type="text" defaultValue={topNumber} onChange={onTopNumberChange}/>
                </div> 
                <div className='card-footer-item'>
                 
                    <button className='button' onClick={onOrderButton}>{ascending ? 'Descending':'Ascending'}</button>
                </div> 
            </footer>
        </div>
    );
}

export default VerticalBarCard;