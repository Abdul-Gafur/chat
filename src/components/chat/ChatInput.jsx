import PropTypes from "prop-types";
import { FormControl, Input } from "@material-ui/core";

const ChatInput = ({ classes, maxRows, onChange, value, inputRef }) => {
  return (
    <FormControl className={classes}>
      <Input
        id="input"
        multiline
        placeholder="Enter a message"
        maxRows={maxRows}
        onChange={onChange}
        value={value}
        inputRef={inputRef}
      />
    </FormControl>
  );
};

ChatInput.defaultProps = {
  classes: "",
  maxRows: 6,
};

ChatInput.propTypes = {
  classes: PropTypes.string,
  maxRows: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export { ChatInput };
