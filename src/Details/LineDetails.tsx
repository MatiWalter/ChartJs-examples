import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

export const LineDetails = () => {
  return (
    <>
      <Text>El componente Line recibe la prop data, la cual es un objeto con la siguiente forma:</Text>
      <Prism language="tsx">
        {`
          const labels: unknown[] = [];
          const datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[] = [
            {
              label: string | undefined,
              data: number[],
              backgroundColor: string,
              borderColor: string,
            }
          ];

          const data: ChartData<'line'> = {
            labels,
            datasets
          }
        `}
      </Prism>
      <Text>Si se esta usando typescript, alcanza solo con definir data del tipo ChartData.
        Hay varias formas de armar el objeto data, que el backend envie el objeto data ya armado,
        es decir con todos los datasets incluidos o que el back retorne por separado cada dataset.
      </Text>
      <Text>Un dataset necesita como mínimo una propiedad data (puede estar vacío)</Text>
      <Text>Otra propiedad que recibe el componente Line es la prop options, 
        la cual es un objeto con la siguiente forma:
      </Text>
      <Prism language='tsx'>
        {`
          const options: ChartOptions<'line'> = {}
        `}
      </Prism>
      <Text>
        Entre las opciones que podemos configurar se destacan:
      </Text>
      <Prism language='tsx'>
        {`
          plugins: {
            title: {  // Define las propiedades del titulo
              display: true,
              text: 'StackedBar Chart',
            },
            legend: { // Cambia las propiedades de la leyenda
              position: 'bottom',
            }
          },
          responsive: true,
        `}
      </Prism>
      <Text> El component Line tiene 4 variantes de gráficos:</Text>
      <ul>
        <li>Line: es el por defecto y no requiere configuración extra</li>
        <li>
          Multi Axis Line: tiene mas de un eje y, cada dataset debe tener un 
          Id para su correspondiente eje Y.
          <Prism language='tsx'>
            {`
              datasets: [
                {
                  label: 'Mis datos',
                  data: [70, 68, -89, -59, 26, -80, -58],
                  yAxisID: 'y'
                },
                {
                  label: 'Mis datos 2',
                  data: [4, -28, -59, 69, -67, 4, 80, 88],
                  yAxisID: 'y1'
                }
              ]
            `}
          </Prism>
          <Text>
            Podemos configurar los ejes con la propiedad options
          </Text>
          <Prism language='tsx'>
            {`
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
            `}
          </Prism>
        </li>
        <li>
          Stepped Line: este gráfico se asemeja a una señal digital, para lograr esto, hace falta agrgar
          al dataset la propiedad stepped en true.
          <Prism language='tsx'>
            {`
              dataset: [
                {
                  data: [-10, 74, -50, -35, 41, 94],
                  stepped: true
                }
              ]
            `}
          </Prism>
        </li>
        <li>
          Interpolation:
          <Prism language='tsx'>
            {`
              datasets: [
                {
                  data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4,
                },
              ]
            `}
          </Prism>

        </li>
      </ul>
    </>
  )
}
