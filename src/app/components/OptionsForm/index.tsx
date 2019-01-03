import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles, Divider } from '@material-ui/core';

import OptionsGrid from './OptionsGrid';

interface OptionsFormState {
    options: string[][];
    current: string;
    selected: string;
    modalOpen: boolean;
}

export default class OptionsForm extends React.Component<any, any> {
    constructor (props) {
        super(props);
        const state: OptionsFormState = {
            options: [['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine']],
            current: '',
            selected: '',
            modalOpen: false
        };

        this.state = state;
    }

    handleInput = (event) => {
        this.setState({ current: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((state) => ({ options: state.options.concat([state.current]), current: '' }));
    }

    handleDelete = (value: string): void => {
        const newOptionsList = this.state.options.filter(item => item !== value);
        this.setState({ options: newOptionsList });
    }

    handleGenerate = () => {
        this.setState((state) => ({
            selected: state.options[Math.floor(Math.random() * state.options.length)],
            modalOpen: true
        }));
    }

    public render() {
        const { options } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input type='text'
                        placeholder='testing'
                        value={this.state.current}
                        onChange={this.handleInput} />
                    <Input
                        id='formatted-option-input'
                        type='submit'
                    />
                </form>
                <OptionsGrid deleteHandler={this.handleDelete} options={this.state.options}></OptionsGrid>
                <div>

                    <Fab
                        disabled={options.length < 2 ? true : false}
                        color='primary'
                        variant='extended'
                        onClick={this.handleGenerate}
                    >
                        Generate
                </Fab>
                </div>
                <Modal open={this.state.modalOpen}>
                    <div>
                        <Typography variant='h3'>
                            {`Congrats: you've been presented with ${this.state.selected}`}
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}
