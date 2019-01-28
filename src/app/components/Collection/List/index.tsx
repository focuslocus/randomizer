import React from 'react';
import {
    createStyles,
    withStyles,
    Grid
} from '@material-ui/core';

import CollectionListInput from './Input';
import CollectionListItem from './Item';
import sharedStyles from '../../common/Css';

const styles = createStyles({
    formRow: sharedStyles.formRow
});

const CollectionList = (props: any) => {
    const { items, onDeleteItem, onItemInput, onAddItem, classes, current } = props;
    const listComponents = items.reduce((updateditems, currentItem, currentItemIndex) => {
        const itemsLength = updateditems.length - 1;
        const itemComponent = <CollectionListItem
                key={currentItemIndex}
                item={currentItem}
                onDeleteItem={onDeleteItem} />;
        updateditems[itemsLength].length > 2 ? updateditems.push([itemComponent]) : updateditems[itemsLength].push(itemComponent);
    return updateditems;
    }, [[]]);

    return (
        <Grid container
            justify='space-evenly'>
            <CollectionListInput onItemInput={onItemInput}
                onAddItem={onAddItem}
                current={current}/>
            <Grid container
                spacing={24}
                direction='column'
                alignItems='center'
                justify='space-evenly'>
                {listComponents.map((row: string, index: number) => {
                    return (
                        <Grid item
                            key={index}>
                                {row}
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(CollectionList);
