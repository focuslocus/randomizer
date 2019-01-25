import React from 'react';
import {
    createStyles,
    withStyles,
    Modal,
    Typography
 } from '@material-ui/core';

const styles = createStyles({
    modal: {
        position: 'absolute',
        height: '100px',
        width: '250px',
        backgroundColor: 'white',
        boxShadow: '10px',
        padding: '10px',
        outline: 'none',
        top: '50%',
        left: '50%',
        margin: '0 auto',
        marginLeft: '-125px',
        marginTop: '-50px'
    }
});

const CollectionResult = (props: any) => {
    const {open, picked, classes} = props;
    return (
        <Modal
            open={open}
            onClose={!open}>
            <div className={classes.modal}>
                <Typography variant='h6'>
                    {`Congrats: you've been presented with ${picked}`}
                </Typography>
            </div>
        </Modal>
    );
};

export default withStyles(styles)(CollectionResult);
