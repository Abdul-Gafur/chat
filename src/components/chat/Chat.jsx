import PropTypes from "prop-types";
import { Paper, makeStyles, Box, IconButton } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import { ChatInput } from "./ChatInput";
import { ChatItem } from "./ChatItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
    height: "100%",
    maxWidth: 600,
    borderRadius: 10,
    overflow: "hidden",
  },
  chatInputContainer: {
    display: "flex",
    bottom: 0,
    width: "100%",
    left: 0,
  },
  chatInput: {
    width: "100%",
  },
  chatItemContainer: {
    padding: theme.spacing(0, 2, 3, 0),
    overflow: "auto",
  },
}));

const Chat = ({
  messages,
  onSubmit,
  onKeyDownSubmit,
  onTyping,
  messageValue,
}) => {
  const classes = useStyles();

  const chatItems = messages.map((item) => (
    <ChatItem key={item.id} justify={item.userId === 1 ? "right" : "left"}>
      {item.message}
    </ChatItem>
  ));

  return (
    <Paper
      classes={{ root: classes.root }}
      elevation={3}
      onKeyDown={onKeyDownSubmit}
    >
      <Box className={classes.chatItemContainer}>{chatItems}</Box>
      <Box className={classes.chatInputContainer}>
        <ChatInput
          classes={classes.chatInput}
          onChange={onTyping}
          value={messageValue}
        />
        <IconButton color="primary" onClick={onSubmit}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

Chat.defaultProps = {
  messages: [],
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  onTyping: PropTypes.func,
  messageValue: PropTypes.string,
  onKeyDownSubmit: PropTypes.func,
};

export { Chat };
