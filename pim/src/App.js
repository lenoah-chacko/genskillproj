
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Search from "./components/Search";
import Hashtag from "./components/Hashtag";
import AllTags from "./components/AllTags";


function App() {
  const search = (e)=>{
    let search=document.getElementById('search')
    console.log(search.value)
}
  return (
    <div className={App}>
    <Router>
      <Navbar></Navbar>
      
    <Route path='/' exact render={(props)=>(
      <>
        <Home searchfunc={search}></Home>
      </>
    )}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/tags/:id' component={Hashtag}/>
    <Route path='/tags' exact component={AllTags}/>
    <Route path='/search' render={(props)=>(
      <>
        <Search searchfunc={search}></Search>
      </>
    )}/>
    <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
