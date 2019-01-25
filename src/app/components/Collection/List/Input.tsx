import React from 'react';
import {
    createStyles,
    withStyles,
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

const CollectionListInput = (props: any) => {
    const { classes, onItemInput, onSubmit } = props;
    return (
        <Grid item
            className={classes.formRow}>
            <form>
                <Input type='text'
                    placeholder='Add an option here...'
                    value=''
                    onChange={onItemInput} />
                <Fab className={classes.addFab}
                    type='submit'>
                    <AddIcon />
                </Fab>
            </form>
        </Grid>
    );
};

export default withStyles(styles)(CollectionListInput);
