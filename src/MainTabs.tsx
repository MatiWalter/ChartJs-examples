import { useState } from 'react';
import { Container, Tabs } from '@mantine/core';
import { 
  DoughnutChart,
  FloatingBar,
  Interpolation,
  LineChart,
  MultiAxisLine,
  StackedBar,
  SteppedLine,
  VerticalBar
} from "./Charts";
import { Ventas } from './Ventas';

export const MainTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container sx={({ width: '90%' })}>
      <Tabs active={activeTab} onTabChange={setActiveTab}>
        <Tabs.Tab label="Ventas Stacked Bar">
          <Ventas />
        </Tabs.Tab>
        <Tabs.Tab label="Stacked Bar">
          <StackedBar />
        </Tabs.Tab>
        <Tabs.Tab label="Vertical Bar">
          <VerticalBar />
        </Tabs.Tab>
        <Tabs.Tab label="Floating Bar">
          <FloatingBar />
        </Tabs.Tab>
        <Tabs.Tab label="Line">
          <LineChart />
        </Tabs.Tab>
        <Tabs.Tab label="Multi Axis Line">
          <MultiAxisLine />
        </Tabs.Tab>
        <Tabs.Tab label="Stepped Line">
          <SteppedLine />
        </Tabs.Tab>
        <Tabs.Tab label="Interpolation">
          <Interpolation />
        </Tabs.Tab>
        <Tabs.Tab label="Doughnut">
          <DoughnutChart />
        </Tabs.Tab>
      </Tabs>
    </Container>
  )
}
