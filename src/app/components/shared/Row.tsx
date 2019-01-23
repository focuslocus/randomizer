import React from 'react';
import {
    createStyles,
    withStyles,
    Grid
} from '@material-ui/core';

const styles = createStyles({
    row: {
        margin: '24px 0px'
    },
});

const Row = (props: any) => {
    return (
        <Grid item className={props.classes.row} />
    );
};

export default withStyles(styles)(Row);
