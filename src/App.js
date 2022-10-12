import './App.css';
import {Container} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
     <MainHeader title='Budget' />

      <DisplayBalance  size="small" title='Your Balance:'  value='2,443' />

      {/* <Segment textAlign='center'>
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
      </Segment> */}

      <DisplayBalances />

      <MainHeader title='History' type="h3" />
          {/* <Header as="h3">History</Header> */}

      <EntryLine description="income" value="$10" />
      <EntryLine description="expense" value="$10" isExpense/>

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
