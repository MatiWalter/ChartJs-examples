import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, ChartOptions, ChartData, ChartDataset } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container } from '@mantine/core';
import { DoughnutDetails } from '../Details';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const options: ChartOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Doughnut Chart',
    },
  },
  responsive: true,
};

const labels: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const datasets: ChartDataset<'doughnut', number[]>[] = [
  {
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
  }
]

const data: ChartData<'doughnut'> = {
  labels,
  datasets
};

export const DoughnutChart = () => {
  return (
    <Container mt={15}>
      <Doughnut data={data} options={options} />
      <DoughnutDetails />
    </Container>
  )
}
