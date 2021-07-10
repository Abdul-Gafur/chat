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

const Home = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuSwitch = (e) => {
    setMenuOpen((value) => !value);
  };

  const handleMenuClose = (e) => {
    if (!e.target.classList.contains("MuiDrawer-root")) return;
    setMenuOpen(false);
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Header onMenuSwitch={handleMenuSwitch} title="Chat" />
      <AppMenu open={menuOpen} onMenuClose={handleMenuClose} list={userList} />
      <Switch>
        <Route exact path="/" component={DefaultContent} />
        <Route path="/chat/:id">
          <Container className={classes.container} maxWidth={false}>
            <Chat />
          </Container>
        </Route>
      </Switch>
      <Hidden xsDown>
        <ActionButton classes={classes.actionButton} Icon={<SearchIcon />} />
      </Hidden>
    </div>
  );
};

export { Home };
