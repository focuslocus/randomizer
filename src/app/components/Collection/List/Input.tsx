import React from 'react';
import {
    createStyles,
    withStyles,
    Fab,
    Grid,
    Input
} from '@material-ui/core';
import AddIcon from '@material-ui/icons';
import Row from '../../shared/Row';

const styles = createStyles({
    addFab: {
        marginLeft: '10px',
        height: '40px',
        width: '40px'
    }
});

const CollectionListInput = (props: any) => {
    const { classes, onItemInput, onSubmit } = props;
    return (
        <Row>
            <form onSubmit={this.handleSubmit}>
                <Input type='text'
                    placeholder='Add an option here...'
                    value={this.state.current}
                    onChange={this.handleInput} />
                <Fab className={props.classes.addFab}
                    type='submit'>
                    <AddIcon />
                </Fab>
            </form>
        </Row>
    );
};

export default withStyles(styles)(CollectionListInput);
