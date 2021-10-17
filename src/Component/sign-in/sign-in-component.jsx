import React from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../formInput/form-input";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};
	handleChnage = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your eamil and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChnage}
						label="Email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChnage}
						label="Password"
						required
					/>

					<CustomButton type="submit"> sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						{" "}
						sign in with google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
