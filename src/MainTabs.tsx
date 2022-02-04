import { lazy, Suspense, useState } from 'react';
import { Center, Container, Loader, Tabs } from '@mantine/core';
import { Ventas } from './Ventas';

const DoughnutChart = lazy(() => import('./Charts/DoughnutChart'));
const FloatingBar = lazy(() => import('./Charts/FloatingBar'));
const Interpolation = lazy(() => import('./Charts/Interpolation'));
const LineChart = lazy(() => import('./Charts/Line'));
const MultiAxisLine = lazy(() => import('./Charts/MultiAxisLine'));
const StackedBar = lazy(() => import('./Charts/StackedBar'));
const SteppedLine = lazy(() => import('./Charts/SteppedLine'));
const VerticalBar = lazy(() => import('./Charts/VerticalBar'));

export const MainTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Suspense
      fallback={
        <Center>
          <Loader />
        </Center>
      }
    >
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
    </Suspense>
  )
}
