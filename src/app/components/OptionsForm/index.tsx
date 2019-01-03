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
  }
});

interface OptionsFormState {
    options: string[][];
    current: string;
    selected: string;
    modalOpen: boolean;
}

class OptionsForm extends React.Component<any, any> {
    constructor (props) {
        super(props);
        const state: OptionsFormState = {
            options: [[]],
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
        const { options } = this.state;
        const { current: optionToAdd } = this.state;
        let lastOptionsRow = options[options.length - 1];

        if (lastOptionsRow.length < 3) {
          lastOptionsRow = lastOptionsRow.push(optionToAdd);
        } else {
          options.push([optionToAdd]);
        }
        this.setState(() => ({ options, current: '' }));
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
                        onChange={this.handleInput}/>
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
                    disabled={options.length < 2 ? true : false}
                    color='primary'
                    variant='extended'
                    onClick={this.handleGenerate}>
                  Generate
                </Fab>
              </Grid>
              <Modal open={this.state.modalOpen}>
                  <div>
                      <Typography variant='h3'>
                          {`Congrats: you've been presented with ${this.state.selected}`}
                      </Typography>
                  </div>
              </Modal>
            </Grid>
        );
    }
}

export const OptionsFormComponent = withStyles(styles)(OptionsForm);
