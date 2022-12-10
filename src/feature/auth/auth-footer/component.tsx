import { FC } from "react";
import { Link } from "react-router-dom";

type AuthFooterProps = {
  step: "login" | "signup";
};

export const AuthFooter: FC<AuthFooterProps> = ({ step }) => {
  const [linkText, linkHref, question] =
    step === "login"
      ? ["Sign up", "/signup", "Don't have an account?"]
      : ["Login", "/login", "Already have an account?"];

  return (
    <div>
      {question}
      <Link to={linkHref}>{linkText}</Link>
    </div>
  );
};
