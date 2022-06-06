import { Component, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

interface RouterState {
  name: string;
}

interface ILocation {
  state: {
    name: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as ILocation;

  return <>{loading ? <h1>Coin: {coinId}</h1> : <h1>{state.name}</h1>}</>;
}

export default Coin;
