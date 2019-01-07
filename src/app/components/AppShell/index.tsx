import * as React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  AppBar,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import { AddToQueue } from '@material-ui/icons';
import { OptionsFormComponent } from '../OptionsForm';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  spinner: {
    marginTop: 50
  }
});

class AppShellBase extends React.Component<WithStyles<typeof styles>, {}> {

  showNotification(): void {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg.showNotification('You\'ve been notified', { body: 'of this message' });
      });
    }
  }

  render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='title' color='inherit' className={classes.grow}>
              Randomizer
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <OptionsFormComponent />
              <AddToQueue id='a2hs' onClick={this.a2hsHandler} className={showA2HS ? classes.showA2hs : classes.noShowA2hs} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const AppShellComponent = withStyles(styles)(AppShellBase);
