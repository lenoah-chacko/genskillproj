import React from 'react'
import { useState } from 'react'

const Login= () => {

	const [showPassWarning, setShowPassWarning] = useState(false);
	const [showEmailWarning, setShowEmailWarning] = useState(false);



	const [valueEmail, setValueEmail] = useState('');
	const handleChangeEmail = (event) => {
		setValueEmail(event.target.value);
		setShowEmailWarning(false)
	};

	const [valuePassword, setValuePassword] = useState('');

	const handleChangePassword = (event) => {
		setValuePassword(event.target.value);
		setShowPassWarning(false)
	};


	function onClick(event){
		if(valueEmail==''|| valuePassword=='')
		{
			event.preventDefault()
			setShowPassWarning(true)
			setShowEmailWarning(true)
		}
	}

    return (

			<div className="container mt-5">
				<h2 className="header">Login</h2>
				<div className="row">
					<div className="col-6">
						<form>
							<div className="form-row">
			                    <div className="mt-4 col-12 form-group">
			                        <label className="col-3 col-form-label" htmlFor="uname">Email address</label>
			                        <input type="email" className="col-8 form-control " name="uname" id="uname"
									value={valueEmail} onChange={handleChangeEmail} placeholder="Enter Email"></input>
									{(valueEmail==''&&showEmailWarning)&&<span className="text-danger">Please enter valid password</span>}
			                    </div>
			                    <div className="col-12 form-group">
			                        <label className="col-3 col-form-label" htmlFor="pwd">Password</label>
			                        <input type="password" className="col-8 form-control mr-1" name="pwd" id="pwd"
									value={valuePassword} onChange={handleChangePassword} placeholder="Enter Password"></input>
									{(valuePassword==''&&showPassWarning)&&<span className="text-danger">Please enter valid password</span>}
			                    </div>
			                </div>

			                <div className="ml-1 form-row">
								<div className="col-8">
								  	<button type="submit" onClick={onClick} className="btn btn-info col-2 btn-sm">Sign in</button>
				                    <button type="button" className="col-2 btn offset-1 btn-secondary btn-sm">Cancel</button>
								</div>
			                </div>
		            	</form>
					</div>
					<div className="mt-4 col-6">
						<div className="img-fluid" className="loginpic" />
					</div>
				</div>


			</div>
    )
}

export default Login
