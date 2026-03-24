import React from "react";
import styles from "./button.module.css";
const Button = ({
  text,
  Icon,
  containerStyles,
  buttonStyles,
  onClick,
  disabled,
}: {
  text: string;
  Icon: any;
  containerStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      style={{
        ...containerStyles,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className={styles.buttonContainer}
      onClick={disabled ? undefined : onClick}
    >
      <Icon style={buttonStyles} />
      {text}
    </div>
  );
};

export default Button;
