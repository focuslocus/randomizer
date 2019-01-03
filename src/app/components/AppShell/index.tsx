import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import withRoot from '../WithRoot';
import OptionsForm from '../OptionsForm';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
              <OptionsForm/>
            </Grid>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export const AppShellComponent = withRoot(withStyles(styles, { withTheme: true })(AppShellBase));
