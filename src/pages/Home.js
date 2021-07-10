import { useState } from "react";
import { Header, AppMenu } from "../components";
import { Container } from "@material-ui/core";

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
      <Container style={{ paddingTop: 64 }} maxWidth="xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </Container>
    </div>
  );
};

export { Home };
