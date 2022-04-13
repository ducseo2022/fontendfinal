import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import News from "./pages/news/News";
import Bcm from "./pages/Ban/Bcm";
import Bvh from "./pages/Ban/Bvh";
import Bnd from "./pages/Ban/Bnd";
import Btt from "./pages/Ban/Btt";
import Bdn from "./pages/Ban/Bdn";
import { BrowserRouter as Router, Switch, Route ,  useParams} from "react-router-dom";
import Departments from "./components/Department/Department";
import About from "./pages/about/About";




function App() {
  
  const currentUser = true;
  
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" >
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/news">
          <News />
        </Route>       
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        


        <Route path="/bcm">
          <Bcm />
        </Route> 
        <Route path="/bvh">
          <Bvh />
        </Route> 
        <Route path="/btt">
          <Btt />
        </Route>
        <Route path="/bdn">
          <Bdn />
        </Route> 
        <Route path="/bnd">
          <Bnd />
        </Route> 

      </Switch>
  

    </Router>
  );
}

export default App;
