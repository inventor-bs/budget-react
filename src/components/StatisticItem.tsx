import { Statistic } from "semantic-ui-react";

interface DisplayBalanceProperties {
  title?: string;
  value?: number;
  size?: string;
  color?: string;
}

const DisplayBalance = ({ title, value }: DisplayBalanceProperties) => {
  return (
    <Statistic size="small">
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
