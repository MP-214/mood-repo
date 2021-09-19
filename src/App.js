import { Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import Shoppage from "./Pages/Shoppage/shoppage";
function App() {
	return (
		<React.Fragment>
			<div className="app">
				{" "}
				<h1 className="title-tag">MOOD RESTRO</h1>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={Shoppage} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
