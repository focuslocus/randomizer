import * as React from 'react';
import {
  createStyles,
  withStyles,
  Chip,
  Grid,
  WithStyles
} from '@material-ui/core';
import { classicNameResolver } from 'typescript';

const styles = createStyles({
  chips: {
    margin: '0px 10px'
  }
});
interface OptionsListProps extends WithStyles<typeof styles> {
    deleteHandler: (option: string) => void;
    options: [][];
}

const OptionsGrid: React.SFC<OptionsListProps> = (props) => {
    // takes in a matrix, max length of a row is 3
    // loop over - check for odd or even and render/offset based on that (toggle classes)
    if (props.options.length === 0) {
        return (<div>Add some options!</div>);
    }
    const { classes } = props;

    return (
        <Grid
          container
          spacing={24}
          direction='column'
          alignItems='center'
          justify='space-evenly'>
            {props.options.map((row: [], index: number) => {
                // index % 2 === 0 ?
                return (
                  <Grid
                      item
                      key={index}>
                    {row.map((option: string, index: number) => {
                        return (
                          <Chip
                              key={index}
                              className={classes.chips}
                              label={option}
                              variant='outlined'
                              onDelete={() => props.deleteHandler(option)}
                          />
                        );
                    })}
                  </Grid>
                );
            })}
        </Grid>
    );
};

export const OptionsGridComponent = withStyles(styles)(OptionsGrid);
