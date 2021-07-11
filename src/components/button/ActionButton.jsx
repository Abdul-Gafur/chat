import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";

const ActionButton = ({ classes, color, Icon }) => {
  return (
    <Fab className={classes} color={color}>
      {Icon}
    </Fab>
  );
};

ActionButton.defaultProps = {
  classes: "",
  color: "primary",
  Icon: "",
};

ActionButton.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export { ActionButton };
