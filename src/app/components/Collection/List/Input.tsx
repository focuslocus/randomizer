import React from 'react';
import {
    createStyles,
    withStyles,
    WithStyles,
    Fab,
    Grid,
    Input
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import sharedStyles from '../../common/Css';

const styles = createStyles({
    addFab: {
        marginLeft: '10px',
        height: '40px',
        width: '40px'
    },
    formRow: sharedStyles.formRow
});

interface CollectionListInputProps extends WithStyles<typeof styles> {
    onItemInput(e: any): void;
    onAddItem(e: any): void;
    current: string;
}

const CollectionListInput = (props: CollectionListInputProps) => {
    const { classes, onItemInput, onAddItem, current } = props;
    return (
        <Grid item
            className={classes.formRow}>
            <form onSubmit={onAddItem}>
                <Input type='text'
                    placeholder='Add an option here...'
                    value={current}
                    onChange={onItemInput}
                    />
                <Fab className={classes.addFab}
                    type='submit'>
                    <AddIcon />
                </Fab>
            </form>
        </Grid>
    );
};

export default withStyles(styles)(CollectionListInput);
