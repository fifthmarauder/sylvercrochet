import React from "react";
import styles from "./button.module.css";
const Button = ({
  text,
  Icon,
  containerStyles,
  buttonStyles,
}: {
  text: string;
  Icon: any;
  containerStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
}) => {
  return (
    <div style={containerStyles} className={styles.buttonContainer}>
      <Icon style={buttonStyles} />
      {text}
    </div>
  );
};

export default Button;
