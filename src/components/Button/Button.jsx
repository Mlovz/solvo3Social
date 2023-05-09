import React from "react";
import cls from "./button.module.scss";

const Button = ({
  className,
  onClick,
  disabled,
  variant = "solid",
  type,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${cls.btn} ${cls[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
