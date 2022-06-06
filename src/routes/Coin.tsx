import { type } from "os";
import { Component, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
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
  // <>{loading ? <h1>Coin: {coinId}</h1> : <h1>{state.name}</h1>}</>;
}

export default Coin;

