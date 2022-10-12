import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Segment, Grid } from "semantic-ui-react";
const DisplayBalances=()=>{
    return(
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              
              <DisplayBalance size="tiny" color='green' value='1110' title='Income:' />
              
            </Grid.Column>
            <Grid.Column>

              <DisplayBalance size="tiny" color='red' title='Expenses:' value='610' />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    );
}

export default DisplayBalances;