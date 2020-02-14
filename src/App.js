import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/hompage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignIn from "./components/sign-in/sign-in.component";
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
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={"app"}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/shop"} component={Shop} />
          <Route exact path={"/signin"} component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
