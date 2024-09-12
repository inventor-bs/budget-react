import CustomHeader from "@/components/commons/CustomHeader";
import { isEmpty } from "lodash";
import { When } from "react-if";
import { EntriesType } from "..";
import ExpenseItem from "./ExpenseItem";

interface DisplayHistoriesProperties {
  entriesList?: EntriesType[];
}

const DisplayHistories = ({ entriesList }: DisplayHistoriesProperties) => {
  return (
    <>
      <CustomHeader title="History" type="h3" />

      <When condition={!isEmpty(entriesList)}>
        {entriesList?.map((entry) => (
          <ExpenseItem
            key={entry.expensesName}
            expenseName={entry.expensesName}
            cost={entry.cost}
            isExpense={entry.isExpense}
          />
        ))}
      </When>
    </>
  );
};

export default DisplayHistories;
