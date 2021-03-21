import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import { APP_PATH } from '../constants/application';
import MenuItems from './MenuItems';

const DRAWER_WIDTH = '15rem';

const USER = {
  name: 'Jessica To',
  jobTitle: 'Software Engineer'
};

const MENU_ITEMS = [
  {
    title: 'Projects',
    children: [{
      title: '(Coming Soon)'
    }]
  },
  {
    title: 'Refresher Topics',
    children: [
      {
        title: 'Algorithms',
        link: APP_PATH.ALGORITHMS
      },
      {
        title: 'Data Structures',
        link: APP_PATH.DATA_STRUCTURES
      }
    ]
  }
];

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    drawerWrapper: {
      overflow: 'auto',
    },
    avatarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem 0'
    },
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64,
      textDecoration: 'none'
    },
    username: {
      fontWeight: 500
    }
  })
);

const NavigationPanel = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerWrapper}>
        <div className={classes.avatarWrapper}>
          <Avatar
            className={classes.avatar}
            component={RouterLink}
            // src={user.avatar}
            to="/"
          >
            JT
          </Avatar>
          <Typography className={classes.username} variant="body1">
            {USER.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {USER.jobTitle}
          </Typography>
        </div>
        <Divider />
        <List>
          {MENU_ITEMS.map((item, idx) => <MenuItems {...item} key={idx} />)}
        </List>
      </div>
    </Drawer>
  );
};

export default NavigationPanel;