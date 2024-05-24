import { ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClickButton: () => void;
}

const Button = ({ children, type, onClickButton }: ButtonsProps) => {
  return (
    <>
      <div>Buttons</div>
      <button
        type="button"
        className={"btn btn-" + type}
        onClick={() => onClickButton()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
