import Messenger from "./containers/messenger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./containers/auth/login";
import Landing from "./containers/Landing/index";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.root_user);
  const id = user.id;
  let Messengerelement = "";
  if (id == -1) {
    Messengerelement = <Login />;
  } else {
    Messengerelement = <Messenger />;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="messenger" element={Messengerelement} />
          <Route path="" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
