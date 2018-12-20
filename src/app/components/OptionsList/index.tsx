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
import Input from '@material-ui/core/Input';
import { withStyles, Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

export default class OptionsList extends React.Component<any, any> {
    constructor (props) {
        super(props);
        this.state = {
            options: [],
            current: ''
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
            </div>
        );
    }
}
