import React from 'react';
import {
    createStyles,
    withStyles,
    Fab,
    Grid
} from '@material-ui/core';
import sharedStyles from '../../common/Css';
import CollectionResult from './Result';

const styles = createStyles({
    formRow: sharedStyles.formRow
});

let picked: string;
const handlePickItem = (items: Array<string>, event) => {
    event.preventDefault();
    picked = items[Math.floor(Math.random() * items.length)];
};

const CollectionPicker = (props) => {
    const { classes, items } = props;
    return (
        <div>
            <Grid item
                className={classes.formRow}>
                <Fab
                    disabled={items.length < 2 ? true : false}
                    color='primary'
                    variant='extended'
                    onClick={(e) => handlePickItem(items, e)}>
                    Generate
                </Fab>
            </Grid>
            <CollectionResult picked={picked} open={picked === undefined ? false : true} />
        </div>
    );
};

export default withStyles(styles)(CollectionPicker);
