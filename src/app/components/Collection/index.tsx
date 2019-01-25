import * as React from 'react';
import {
    createStyles,
    withStyles,
    Divider,
    Fab,
    Grid,
    Input,
    Modal,
    Typography
} from '@material-ui/core';
import CollectionList from './List';
import CollectionPicker from './Picker';

const styles = createStyles({});

const options = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

class Collection extends React.Component <any, any> {
    public constructor(props) {
        super(props);
        // TODO add items list to state here
    }

    handleAddItem = (item: string): void => {

    }

    handleDeleteItem = (item: string): void => {
        // TODO update business logic to handle items as
        // 1D array
    }

    handleItemInput = (item: string): void => {
        // TODO update logic to add item to list
    }

    public render() {
        return (
            <div>
                <CollectionList items={options}
                    onDeleteItem={this.handleDeleteItem}
                    onItemInput={this.handleItemInput} />
                <CollectionPicker items={options} />
            </div>
        );
    }
}

export default withStyles(styles)(Collection);