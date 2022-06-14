import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";

interface ChartInterface {
  coinId: string | undefined;
}

const Chart = ({ coinId }: ChartInterface) => {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return <div>Chart</div>
}

export default Chart;