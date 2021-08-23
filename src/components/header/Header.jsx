import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
  ExitToApp as ExitIcon,
} from "@material-ui/icons";
import { ActionButton } from "../";

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

const Header = ({ onMenuSwitch, onExit, onSearch, title }) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <ActionButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={onMenuSwitch}
          Icon={<MenuIcon />}
        />

        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Hidden only={["lg", "xl"]}>
          <div>
            <ActionButton
              color="inherit"
              Icon={<SearchIcon />}
              onClick={onSearch}
            />
          </div>
        </Hidden>
        <div>
          <ActionButton color="inherit" Icon={<AccountCircle />} />
        </div>
        <div>
          <ActionButton color="inherit" Icon={<ExitIcon />} onClick={onExit} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  title: "Title",
  onMenuSwitch: null,
};

Header.propTypes = {
  onMenuSwitch: PropTypes.func,
  title: PropTypes.string,
};

export { Header };
