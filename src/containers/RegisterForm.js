import { useState } from "react";
import { RegisterForm as BaseRegisterForm } from "../components";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = ({ confirmPassword, ...values }) => {
    console.log(values);
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
