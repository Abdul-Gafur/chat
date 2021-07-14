import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const SearchInput = ({ variant, value, onChange }) => {
  return (
    <TextField
      variant={variant}
      label="Поиск"
      InputProps={{ endAdornment: <SearchIcon /> }}
      value={value}
      onChange={onChange}
      fullWidth
      size="small"
    />
  );
};

SearchInput.defaultProps = {
  variant: "outlined",
};

SearchInput.propTypes = {
  variant: PropTypes.oneOf(["outlined", "filled"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { SearchInput };
