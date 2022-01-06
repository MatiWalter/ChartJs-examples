import { Container } from '@mantine/core';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { LineDetails } from '../Details';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Legend
);

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
    {
      label: 'Cubic interpolation',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: false,
      tension: 0.4
    },
    {
      label: 'Linear interpolation (default)',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }
  ]
}

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Interpolation Chart'
    },
  },
  interaction: {
    intersect: true,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value'
      },
      suggestedMin: -10,
      suggestedMax: 200
    }
  }
};

export const Interpolation = () => {
  return (
    <Container mt={15}>
      <Line data={data} options={options} />
      <LineDetails />
    </Container>
  )
}
