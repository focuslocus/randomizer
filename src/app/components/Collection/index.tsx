import * as React from 'react';
import {
    createStyles,
    withStyles,
    Grid,
} from '@material-ui/core';
import CollectionList from './List';
import CollectionPicker from './Picker';

const styles = createStyles({});

// const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

interface CollectionState {
    items: Array<string>;
    current: string;
}

class Collection extends React.Component <any, CollectionState> {
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
        console.log('firee')
        const { items, current } = this.state;
        items.push(current);
        this.setState((state) => ({ items, current: '' }));
    }

    handleDeleteItem = (item: string): void => {
        // TODO update business logic to handle items as
        // 1D array
    }

    handleInput = (event) => {
        console.log('handle input', event.target.value)
        this.setState({ current: event.target.value });
    }

    public render() {
        const { items, current } = this.state;
        return (
            <Grid container
                justify='space-evenly'>
                <CollectionList items={items}
                    onDeleteItem={this.handleDeleteItem}
                    onItemInput={this.handleInput}
                    onAddItem={this.handleAddItem}
                    current={current}
                    />
                <CollectionPicker items={items} />
            </Grid>
        );
    }
}

export default withStyles(styles)(Collection);
