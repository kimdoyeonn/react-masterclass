import { useQuery } from 'react-query';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';

interface ChartInterface {
  coinId: string | undefined;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: ChartInterface) => {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ApexChart
          type='line'
          series={[
            { name: 'Price', data: data?.map((price) => price.close) ?? [] },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;