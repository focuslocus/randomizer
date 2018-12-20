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
import { withStyles } from '@material-ui/core';

export default class OptionsList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    public render() {
        return (<Input value='testing'></Input>);
    }
}
