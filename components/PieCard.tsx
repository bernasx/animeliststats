import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getRandomInt } from '../utils/getRandomInt';

export interface PieCardProps {
    title: String,
    topNumber: number,
    labels: string[] | undefined,
    fillData: number[] | undefined
}

const PieCard = ({ title, labels, fillData, topNumber }: PieCardProps) => {
    ChartJS.register(ArcElement, Tooltip, Legend);


    const slicedLabels = labels?.slice(0 - topNumber);
    const slicedFillData = fillData?.slice(0 - topNumber);
    const colors = [];
    for(let i = 0; i < topNumber ; i++) {
        colors.push(`rgba(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)}, 0.5)`)
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
                    backgroundColor:colors,
                    borderColor:colors,
                    borderWidth: 1,
                },
            ],
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
        </div>
    );
}

export default PieCard;