import React from 'react';

import {
    createStyles,
    withStyles,
    Chip,
    Grid
} from '@material-ui/core';

const styles = createStyles({
    chips: {
        margin: '0px 10px'
    }
});

const CollectionListItem = (props: any) => {
    const { item, classes, onDeleteItem } = props;
    return(
        <Grid item>
            <Chip
                className={props.classes.chips}
                label={item}
                variant='outlined'
                onDelete={() => onDeleteItem(item)}
            />
        </Grid>
    );

};

export default withStyles(styles)(CollectionListItem);
