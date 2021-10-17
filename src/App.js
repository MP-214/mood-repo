import { Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import Shoppage from "./Pages/Shoppage/shoppage";
import Header from "./Component/Header/header.component";
import SignInAndSignUpPage from './Pages/SignIn-and-signup.component/sign-in-and-sign-up.component.jsx'

function App() {
	return (
		<React.Fragment>
			<div className="app">
				<Header />
				<h1 className="title-tag">MOOD RESTRO</h1>

				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={Shoppage} />
					<Route path="/signin" component={SignInAndSignUpPage}/>
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
