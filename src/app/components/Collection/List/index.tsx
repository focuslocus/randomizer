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
    const { items, onDeleteItem, onItemInput } = props;
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
                    {items.map((item: string, index: number) => {
                        return (<CollectionListItem
                            key={index}
                            item={item}
                            onDeleteItem={onDeleteItem} />
                        );
                    })}
            </Grid>
        </Grid>
    );
};

export default CollectionList;
