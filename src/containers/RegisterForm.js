import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RegisterForm as BaseRegisterForm } from "../components";

const RegisterForm = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = ({ confirmPassword, ...values }) => {
    history.push("/");
  };

  const handleShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((value) => !value);
  };

  return (
    <BaseRegisterForm
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      onShowPasswordClick={handleShowPassword}
      onShowConfirmPasswordClick={handleShowConfirmPassword}
      onSubmit={handleSubmit}
    />
  );
};

export { RegisterForm };
