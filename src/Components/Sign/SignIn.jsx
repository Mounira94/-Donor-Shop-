import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.State = {
            mail: '',
            pwd: '',
            user: {}
        }
    }
    mailChange = (event) => {
        if (event.target.value != "") {
            this.setState({ mail: event.target.value });
        }
    }
    pwdChange = (event) => {
        if (event.target.value != "") {
            this.setState({ pwd: event.target.value });
        }
    }
    redirect = (e) => {
        e.preventDefault()
        const { history } = this.props;
        axios.get('/users/' + this.state.mail + '/' + this.state.pwd).then(res => {
            if (res.data.length > 0) {
                this.setState({
                    user: res.data

                })
                history.push('/Home')

            }
            else
                alert("Invalid email or password.")
        }
        )
            .catch(err => console.log("err"));
    }
    render() {
        return (
            <section className="section-sign">
                <h1 className="sign-title">Sing in</h1>
                <form onSubmit={(e) => this.redirect(e)} action="" className="sign-form">
                    <input type="text" placeholder="E-mail" onChange={this.mailChange} className="sign-input" />
                    <input type="text" placeholder="Password" onChange={this.pwdChange} className="sign-input" />
                    <div className="sign-redirect">
                        <span className="sign-redirect-text">Don't have an account? Click here to </span>
                        <Link className="sign-redirect-link" to="/SignUp">Sign up</Link>
                    </div>

                    <input type="submit" value="Log in" className="sign-submit" />
                </form>
            </section >
        );
    }
}
export default SignIn;