import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Landing from "./landing";
import Messenger from "./messenger";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="messenger" element={<Messenger />} />
          <Route path="" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
