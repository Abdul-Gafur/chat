import { Container, makeStyles } from "@material-ui/core";
import { RegisterForm } from "../components";

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    paddingTop: "calc(100vh * .15)",
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" classes={{ root: classes.containerRoot }}>
      <RegisterForm />
    </Container>
  );
};

export { Register };
