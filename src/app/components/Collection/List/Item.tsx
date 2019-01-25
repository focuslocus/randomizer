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
        <Chip
            className={classes.chips}
            label={item}
            variant='outlined'
            onDelete={() => onDeleteItem(item)}
        />
    );

};

export default withStyles(styles)(CollectionListItem);
