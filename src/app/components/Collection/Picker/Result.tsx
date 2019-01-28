import React from 'react';
import {
    createStyles,
    withStyles,
    WithStyles,
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

interface CollectionResultProps extends WithStyles<typeof styles> {
    picked: string;
    onModalClose(): void;
}

const CollectionResult = (props: CollectionResultProps) => {
    const { picked, classes, onModalClose } = props;
    return (
        <Modal open
            onClose={onModalClose}>
            <div className={classes.modal}>
                <Typography variant='h6'>
                    {`Congrats: you've been presented with ${picked}`}
                </Typography>
            </div>
        </Modal>
    );
};

export default withStyles(styles)(CollectionResult);
