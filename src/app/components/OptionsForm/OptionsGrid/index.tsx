import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

interface OptionsListProps {
    deleteHandler: (option: string) => void;
    options: [][];
}

const OptionsGrid: React.SFC<OptionsListProps> = (props) => {
    console.log(props)
    // takes in a matrix, max length of a row is 3
    // loop over - check for odd or even and render/offset based on that (toggle classes)
    if (props.options.length === 0) {
        return (<div>Add some options!</div>);
    }
    return (
        <Grid container spacing={24} direction='row' alignItems='center' justify='space-between'>
            {props.options.map((row: [], index: number) => {
                // index % 2 === 0 ?
                return (
                    <Grid item
                        direction='row'
                        justify='space-evenly'
                        alignItems='center'>
                        {row.map((option: string) => {
                            return (
                                <Grid item>
                                    <Chip
                                        label={option}
                                        variant='outlined'
                                        onDelete={() => props.deleteHandler(option)}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default OptionsGrid;
