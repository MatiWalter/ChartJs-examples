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
  ChartDataset,
  DefaultDataPoint,
  ChartArea,
} from "chart.js";
import { useEffect, useRef, useState } from 'react';
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

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Line Chart'
    },
  },
}

export const LineChart = () => {

  const chartRef = useRef<ChartJS<'line'>>(null);
  const [data, setData] = useState<ChartData<'line'>>({
    datasets: []
  })

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) {
      return;
    }

    const chartData: ChartData<'line'> = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Mis datos',
          data: [70, 68, -89, -59, 26, -80, -58],
          // borderColor: 'rgb(255, 99, 132)',
          borderColor: createGradient(chart.ctx, chart.chartArea),
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Mis datos 2',
          data: [4, -28, -59, 69, -67, 4, 80, 88],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
      ]
    }

    setData(chartData);
    
  }, []);

  const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'purple');
    return gradient;
  }

  return (
    <Container mt={15}>
      <Line ref={chartRef} data={data} options={options} />
      <LineDetails />
    </Container>
  )
}
