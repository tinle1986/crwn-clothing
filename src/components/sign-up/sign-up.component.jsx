import React, { Component } from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.log("Error signing up a new account!", err.message);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={"sign-up"}>
        <h2 className={'title'}>I do not have an account</h2>
        <span>Sign up with your email and password.</span>
        <form className={"sign-up-form"} onSubmit={this.handleSubmit}>
          <FormInput
            name={"displayName"}
            type={"text"}
            value={displayName}
            label={"Display Name"}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name={"email"}
            type={"email"}
            value={email}
            label={"Email"}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name={"password"}
            type={"password"}
            value={password}
            label={"Password"}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name={"confirmPassword"}
            type={"password"}
            value={confirmPassword}
            label={"Confirm Password"}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type={"submit"}>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
