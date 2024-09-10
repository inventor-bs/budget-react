import { getEmptyString } from "@/helpers/convertString";
import { Header } from "semantic-ui-react";

interface CustomHeaderProperties {
  title?: string;
  type?: string;
}

const CustomHeader = ({ title, type = "h1" }: CustomHeaderProperties) => {
  return <Header as={type}>{getEmptyString(title)}</Header>;
};

export default CustomHeader;
