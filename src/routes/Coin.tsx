import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Header, Title } from './Coints';

interface RouteParams {
  coinId: string;
}

interface RouterLocation {
  state: {
    name: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouterLocation;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? 'loading...' : null}
    </Container>
  );
}

export default Coin;
