import PropTypes from "prop-types";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import { ChatBubble as ChatIcon } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  drawerOpen: {
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      zIndex: 1200,
      width: "100%",
      background: "rgba(0, 0, 0, 0.5)",
    },
  },
  drawerPaper: {
    overflow: "hidden",
    position: "relative",
    whiteSpace: "nowrap",
    width: 320,
    height: "100%",
    paddingTop: 64,
    transition: theme.transitions.create(["width", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
  },
  drawrePaperClose: {
    width: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      width: 320,
      transform: "translateX(-100%)",
    },
  },
}));

const AppMenu = withRouter(({ history, open = true, onMenuClose }) => {
  const classes = useStyles();
  const link = "/chats";
  const {
    location: { pathname },
  } = history;

  return (
    <Drawer
      variant="permanent"
      classes={{
        root: clsx({
          [classes.root]: true,
          [classes.drawerOpen]: open,
        }),
        paper: clsx({
          [classes.drawerPaper]: true,
          [classes.drawrePaperClose]: !open,
        }),
      }}
      onClick={onMenuClose}
    >
      <List component="nav">
        <ListItem
          button
          component={Link}
          to={link}
          selected={pathname === link}
        >
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText>Chats</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
});

AppMenu.propTypes = {
  open: PropTypes.bool,
  onMenuClose: PropTypes.func,
};

export { AppMenu };
