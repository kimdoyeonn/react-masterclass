import ApexChart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from './api';
import { ChartInterface, IHistorical } from './Chart';

const Price = ({ coinId }: ChartInterface) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ApexChart
          type='candlestick'
          series={[
            {
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_open),
                  y: [price.open, price.high, price.low, price.close],
                };
              }) ?? [],
            },
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
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              show: false,
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default Price;
