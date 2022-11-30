import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface IFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    signIn(data.email, data.password);
    navigate("/");
  };
  return (
    <section className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <label htmlFor="emaillogin">Email</label>
          <input
            id="emaillogin"
            className="inputlogin"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email Adress",
              },
            })}
            placeholder="email@example.com"
          />
          {errors?.email && (
            <p className="error-message">{errors.email?.message}</p>
          )}
          <label htmlFor="passwordlogin">Password</label>
          <input
            id="passwordlogin"
            className="inputlogin"
            type={"password"}
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Must be more than 6" },
            })}
            placeholder="Password"
          />
          {errors?.password && (
            <p className="error-message">{errors.password?.message}</p>
          )}
          <input type="submit" value="Login" className="submit-login" />
        </form>
      </div>
    </section>
  );
}
