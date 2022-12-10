import { FC } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { AuthFooter } from "../auth-footer";

type SignUpProps = {};

export const SignUp = (props: SignUpProps) => {
  return (
    <div>
      <p>Welcome!</p>

      <InputText name="email" type="email" placeholder="Enter your email" />
      <InputText name="password" type="password" placeholder="Your password" />

      <Button>Sign up</Button>

      <AuthFooter step="signup" />
    </div>
  );
};
