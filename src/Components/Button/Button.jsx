import classes from "./Button.module.css";

export const Button = ({ children, isActive, ...props }) => {
  return (
    <>
      <button
        {...props}
        type="button"
        className={
          isActive ? `${classes.button} ${classes.active}` : classes.button
        }
      >
        {children}
      </button>
    </>
  );
};
