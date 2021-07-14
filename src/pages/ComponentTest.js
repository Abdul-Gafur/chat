import { Container, makeStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { SearchModal } from "../components";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

const ComponentTest = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Switch>
        <Route path="/component/search-modal">
          <SearchModal />
        </Route>
      </Switch>
    </Container>
  );
};

export { ComponentTest };
