import { useState, useRef, forwardRef, useEffect } from "react";
import {
  Header,
  AppMenu,
  Chat,
  DefaultContent,
  ActionButton,
} from "../components";
import { useLocation } from "react-router-dom";
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
  {
    id: 5,
    userId: 1,
    chatId: 2,
    message:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum ",
  },
];

const Home = () => {
  const classes = useStyles();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const chatInputRef = useRef();
  const chatRef = useRef();

  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, location]);

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

  const handleMessageSubmit = (e) => {
    if (!message) return;
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
    chatInputRef.current.focus();
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
              inputRef={chatInputRef}
              chatRef={chatRef}
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
