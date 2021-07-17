import { makeStyles, Container } from "@material-ui/core";
import { LoginForm } from "../containers";

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    paddingTop: "calc(100vh * .15)",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" classes={{ root: classes.containerRoot }}>
      <LoginForm />
    </Container>
  );
};

export { Login };
