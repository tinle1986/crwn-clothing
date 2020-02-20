import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/hompage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }*/

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={"App"}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/shop"} component={Shop} />
          <Route exact path={"/signin"} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
connect sử dụng 2 tham số:
1. mapStateToProps: lấy state từ store xuống component -> vd bên dưới do không cần sử dụng state currentUser nên set = null
2. mapDispatchToProps: gửi action lên root reducer để cập nhật state lên store (optional)
 */
export default connect(null, mapDispatchToProps)(App);
