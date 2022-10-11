import React, { useRef } from "react";
import "./SignInScreen.css"
import { auth } from "../../firebase/firebase";

const SignUpScreen = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (event) => {
    event.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((err) => {
      alert(err.message)
    })
  }

  const signIn = (event) => {
    event.preventDefault()

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className={"signUpScreen"}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder={"Email"} />
        <input ref={passwordRef} type="password" placeholder={"Password"} />
        <button
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4>New to Netflix?
          <span
            className={"signUpScreen_white"}
            onClick={register}
          > Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;