import * as React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { AddToQueue } from '@material-ui/icons';
import Collection from '../Collection/Collection';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  spinner: {
    marginTop: 50
  },
  showA2hs: {
    display: 'block'
  },
  noShowA2hs: {
    display: 'none'
  }
});

interface AppShellState {
  showA2HS: boolean;
  deferredPrompt: any;
}

class AppShellBase extends React.Component<
  WithStyles<typeof styles>,
  AppShellState
> {
  constructor(props) {
    super(props);
    const state: AppShellState = {
      showA2HS: false,
      deferredPrompt: null
    };

    this.state = state;
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', e => {
      console.log('before install happened');
      e.preventDefault();
      this.setState({ showA2HS: true, deferredPrompt: e });
    });
  }

  a2hsHandler = (): void => {
    if (this.state.deferredPrompt) {
      this.state.deferredPrompt.prompt();
      this.state.deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.setState({ deferredPrompt: null });
      });
    }
  };

  render(): React.ReactNode {
    const { classes } = this.props;
    const { showA2HS } = this.state;
    return (
      <div>
        <Collection />
        <AddToQueue
          id='a2hs'
          onClick={this.a2hsHandler}
          className={showA2HS ? classes.showA2hs : classes.noShowA2hs}
        />
      </div>
    );
  }
}

export const AppShellComponent = withStyles(styles)(AppShellBase);
