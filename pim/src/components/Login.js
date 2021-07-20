import React from 'react'

const Login= () => {
    return (
			<form>
                <div className="form-row">
                    <div className="form-group col-sm-4">
                        <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                        <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                        <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"></input>
                    </div>
                </div>
                <div className="form-row">
                    <button type="button" className="btn btn-secondary btn-sm">Cancel</button>
                    <button type="submit" className="btn btn-primary btn-sm">Sign in</button>
                </div>
            </form>

    )
}

export default Login
