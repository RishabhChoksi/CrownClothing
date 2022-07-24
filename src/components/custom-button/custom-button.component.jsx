import "./custom-button.styles.css";

import React from "react";

function CustomButton({ children, isGoogleSignIn,...otherProps }) {
  return (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
