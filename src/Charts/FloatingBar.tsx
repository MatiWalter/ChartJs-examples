import { Container } from '@mantine/core';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarDetails } from '../Details';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'FloatingBar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [[52, 10], [-28, -39], [-25, 22], [-91, -61], [-32, -22], [-15, 89], [51, -2]],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [[72, 13], [59, 0], [-52, 54], [-46, -63], [66, 18], [64, -22], [77, 14]],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
};

export const FloatingBar = () => {
  return (
    <Container mt={15}>
      <Bar data={data} options={options} />
      <BarDetails />
    </Container>
  )
}
