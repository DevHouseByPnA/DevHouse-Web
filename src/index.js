import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./contexts/auth.context";
import { CustomThemeProvider } from "./contexts/theme.context";
import { UserProfileProvider } from "./contexts/userProfile.context";

const Main = () => {
    return (
        <Router>
            <AuthProvider>
                <CustomThemeProvider>
                    <UserProfileProvider>
                        <ToastContainer />
                        <App />
                    </UserProfileProvider>
                </CustomThemeProvider>
            </AuthProvider>
        </Router>
    );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
