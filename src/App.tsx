import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, useTheme, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import { APP_PATH, DRAWER_WIDTH } from './constants/application';
import NavigationPanel from './navigation/NavigationPanel';
import Main from './pages/Main';
import Algorithms from './pages/Algorithms';
import DataStructures from './pages/DataStructures';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  })
);

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const container = window?.document?.body;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
        >
          <NavigationPanel drawerOpen={drawerOpen} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <NavigationPanel drawerOpen={drawerOpen} />
        </Drawer>
      </Hidden>
      <Switch>
          <Route path={APP_PATH.DATA_STRUCTURES}>
            <DataStructures />
          </Route>
          <Route path={APP_PATH.ALGORITHMS}>
            <Algorithms />
          </Route>
          <Route path={APP_PATH.MAIN}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
