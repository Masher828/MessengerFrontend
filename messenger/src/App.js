import "./App.css";
import MessengerScreenContainer from "./containers/messenger/messenger_screen";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ResetPassword from "./containers/auth/resetpassword";
import SignUpForm from "./containers/auth/signupform";
import SignInForm from "./containers/auth/signinform";
import {Provider} from "react-redux";
import store from "./redux/reducer";

const router = createBrowserRouter([
    {
        path: "/messenger",
        element: <MessengerScreenContainer/>,
    },
    {
        path: "",
        element: <SignInForm/>,
    },
    {
        path: "/signup",
        element: <SignUpForm/>,
    },
    {
        path: "/resetPassword",
        element: <ResetPassword/>,
    }
]);

function App() {
    return (<Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>)
}

export default App;
