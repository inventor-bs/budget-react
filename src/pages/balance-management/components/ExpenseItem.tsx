import { getEmptyString } from "@/helpers/convertString";
import { useMemo } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { formatCurrency } from "../helpers";

interface ExpenseItemProperties {
  expenseName?: string;
  cost?: string;
  isExpense?: boolean;
}

const EXPENSE_COLOR = "red";
const INCOME_COLOR = "green";

const ExpenseItem = ({
  expenseName,
  cost,
  isExpense = false,
}: ExpenseItemProperties) => {
  const expenseItemColor = useMemo(
    () => (isExpense ? EXPENSE_COLOR : INCOME_COLOR),
    [isExpense]
  );

  return (
    <Segment color={expenseItemColor}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {getEmptyString(expenseName)}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {formatCurrency(cost)}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ExpenseItem;
