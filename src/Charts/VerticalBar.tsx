import { lazy } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from '@mantine/core';

const BarDetails = lazy(() => import('../Details/BarDetails'));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'VerticalBar Chart',
    },
  },
};

const VerticalBar = () => {

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [6, 5, 5, 5, 3, 4, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [4, 3, 3, 3, 1, 2, 4],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Container mt={15}>
      <Bar data={data} options={options} />
      <BarDetails />
    </Container>
  )
}

export default VerticalBar;
