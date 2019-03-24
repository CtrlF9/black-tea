import React,{ Component } from "react";
import "./css/common.css";
import "./css/login.css";

class Login extends Component{
    render(){
        return(
        <section className="loginForm">
            <input type="text" placeholder="user name or e-mail" />
            <br/>
            <input type="password" placeholder="password" />
            <br/>
            <input type="button" className="btn-login" value="login" />
        </section>
        );
    }
}

export default Login;