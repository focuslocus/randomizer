import * as React from 'react';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import CollectionList from './List';
import CollectionPicker from './Picker';
import Header from '../Header';

const styles = createStyles({});

interface CollectionState {
  items: Array<string>;
  current: string;
}

class Collection extends React.Component<any, CollectionState> {
  public constructor(props) {
    super(props);
    const state: CollectionState = {
      items: [],
      current: ''
    };

    this.state = state;
  }

  handleAddItem = (event: any): void => {
    event.preventDefault();
    const { items, current } = this.state;
    items.push(current);
    this.setState(() => ({ items, current: '' }));
  };

  handleDeleteItem = (toDelete: string): void => {
    const newList = this.state.items.filter(item => item !== toDelete);
    this.setState({ items: newList });
  };

  handleInput = event => {
    this.setState({ current: event.target.value });
  };

  public render() {
    const { items, current } = this.state;
    return (
      <div>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify='space-evenly'>
              <CollectionList
                items={items}
                onDeleteItem={this.handleDeleteItem}
                onItemInput={this.handleInput}
                onAddItem={this.handleAddItem}
                current={current}
              />
              <CollectionPicker items={items} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Collection);
