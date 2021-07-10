import { Paper, makeStyles, Box, IconButton } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import { ChatInput } from "./ChatInput";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(2),
    height: "100%",
    maxWidth: 600,
    borderRadius: 10,
  },
  box: {
    display: "flex",
    position: "absolute",
    padding: theme.spacing(2),
    bottom: 0,
    width: "100%",
    left: 0,
  },
  chatInput: {
    width: "100%",
  },
}));

const Chat = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.root }} elevation={3}>
      <Box className={classes.box}>
        <ChatInput classes={classes.chatInput} />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export { Chat };
