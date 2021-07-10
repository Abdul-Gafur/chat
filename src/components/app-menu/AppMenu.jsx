import PropTypes from "prop-types";
import { Drawer, makeStyles, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ChatBubble as ChatIcon } from "@material-ui/icons";
import clsx from "clsx";
import { AppMenuItem } from "./AppMenuItem";

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
    overflow: "auto",
    position: "relative",
    whiteSpace: "nowrap",
    width: 320,
    height: "100%",
    marginTop: 64,
    transition: theme.transitions.create(["width", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 56,
    },
  },
  drawrePaperClose: {
    width: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      width: 320,
      transform: "translateX(-100%)",
    },
  },
}));

const AppMenu = ({ open, onMenuClose, list }) => {
  const classes = useStyles();
  const link = "/chats";

  const appMenuItems = list.map((item) => (
    <AppMenuItem
      key={item.id}
      component={Link}
      to={`/chat/${item.id}`}
      title={item.username}
      Icon={<ChatIcon />}
    />
  ));

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
      <List component="nav">{appMenuItems}</List>
    </Drawer>
  );
};

AppMenu.defaultProps = {
  open: false,
  onMenuClose: null,
  list: [],
};

AppMenu.propTypes = {
  open: PropTypes.bool,
  onMenuClose: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
};

export { AppMenu };
