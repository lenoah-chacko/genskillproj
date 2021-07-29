import { Link, useHistory } from "react-router-dom"
export default function Navbar({user, tweakUser}) {
  const history=useHistory();
  function logout(){
    window.localStorage.removeItem('userID')
    tweakUser(window.localStorage.getItem('userID'))
    history.push('/login');
    console.log('logged out')
  }
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <Link className="navbar-brand" to="/home">PIM</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

	{!!user&&
	<ul className="navbar-nav mr-auto">
	  <li className="nav-item">
		  	<Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tags">Tags</Link>
      </li>

    </ul>
}
    <ul className="navbar-nav">
	{
		!user&&
      <Link className="nav-link" to="/login">Login</Link>
  	}
	{
		!user&&
      <Link className="nav-link" to="/register">Register</Link>
	}
	{
		!!user&&
      <div className="nav-link" style={{'cursor' : 'pointer'}} onClick={logout}>Logout</div>
	 }
    </ul>
  </div>
</nav>
        </div>
    )
}
