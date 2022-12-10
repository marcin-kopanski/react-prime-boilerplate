import { FC } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { AuthFooter } from "../auth-footer";

export const Login: FC<{}> = () => {
  return (
    <div>
      <p>Welcome!</p>

      <InputText name="email" type="email" placeholder="Enter your email" />
      <InputText name="password" type="password" placeholder="Your password" />

      <Button>Login</Button>

      <AuthFooter step="login" />
    </div>
  );
};
