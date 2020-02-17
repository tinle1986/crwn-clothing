import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/hompage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./components/firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={"App"}>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/shop"} component={Shop} />
          <Route exact path={"/signin"} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
