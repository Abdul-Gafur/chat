import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm as BaseLoginForm } from "../components";

const LoginForm = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    history.push("/");
  };

  const handleShowPassword = () => {
    setShowPassword((value) => !value);
  };

  return (
    <BaseLoginForm
      showPassword={showPassword}
      onShowPasswordClick={handleShowPassword}
      onSubmit={handleSubmit}
    />
  );
};

export { LoginForm };
