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

const Chat = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.root }} elevation={3}>
      <Box className={classes.chatItemContainer}>
        <ChatItem justify="right">Муха ву хьо?</ChatItem>
        <ChatItem justify="left">Дика ву</ChatItem>
        <ChatItem justify="right">Х1умма дуй?</ChatItem>
        <ChatItem justify="right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quas
          quo, aut dolores, fugit iure consequuntur qui nobis repudiandae nulla
          perferendis odio molestias quis voluptatibus magnam, doloribus
          voluptatum ipsa debitis.
        </ChatItem>

        <ChatItem justify="left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quas
          quo, aut dolores, fugit iure consequuntur qui nobis repudiandae nulla
          perferendis odio molestias quis voluptatibus magnam, doloribus
          voluptatum ipsa debitis.
        </ChatItem>
        <ChatItem justify="right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quas
          quo, aut dolores, fugit iure consequuntur qui nobis repudiandae nulla
          perferendis odio molestias quis voluptatibus magnam, doloribus
          voluptatum ipsa debitis.
        </ChatItem>
      </Box>
      <Box className={classes.chatInputContainer}>
        <ChatInput classes={classes.chatInput} />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export { Chat };
