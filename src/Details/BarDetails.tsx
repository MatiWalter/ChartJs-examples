import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

export const BarDetails = () => {
  return (
    <>
      <Text>El componente Bar recibe la prop data, la cual es un objeto con la siguiente forma:</Text>
      <Prism language="tsx">
        {`
          const labels: unknown[] = [];
          const datasets: ChartDataset<'bar', DefaultDataPoint<'bar'>>[] = [
            {
              label: string | undefined,
              data: number[],
              backgroundColor: string,
            }
          ];

          const data: ChartData<'bar'> = {
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
      <Text>Otra propiedad que recibe el componente Bar es la prop options, 
        la cual es un objeto con la siguiente forma:
      </Text>
      <Prism language='tsx'>
        {`
          const options: ChartOptions<'bar'> = {}
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
          scales: { // Propiedad necesaria para lograr un stacked bar
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        `}
      </Prism>
      <Text>
        VerticalBar es el gráfico por defecto del componente Bar si no agregamos opciones.
        El StackedBar es un Bar con sus scales en stacked: true.
        El FloatingBar es un VerticalBar en el que los valores de sus datasets son pares
        de valores en lugar de un sólo número, es decir, en el VerticalBar los valores
        comienzan desde 0 para el eje X. Para lograr un floating bar,
        debemos definir sus datos de la siguiente manera:
      </Text>
      <Prism language='tsx'>
        {`
          /* Para que el FloatingBar funcione correctamente en typescript no hay que influir 
          en el tipo de dato de data */
          const data = {
            labels: [],
            datasets: {
              label: 'Dataset',
              data: [[52, 10], [-28, -39], [-25, 22], [-91, -61]]
            }
          }
        `}
      </Prism>
    </>
  )
}
