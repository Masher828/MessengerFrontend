import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "./redux/actions";
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

function App() {
  const state = useSelector((state) => state.changeTheUser);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {state}
      <button onClick={() => dispatch(changeUser("user102"))}>
        Activate Lasers
      </button>

      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
