import { Text, Container } from '@mantine/core';
import { Prism } from '@mantine/prism'

const DoughnutDetails = () => {
  return (
    <Container mt={15}>
      <Text>El componente Doghnut recibe la prop data, la cual es un objeto con la siguiente forma:</Text>
      <Prism language="tsx">
        {`
          const labels: unknown[] = [];
          const datasets: ChartDataset<'doughnut', number[]>[] = [
            {
              label: string | undefined,
              data: number[],
              backgroundColor: string[],
              borderColor: string[],
              borderWidth: number
            }
          ];

          const data: ChartData<'doughnut'> = {
            labels,
            datasets
          }
        `}
      </Prism>
      <Text>
        Adicionalmente se puede configurar el dataset para indicarle que colores se quieren renderizar para
        cada valor, esto se logra pasandole en la propiedad backgroundColor y borderColor (si se lo requiere)
        un arreglo de strings, siendo estos elementos un string válido como color (Hex, rgb, rgba).
      </Text>
      <Prism language='tsx'>
        {`
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        `}
      </Prism>
    </Container>
  )
}

export default DoughnutDetails;