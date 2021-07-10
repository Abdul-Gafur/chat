import PropTypes from "prop-types";
import { FormControl, Input, InputLabel } from "@material-ui/core";

const ChatInput = ({ classes }) => {
  return (
    <FormControl className={classes}>
      <Input id="input" multiline placeholder="Enter a message" />
    </FormControl>
  );
};

ChatInput.defaultProps = {
  classes: null,
};

ChatInput.propTypes = {
  classes: PropTypes.string,
};

export { ChatInput };
