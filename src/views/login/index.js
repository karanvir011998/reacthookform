import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer, Input, LoginForm } from "../../styles/views/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("Submitted");
  };
  return (
    <FormContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        Email:
        <Input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@(thewitslab)+\.[a-zA-Z]{2,4}$/,
          })}
          placeholder="email"
          name="email"
        />
        {errors.email && <p>Please enter email.</p>}
        <br />
        Password:
        <Input
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          })}
          type="password"
          placeholder="password"
        />
        {errors.password && <p>Please enter correct password </p>}
        <br />
        <input type="submit" value="Login" />
      </LoginForm>
      <p>Email Validation: - should contain thewitslab in the domain part</p>
      <p>
        Password validation: - at least 8 characters - must contain at least 1
        uppercase letter, 1 lowercase letter, and 1 number.
      </p>
    </FormContainer>
  );
};

export default Login;
