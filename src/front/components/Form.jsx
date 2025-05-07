import { useState } from "react";
import { Link } from "react-router-dom";

export const Form = ({ handleSubmit }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<form className="container d-flex flex-column justify-content-center align-items-center" onSubmit={(e) => handleSubmit(e, email, password)}>
			<div class="mb-3">
				<label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
				<input type="email" class="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
			</div>
			<div class="mb-3">
				<label htmlFor="exampleFormControlInput1" class="form-label">Password</label>
				<input type="password" class="form-control" id="passwordInput" placeholder="*****" value={password} onChange={(e)=> setPassword(e.target.value)}/>
			</div>
			<div className="mb-3">
				<input className="btn btn-primary" type="submit" value="Send" />
			</div>
		</form>
	);
};