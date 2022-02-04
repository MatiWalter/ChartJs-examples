import { lazy } from 'react';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { Container } from '@mantine/core';

const LineDetails = lazy(() => import('../Details/LineDetails'));

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Legend
);

const labels: string[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [-10, 74, -50, -35, 41, 94],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      stepped: true,
    },
    {
      label: 'Dataset 2',
      data: [10, -74, 50, 35, -41, -94],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
};

const options: ChartOptions<'line'> = {
  responsive: true,
  interaction: {
    intersect: true,
  },
  plugins: {
    title: {
      display: true,
      text: 'Stepped Line',
    },
    legend: {
      position: 'bottom'
    }
  }
}

const SteppedLine = () => {
  return (
    <Container mt={15}>
      <Line data={data} options={options} />
      <LineDetails />
    </Container>
  )
}

export default SteppedLine;
