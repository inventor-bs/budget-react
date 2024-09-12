import { SemanticCOLORS, Statistic } from "semantic-ui-react";
import { StatisticSizeProp } from "semantic-ui-react/dist/commonjs/views/Statistic/Statistic";

interface StatisticItemProperties {
  title?: string;
  value?: string;
  size?: StatisticSizeProp;
  color?: SemanticCOLORS;
}

const DEFAULT_SIZE = "small";
const DEFAULT_COLOR = "black";

const StatisticItem = ({
  title,
  value,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}: StatisticItemProperties) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default StatisticItem;
