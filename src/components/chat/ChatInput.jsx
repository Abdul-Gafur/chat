import PropTypes from "prop-types";
import { FormControl, Input, InputLabel } from "@material-ui/core";

const ChatInput = ({ classes, maxRows }) => {
  return (
    <FormControl className={classes}>
      <Input
        id="input"
        multiline
        placeholder="Enter a message"
        maxRows={maxRows}
      />
    </FormControl>
  );
};

ChatInput.defaultProps = {
  classes: null,
  maxRows: 4,
};

ChatInput.propTypes = {
  classes: PropTypes.string,
  maxRows: PropTypes.number,
};

export { ChatInput };
