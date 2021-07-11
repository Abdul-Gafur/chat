import { useState } from "react";
import {
  Header,
  AppMenu,
  Chat,
  DefaultContent,
  ActionButton,
} from "../components";
import { Container, makeStyles, Hidden } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(10, 3, 3, 3),
    backgroundColor: "#c1c0bb",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 0, 0, 0),
    },
  },
  actionButton: {
    position: "fixed",
    right: 20,
    bottom: 20,
  },
}));

const userList = [
  {
    id: 1,
    username: "Sovarim",
  },
  {
    id: 2,
    username: "Persival",
  },
  {
    id: 3,
    username: "King",
  },
];

const initialMessages = [
  {
    id: 1,
    userId: 2,
    chatId: 2,
    message: "Муха ву хьо?",
  },
  {
    id: 2,
    userId: 1,
    chatId: 2,
    message: "Дика ву",
  },
  {
    id: 3,
    userId: 2,
    chatId: 2,
    message: "Х1умма дуй?",
  },
  {
    id: 4,
    userId: 1,
    chatId: 2,
    message: "Дера кхи х1умма ма дац",
  },
];

const Home = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const handleMenuSwitch = (e) => {
    setMenuOpen((value) => !value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMenuClose = (e) => {
    if (!e.target.classList.contains("MuiDrawer-root")) return;
    setMenuOpen(false);
  };

  // const handleMessageSubmitOnKeyDown = (e) => {
  //   if (!(e.key === "Enter" || e.key === "Shift")) return;
  //   setMessages((value) =>
  //     value.concat([
  //       {
  //         id: value[value.length - 1].id + 1,
  //         userId: 1,
  //         chatId: 2,
  //         message: message,
  //       },
  //     ])
  //   );
  //   setMessage("");
  // };

  const handleMessageSubmit = (e) => {
    setMessages((value) =>
      value.concat([
        {
          id: value[value.length - 1].id + 1,
          userId: 1,
          chatId: 2,
          message: message,
        },
      ])
    );
    setMessage("");
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Header onMenuSwitch={handleMenuSwitch} title="Chat" />
      <AppMenu open={menuOpen} onMenuClose={handleMenuClose} list={userList} />
      <Switch>
        <Route exact path="/" component={DefaultContent} />
        <Route path="/chat/:id">
          <Container className={classes.container} maxWidth={false}>
            <Chat
              messages={messages}
              onSubmit={handleMessageSubmit}
              onTyping={handleMessageChange}
              messageValue={message}
            />
          </Container>
        </Route>
      </Switch>
      <Hidden mdDown>
        <ActionButton classes={classes.actionButton} Icon={<SearchIcon />} />
      </Hidden>
    </div>
  );
};

export { Home };
