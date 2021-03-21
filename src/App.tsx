import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { APP_PATH } from './constants/application';
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
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <NavigationPanel />
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
