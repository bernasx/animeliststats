import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, ChangeEvent, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { getRandomInt } from '../utils/getRandomInt';

export interface PieCardProps {
    title: String,
    labels: string[] | undefined,
    fillData: number[] | undefined,
    canSwapOrder: boolean,
    canBypassNumberLimit: boolean,
    startingNumber: number,
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCard = ({ title, labels, fillData, canSwapOrder, canBypassNumberLimit, startingNumber  }: PieCardProps) => {
    const [topNumber, setTopNumber] = useState(4);
    const [ascending, setAscending] = useState(true);
    
    const slicedLabels = ascending ? labels?.slice(0,topNumber) : labels?.slice(0 - topNumber) ;
    const slicedFillData = ascending ? fillData?.slice(0, topNumber) : fillData?.slice(0 - topNumber);

    useEffect(() => {
        setTopNumber(startingNumber);
      }, [startingNumber])
    
    const colors = [];
    for (let i = 0; i < topNumber; i++) {
        colors.push(`rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.5)`)
    }

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
                    backgroundColor: colors,
                    borderColor: colors,
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

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <Pie data={data} />
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

export default PieCard;