import { lazy } from 'react';
import { Container } from '@mantine/core';
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

const LineDetails = lazy(() => import('../Details/LineDetails'));

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Legend
);

const options: ChartOptions<'line'> = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    title: {
      display: true,
      text: 'Multi Axis Line Chart'
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left'
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false
      }
    },
  },
}

const MultiAxisLine = () => {

  const labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Mis datos',
        data: [70, 68, -89, -59, 26, -80, -58],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y'
      },
      {
        label: 'Mis datos 2',
        data: [4, -28, -59, 69, -67, 4, 80, 88],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1'
      }
    ]
  }
  
  return (
    <Container mt={15}>
      <Line data={data} options={options} />
      <LineDetails />
    </Container>
  )
}

export default MultiAxisLine;
