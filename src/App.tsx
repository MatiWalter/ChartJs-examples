import { Container, Title } from '@mantine/core'
import { MainTabs } from './MainTabs'
import { Ventas } from './Ventas'

function App() {
  return (
    <Container mt={100}>
      <Title order={1} mb={15} align='center'>Chart Js</Title>
      <MainTabs />
    </Container>
  )
}

export default App
