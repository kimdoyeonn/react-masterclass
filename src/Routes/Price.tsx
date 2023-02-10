import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinTickers } from '../api';
import ApexChart from 'react-apexcharts';

interface ITicket {
  beta_value: number;
  circulating_supply: number;
  first_data_at: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_30m: number;
    };
  };
  rank: number;
  symbol: string;
  total_supply: number;
}

const Price = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<ITicket>(['coinPrice', coinId], () =>
    fetchCoinTickers(coinId ?? '')
  );
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <Container>
          <Item>
            최고가 ${Math.floor(data?.quotes.USD.ath_price ?? 0)} (
            {new Date(data?.quotes.USD.ath_date ?? '').toLocaleString()} 기준)
          </Item>
          {/* <Item>
            <ApexChart
              type='line'
              series={[
                {
                  name: 'Prices',
                  data:
                    [
                      data?.quotes.USD.percent_change_15m ?? 0,
                      data?.quotes.USD.percent_change_30m ?? 0,
                      data?.quotes.USD.percent_change_1h ?? 0,
                      data?.quotes.USD.percent_change_6h ?? 0,
                      data?.quotes.USD.percent_change_12h ?? 0,
                    ] ?? [],
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
                  type: 'datetime',
                  categories: [
                    '15분 전',
                    '30분 전',
                    '1시간 전',
                    '6시간 전',
                    '12시간 전',
                  ],
                },
                fill: {
                  type: 'gradient',
                  gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
                },
                colors: ['#0fbcf9'],
                tooltip: {
                  y: {
                    formatter: (value) => `$${value})}`,
                  },
                },
              }}
            />
          </Item> */}
          <Item>
            15분 전 {Number(data?.quotes.USD.percent_change_15m ?? 0)}%
          </Item>
          <Item>
            30분 전 {Number(data?.quotes.USD.percent_change_30m ?? 0)}%
          </Item>
          <Item>
            1시간 전 {Number(data?.quotes.USD.percent_change_1h ?? 0)}%
          </Item>
          <Item>
            6시간 전 {Number(data?.quotes.USD.percent_change_6h ?? 0)}%
          </Item>
          <Item>
            12시간 전 {Number(data?.quotes.USD.percent_change_12h ?? 0)}%
          </Item>
        </Container>
      )}
    </div>
  );
};

export default Price;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.div`
  background-color: ${(props) => props.theme.text.primary};
  color: ${(props) => props.theme.text.secondary};
  padding: 20px;
  border-radius: 12px;
`;
