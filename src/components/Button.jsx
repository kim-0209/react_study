const Button = ({ color = "blue", text, children }) => {
  console.log(color);

  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   color: "black",
// };
export default Button;
