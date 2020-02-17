import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className={"sign-in"}>
        <h2 className={"title"}>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={"email"}
            value={this.state.email}
            type={"email"}
            label={"email"}
            handleChange={this.handleChange}
          />
          <FormInput
            name={"password"}
            value={this.state.password}
            type={"password"}
            label={"password"}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type={"submit"}>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
