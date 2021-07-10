import PropTypes from "prop-types";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { TurnedIn as DefaultIcon } from "@material-ui/icons";
import { withRouter } from "react-router";

const AppMenuItem = withRouter(
  ({ history, title, Icon, staticContext, ...other }) => {
    return (
      <ListItem
        button
        {...other}
        selected={history.location.pathname === other.to}
      >
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </ListItem>
    );
  }
);

AppMenuItem.defaultProps = {
  title: "Item",
  Icon: <DefaultIcon />,
};

AppMenuItem.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.element,
};

export { AppMenuItem };
