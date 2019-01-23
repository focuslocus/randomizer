import React from 'react';
import {
    createStyles,
    withStyles,
    Chip,
    Grid
} from '@material-ui/core';

import CollectionListInput from './Input';
import CollectionListItem from './Item';

const CollectionList = (props: any) => {
    const { classes, onDeleteItem, onItemInput } = props;
    return (
            <Grid
                container
                justify='space-evenly'>
                <CollectionListInput onItemInput={onItemInput} />
                <Grid
                    container
                    spacing={24}
                    direction='column'
                    alignItems='center'
                    justify='space-evenly'>
                        {props.items.map((item: string, index: number) => {
                            <CollectionListItem
                                key={index}
                                item={item}
                                onDeleteItem={props.onDeleteItem} />
                        })}
                    </Grid>
                </Grid>
    )
};

export default withStyles(styles)(CollectionList);
