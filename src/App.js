import Messenger from "./containers/messenger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./containers/auth/login";
import Signup from "./containers/auth/signup";
import Landing from "./containers/Landing/index";
import Page404 from "./containers/Landing/page404";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser } from "./redux/actions/messengerActions";
import { BroadcastChannel } from "broadcast-channel";

function App() {
  const dispacth = useDispatch();

  const channel = new BroadcastChannel("uniscast");
  channel.onmessage = (msg) => {
    if (msg === "Logout proc") {
      dispacth(setAuthUser(-1, ""));
    }
  };

  const user = useSelector((state) => state.root_user);
  const id = user.id;

  const authenticateURLS = {};

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
          <Route path="signup" element={<Signup />} />
          <Route path="messenger" element={Messengerelement} />
          <Route path="" element={<Landing />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
