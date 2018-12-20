/**
 * State = {
 *  options: []
 * }
 * 
 * import chips component
 * render whatever is in state.options
 * input line -> adds to options array
 * button -> onclick will choose random from state.options and display in pop-up
 */

import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles, Divider } from '@material-ui/core';

export default class OptionsList extends React.Component<any, any> {
    constructor (props) {
        super(props);
        this.state = {
            options: [],
            current: '',
            selected: '',
            modalOpen: false
        };
    }

    handleInput = (event) => {
        this.setState({ current: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((state) => ({ options: state.options.concat([state.current]), current: '' }));
    }

    handleDelete = (value) => {
        const newOptionsList = this.state.options.filter(item => item !== value);
        this.setState({options: newOptionsList});
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
                {options.length > 0 ? options.map((item, index) => (
                    <Chip
                    label={item}
                    onDelete={() => this.handleDelete(item)}
                    />)) : 'Add an option'}
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
                <Fab
                  disabled={options.length < 2 ? true : false }
                  color='primary'
                  variant='extended'
                  onClick={this.handleGenerate}
                  >
                  Generate
                </Fab>
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
