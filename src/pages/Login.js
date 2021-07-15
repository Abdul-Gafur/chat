import { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { LoginForm } from "../components";

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    paddingTop: "calc(100vh * .15)",
  },
}));

const initialFormData = {
  username: "",
  password: "",
};

const Login = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((value) => ({ ...value, [e.target.id]: e.target.value }));
  };

  const handleShowPassword = () => {
    setShowPassword((value) => !value);
  };

  return (
    <Container maxWidth="xs" classes={{ root: classes.containerRoot }}>
      <LoginForm
        formData={formData}
        onChange={handleChange}
        showPassword={showPassword}
        onShowPasswordClick={handleShowPassword}
      />
    </Container>
  );
};

export { Login };
