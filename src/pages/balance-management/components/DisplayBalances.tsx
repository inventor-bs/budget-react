import StatisticItem from "@/components/StatisticItem";
import { Grid, Segment } from "semantic-ui-react";

const DisplayBalances = () => {
  return (
    <>
      <StatisticItem title="Your balance" value="2,500.53" />

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatisticItem
                size="tiny"
                color="green"
                title="Incoming:"
                value="1,045.50"
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticItem
                size="tiny"
                color="red"
                title="Expenses:"
                value="623.50"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default DisplayBalances;
