import * as React from 'react';
import {
    createStyles,
    withStyles,
    Divider,
    Fab,
    Grid,
    Input,
    Modal,
    Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { OptionsGridComponent } from './OptionsGrid';

const styles = createStyles({
    formRow: {
        margin: '24px 0px'
    },
    addFab: {
        marginLeft: '10px',
        height: '40px',
        width: '40px'
    },
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

interface OptionsFormState {
    options: string[][];
    current: string;
    selected: string;
    modalOpen: boolean;
    numOfOptions: number;
}

class OptionsForm extends React.Component<any, any> {
    constructor (props) {
        super(props);
        const state: OptionsFormState = {
            options: [[]],
            current: '',
            selected: '',
            modalOpen: false,
            numOfOptions: 0
        };

        this.state = state;
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleInput = (event) => {
        this.setState({ current: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { options, current: optionToAdd, numOfOptions } = this.state;
        let lastOptionsRow = options[options.length - 1];

        if (lastOptionsRow.length < 3) {
            lastOptionsRow = lastOptionsRow.push(optionToAdd);
        } else {
            options.push([optionToAdd]);
        }
        this.setState(() => ({ options, current: '', numOfOptions: numOfOptions + 1 }));
    }

    handleDelete = (valueToDelete: string): void => {
        const { options: matrix, numOfOptions } = this.state;
        const newOptionsList = matrix.reduce((updatedMatrix, currentRow, currentRowIndex) => {
            matrix[currentRowIndex].forEach((option) => {
                const matrixLength = updatedMatrix.length - 1;
                if (option !== valueToDelete) {
                    updatedMatrix[matrixLength].length > 2 ? updatedMatrix.push([option]) : updatedMatrix[matrixLength].push(option);
                }
            });
            return updatedMatrix;

        }, [[]]);
        this.setState({ options: newOptionsList, numOfOptions: numOfOptions - 1 });
    }

    handleGenerate = () => {
        const combinedOptions = this.state.options.reduce((flattened, optionRow) => flattened.concat(optionRow), []);
        this.setState((state) => ({
            selected: combinedOptions[Math.floor(Math.random() * combinedOptions.length)],
            modalOpen: true
        }));
    }

    public render() {
        const { numOfOptions } = this.state;
        const { classes } = this.props;
        return (
            <Grid container
                justify='space-evenly'>
                <Grid item
                    className={classes.formRow}>
                    <form onSubmit={this.handleSubmit}>
                        <Input type='text'
                            placeholder='Add an option here...'
                            value={this.state.current}
                            onChange={this.handleInput} />
                        <Fab className={classes.addFab}
                            type='submit'>
                            <AddIcon />
                        </Fab>
                    </form>
                </Grid>
                <OptionsGridComponent deleteHandler={this.handleDelete} options={this.state.options} />
                <Grid item
                    className={classes.formRow}>
                    <Fab
                        disabled={numOfOptions < 2 ? true : false}
                        color='primary'
                        variant='extended'
                        onClick={this.handleGenerate}>
                        Generate
                </Fab>
                </Grid>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.closeModal}>
                    <div className={classes.modal}>
                        <Typography variant='h6'>
                            {`Congrats: you've been presented with ${this.state.selected}`}
                        </Typography>
                    </div>
                </Modal>
            </Grid>
        );
    }
}

export const OptionsFormComponent = withStyles(styles)(OptionsForm);
