import { useState } from "react";
import { Header, DefaultContent, ActionButton, Search } from "../components";
import { AppMenu, Chat } from "../containers";
import { Container, makeStyles, Hidden } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Switch, Route, useHistory } from "react-router-dom";

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

const Home = () => {
  const classes = useStyles();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleMenuSwitch = (e) => {
    setMenuOpen((value) => !value);
  };

  const handleMenuClose = (e) => {
    if (!e.target.classList.contains("MuiDrawer-root")) return;
    setMenuOpen(false);
  };

  const handleExit = () => {
    history.push("/login");
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Header
        onMenuSwitch={handleMenuSwitch}
        onExit={handleExit}
        onSearch={handleSearchOpen}
        title="Chat"
      />
      <AppMenu open={menuOpen} onMenuClose={handleMenuClose} />
      <Switch>
        <Route exact path="/" component={DefaultContent} />
        <Route path="/chat/:id">
          <Container className={classes.container} maxWidth={false}>
            <Chat />
          </Container>
        </Route>
      </Switch>
      <Hidden mdDown>
        <ActionButton
          classes={{ root: classes.actionButton }}
          Icon={<SearchIcon />}
          fab
          onClick={handleSearchOpen}
          color="primary"
        />
      </Hidden>
      <Search open={searchOpen} onClose={handleSearchClose} />
    </div>
  );
};

export { Home };
