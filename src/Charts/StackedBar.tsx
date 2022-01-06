import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartDataset,
  DefaultDataPoint,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from '@mantine/core';
import { BarDetails } from '../Details';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<'bar'> = {
  plugins: {
    title: {
      display: true,
      text: 'StackedBar Chart',
    },
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        title: (item) => {
          return item[0].dataset.label || 'Dataset'
        },
        label: ({ label, formattedValue }) => {
          return ` ${label}: ${formattedValue}`
        },
        // labelColor: (ctx) => {
        //   return {
        //     borderColor: 'black',
        //     backgroundColor: `${ctx.dataset.backgroundColor}`
        //   }
        // },
        // labelTextColor: (ctx) => {         
        //   return `${ctx.dataset.backgroundColor}`
        // },
      }
    }
  },
  animation: {
    delay: (ctx) => {
      return ctx.dataIndex * 300 + ctx.datasetIndex * 100;
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const StackedBar = () => {

  const labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const datasets: ChartDataset<'bar', DefaultDataPoint<'bar'>>[] = [
    {
      label: 'Dataset 1',
      data: [4, 3, 3, 3, 1, 2, 4],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [4, 3, 3, 3, 1, 2, 4],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ];

  const data: ChartData<'bar'> = {
    labels,
    datasets
  };

  return (
    <Container mt={15}>
      <Bar options={options} data={data} />
      <BarDetails />
    </Container>
  )
}
