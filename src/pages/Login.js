import { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { LoginForm } from "../components";

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    paddingTop: "calc(100vh * .15)",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleShowPassword = () => {
    setShowPassword((value) => !value);
  };

  return (
    <Container maxWidth="xs" classes={{ root: classes.containerRoot }}>
      <LoginForm
        showPassword={showPassword}
        onShowPasswordClick={handleShowPassword}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export { Login };
