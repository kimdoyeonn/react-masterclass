import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading: loading, data } = useQuery<ICoin[]>(
    'allCoins',
    fetchCoins
  );

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ConisList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.name}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </ConisList>
      )}
    </Container>
  );
}

export default Coins;

export const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConisList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.text.primary};
  color: ${(props) => props.theme.text.secondary};
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 20px;
  border: ${(props) => `1px solid ${props.theme.bgColor}`};

  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
    }
  }
  transition: background-color 0.2s ease-in;

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;
export const Loader = styled.div`
  text-align: center;
  color: ${(props) => props.theme.text.secondary};
`;

const Img = styled.img`
  height: 28px;
  width: 28px;
`;
