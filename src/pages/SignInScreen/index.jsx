import React from "react";
import "./SignInScreen.css"

const SignUpScreen = () => {
  return (
    <div className={"signUpScreen"}>
      <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder={"Email"} />
        <input type="password" placeholder={"Password"} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpScreen;