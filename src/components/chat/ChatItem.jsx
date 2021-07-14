import PropTypes from "prop-types";
import { Typography, Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    margin: "5px 0",
  },
  message: {
    maxWidth: "70%",
    backgroundColor: theme.palette.primary.light,
    padding: 8,
    color: "#fff",
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
    wordBreak: "break-word",
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

  const message = children.split(/\n/).map((item, i) => (
    <Typography
      key={`message-${i}`}
      variant="subtitle1"
      component="p"
      {...other}
    >
      {item}
    </Typography>
  ));

  return (
    <Box className={clsx(classes.container, classes[justify])}>
      <Box className={clsx(classes[`${justify}Message`], classes.message)}>
        {message}
      </Box>
    </Box>
  );
};

ChatItem.defaultProps = {
  children: null,
  justify: "left",
  children: "",
};

ChatItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  justify: PropTypes.oneOf(["center", "left", "right"]),
};

export { ChatItem };
