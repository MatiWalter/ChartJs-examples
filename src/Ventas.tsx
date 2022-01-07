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
import { Button, Center, ColorSwatch, Container, Group, MultiSelect, Text, Title as MTitle } from '@mantine/core';
import React from 'react';

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
      text: 'Ventas por mes',
    },
    legend: {
      position: 'right',
      display: false
    },
    tooltip: {
      callbacks: {
        title: (item) => {
          return item[0].dataset.label || 'Dataset'
        },
        label: ({ label, formattedValue }) => {
          return ` ${label}: ${formattedValue}`
        },
      }
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

export const Ventas = () => {

  const initialDatasets: ChartDataset<'bar', DefaultDataPoint<'bar'>>[] = [
    {
      label: 'Sede 1',
      data: [4, 3, 8, 3, 7, 4, 4, 6, 8, 4, 5, 4],
      backgroundColor: '#FA5252',
    },
    {
      label: 'Sede 2',
      data: [4, 3, 8, 3, 7, 4, 4, 6, 8, 4, 5, 4],
      backgroundColor: '#4C6EF5',
    },
    {
      label: 'Sede 3',
      data: [4, 3, 8, 3, 7, 4, 4, 6, 8, 4, 5, 4],
      backgroundColor: '#40C057',
    },
    {
      label: 'Sede 4',
      data: [4, 3, 8, 3, 7, 4, 4, 6, 8, 4, 5, 4],
      backgroundColor: '#FD7E14',
    },
  ]

  const [datasets, setDatasets] = React.useState<ChartDataset<'bar', DefaultDataPoint<'bar'>>[]>(initialDatasets);

  const labels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const data: ChartData<'bar'> = {
    labels,
    datasets
  };

  const [selected, setSelected] = React.useState<string[]>([]);

  const filterData = () => {
    if (selected.length === 0) return;
    let newDataset: ChartDataset<'bar', DefaultDataPoint<'bar'>>[] = [];
    selected.map(select => {
      initialDatasets.map(dataset => {
        if (select === dataset.label) {
          newDataset.push(dataset);
        }
      });
    });
    setDatasets(newDataset);
  }

  return (
    <Container mt={15} sx={{ width: '100vw' }}>
      <Center sx={{ flexDirection: 'column' }}>
        <MTitle order={1} mb={10}>Filtar por sede</MTitle>
        <MultiSelect
          searchable
          mb={10}
          data={[
            { value: 'Sede 1', label: 'Sede 1'},
            { value: 'Sede 2', label: 'Sede 2'},
            { value: 'Sede 3', label: 'Sede 3'},
            { value: 'Sede 4', label: 'Sede 4'},
          ]}
          value={selected}
          onChange={setSelected}
          sx={{ width: '300px' }}
          />
        <Group>
          <Button onClick={filterData}>
            Filtrar
          </Button>
          <Button 
            onClick={() => {
              setSelected([]);
              setDatasets(initialDatasets);
            }}
          >
            Borrar filtros
          </Button>
        </Group>
      </Center>
      <Center mt={20}>
        {
          datasets.map(data => (
            <Group mr={20} sx={{ gap: '5px' }} key={data.label}>
              <Text>{data.label}</Text>
              <ColorSwatch color={data.backgroundColor as string} /> 
            </Group>
          ))
        }
      </Center>
      <Bar options={options} data={data} />
    </Container>
  )
}
