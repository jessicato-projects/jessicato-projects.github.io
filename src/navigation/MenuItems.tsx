import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';

interface ChildrenItemProps {
  title: string,
  link?: string
};

interface MenuItemProps extends ChildrenItemProps {
  children?: ChildrenItemProps[]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nestedMenuItem: {
      paddingLeft: theme.spacing(4),
    }
  })
);

const MenuItems = (props: MenuItemProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { title, children, link } = props;
  const isExpandable = children && children.length > 0;

  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // const selectedElement = event.target as HTMLElement;
    // const selectedTitle = selectedElement.textContent;
    // console.log(selectedTitle);
    setOpen(!open);
    if (link) {
      history.push(link);
    }
  };

  return(
    <>
      <ListItem
        button
        onClick={handleClick}
        className={isExpandable ? '' : classes.nestedMenuItem}
      >
        <ListItemText primary={title} />
        {isExpandable && open && <ExpandLess />}
        {isExpandable && !open && <ExpandMore />}
      </ListItem>
      {isExpandable && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children?.map((nestedItem, idx) => (
              <MenuItems {...nestedItem} key={idx} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MenuItems;