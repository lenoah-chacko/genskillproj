import React from 'react'

const newTask = () => {
    return (
        <div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="form-box">
						<div className="form-row">
							<div className="col-12 form-group">
								<label className="col-4 col-form-label" htmlFor="uname">something</label>
								<input type="email" className="col-8 form-control " name="uname" id="uname"></input>
							</div>
							<div className="col-12 form-group">
								<label className="col-3 col-form-label" htmlFor="pwd">something</label>
								<input type="password" className="col-8 form-control mr-1" name="pwd" id="pwd"></input>
							</div>
						</div>

						<div className="form-row">
							<div className="col-8">
								<button type="button" className="btn btn-info col-auto btn-sm">Confirm</button>
								<button type="submit" className="col-auto btn offset-1 btn-secondary btn-sm">Cancel</button>
							</div>
						</div>
					</form>
				</div>
			</div>
        </div>
    )
}

export default newTask
