import styles from "./button.module.css";
export const BUTTON_TYPES_CLASSES = {
  main: "main-button",
  contact: "contact-button",
  book: "book-button",
};

const Button = ({ children, buttonType = "main", ...otherProps }) => {
  return (
    <button
      className={styles[BUTTON_TYPES_CLASSES[buttonType]]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
