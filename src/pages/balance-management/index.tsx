import CustomHeader from "@/components/commons/CustomHeader";
import EntryForm from "@/components/form/EntryForm";
import { useState } from "react";
import { Container } from "semantic-ui-react";
import DisplayBalances from "./components/DisplayBalances";
import DisplayHistories from "./components/DisplayHistories";

export interface EntriesType {
  expensesName?: string;
  cost?: string;
  isExpense?: boolean;
}

const INITIAL_ENTRIES: EntriesType[] = [
  {
    expensesName: "Work Income",
    cost: "1000",
    isExpense: false,
  },
  { expensesName: "Water bill", cost: "20", isExpense: true },
  { expensesName: "Rent", cost: "300", isExpense: true },
  { expensesName: "Power bill", cost: "50", isExpense: true },
];

const BalanceManagement = () => {
  const [entries, setEntries] = useState<EntriesType[]>(INITIAL_ENTRIES);

  return (
    <Container>
      <CustomHeader title="Budget" type="h1" />

      <DisplayBalances />

      <DisplayHistories entriesList={entries} />

      <CustomHeader title="Add new transaction" type="h3" />

      <EntryForm />
    </Container>
  );
};

export default BalanceManagement;
