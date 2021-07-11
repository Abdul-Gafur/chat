import PropTypes from "prop-types";
import { Typography, Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    margin: "5px 0",
  },
  left: {
    justifyContent: "flex-start",
  },
  right: {
    justifyContent: "flex-end",
  },
  center: {
    justifyContent: "center",
  },
  typography: {
    maxWidth: "70%",
    padding: 5,
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
    overflowWrap: "anywhere",
  },
  leftMessage: {
    borderRadius: "15px 10px 10px 0",
  },
  rightMessage: {
    borderRadius: "10px 15px 0 10px",
  },
  centerMessage: {
    borderRadius: 15,
  },
}));

const ChatItem = ({ children, justify, ...other }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.box, classes[justify])}>
      <Typography
        variant="subtitle1"
        component="p"
        {...other}
        className={clsx(classes.typography, classes[`${justify}Message`])}
      >
        {children}
      </Typography>
    </Box>
  );
};

ChatItem.defaultProps = {
  children: null,
  justify: "left",
};

ChatItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  justify: PropTypes.oneOf(["center", "left", "right"]),
};

export { ChatItem };
