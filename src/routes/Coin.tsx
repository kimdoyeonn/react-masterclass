import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title } from "./Coints";

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

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? "loading..." : null}
    </Container>
  );
}

export default Coin;

