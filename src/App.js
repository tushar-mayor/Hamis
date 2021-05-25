import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Nav from "./Component/NavBar/Nav";
import SideBar from "./Component/NavBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Catagory from "./Component/Catagories/Catagory";
import Policies from "./Component/Policies/Policies";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Nav />
                <SideBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Catagory" component={Catagory} />
                    <Route path="/Policies" component={Policies} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
