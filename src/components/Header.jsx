import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = ({ onMenuSwitch }) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onMenuSwitch}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Photos
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onMenuSwitch: PropTypes.func,
};

export { Header };
