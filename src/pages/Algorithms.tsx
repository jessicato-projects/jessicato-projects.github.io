import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const Algorithms = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Algorithms page.
        </Typography>
      </main>
  );
};

export default Algorithms;