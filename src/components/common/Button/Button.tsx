import React from "react";
import styles from "./button.module.css";
const Button = ({
  text,
  Icon,
  containerStyles,
  buttonStyles,
  onClick,
}: {
  text: string;
  Icon: any;
  containerStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <div
      style={containerStyles}
      className={styles.buttonContainer}
      onClick={onClick}
    >
      <Icon style={buttonStyles} />
      {text}
    </div>
  );
};

export default Button;
