import { Container, makeStyles } from "@material-ui/core";
import { LoginForm } from "../components";

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    paddingTop: "10%",
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
