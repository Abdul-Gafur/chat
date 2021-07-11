import PropTypes from "prop-types";
import { FormControl, Input } from "@material-ui/core";

const ChatInput = ({ classes, maxRows, onChange, value }) => {
  return (
    <FormControl className={classes}>
      <Input
        id="input"
        multiline
        placeholder="Enter a message"
        maxRows={maxRows}
        onChange={onChange}
        value={value}
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
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export { ChatInput };
