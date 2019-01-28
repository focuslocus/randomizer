import React from 'react';

import {
    createStyles,
    withStyles,
    WithStyles,
    Chip,
    Grid
} from '@material-ui/core';

const styles = createStyles({
    chips: {
        margin: '0px 10px'
    }
});

interface CollectionListItemProps extends WithStyles<typeof styles> {
    item: string;
    onDeleteItem(item: string): void;
}

const CollectionListItem = (props: CollectionListItemProps) => {
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
