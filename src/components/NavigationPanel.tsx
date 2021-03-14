import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

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
    title: 'Interview Topics',
    children: [
      {
        title: 'Sorting'
      },
      {
        title: 'Algorithms'
      }
    ]
  }
];

const useStyles = makeStyles((theme: Theme) =>
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
    },
    nestedMenuItem: {
      paddingLeft: theme.spacing(4),
    }
  })
);

const NavigationPanel = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const selectedElement = event.target as HTMLElement;
    const selectedTitle = selectedElement.textContent;
    console.log(selectedTitle);
    setOpen(!open);
  };

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
          <Typography
            className={classes.username}
            variant="body1"
          >
            {USER.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {USER.jobTitle}
          </Typography>
        </div>
        <Divider />
        <List>
          {MENU_ITEMS.map((item) => (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText primary={item.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((nestedItem) => (
                    <ListItem button className={classes.nestedMenuItem}>
                      <ListItemText primary={nestedItem.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavigationPanel;