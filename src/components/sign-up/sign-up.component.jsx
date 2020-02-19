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
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
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
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={"sign-up"}>
        <h2 className={"title"}>I do not have an account</h2>
        <span>Sign up with your email and password.</span>
        <form className={"sign-up-form"} onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label={"Display Name"}
            type={"text"}
            name={"displayName"}
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label={"Email"}
            type={"email"}
            name={"email"}
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label={"Confirm Password"}
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            required
          />
          <CustomButton type={"submit"}>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
