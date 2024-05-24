import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  type: "success" | "danger" | "warning" | "info";
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <>
      <div
        className="alert alert-primary mt-3 alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
