import * as React from 'react';
import {
  createStyles,
  withStyles,
  Chip,
  Grid,
  WithStyles
} from '@material-ui/core';

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
