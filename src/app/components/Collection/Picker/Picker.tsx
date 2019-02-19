import React, { Component } from 'react';
import {
    createStyles,
    withStyles,
    WithStyles,
    Fab,
    Grid
} from '@material-ui/core';
import sharedStyles from '../../common/Css';
import CollectionResult from './Result';

const styles = createStyles({
    formRow: sharedStyles.formRow
});

interface CollectionPickerProps extends WithStyles<typeof styles> {
    items: Array<string>;
}

interface CollectionPickerState {
    picked: string;
}

class CollectionPicker extends Component<CollectionPickerProps, CollectionPickerState> {
    constructor(props: CollectionPickerProps) {
        super(props);
        const state: CollectionPickerState = {
            picked: null
        };
        this.state = state;
    }


    handlePickItem = (event: any) => {
        event.preventDefault();
        const { items } = this.props;
        this.setState({ picked: items[Math.floor(Math.random() * items.length)]});
    };

    handleResetPick = () => {
        this.setState({ picked: null });
    }

    public render() {
        const { classes, items } = this.props;
        const { picked } = this.state;
        return (
            <div>
                <Grid item
                    className={classes.formRow}>
                    <Fab
                        disabled={items.length < 2 ? true : false}
                        color='primary'
                        variant='extended'
                        onClick={this.handlePickItem}>
                        Generate
                    </Fab>
                </Grid>
                {picked ? <CollectionResult picked={picked} onModalClose={this.handleResetPick}/> : null }
            </div>
        );
    }
}

export default withStyles(styles)(CollectionPicker);
