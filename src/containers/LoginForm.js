import { useState } from "react";
import { LoginForm as BaseLoginForm } from "../components";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
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
