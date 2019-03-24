import React,{ Component } from "react";
class Login extends Component{
    render(){
        return(
        <section class="loginForm">
            <input type="text" placeholder="user name or e-mail" />
            <br/>
            <input type="password" placeholder="password" />
            <br/>
            <input type="button" class="btn-login" value="login" />
        </section>
        );
    }
}

export default Login;