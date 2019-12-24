import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import store from 'store';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUser } from 'actions/loginUser'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordEmpty: false,
            userNameEmpty: false,
            errorOccurred: false
        };
    }

    authenticateToGithub = async () => {
        let authString = new Buffer(`${this.state.username}:${this.state.password}`).toString('base64');

        const headers = {
            headers: {
                'Authorization': `Basic ${authString}`
            }
        }

        try {
            let githubResponse = await axios.get('https://api.github.com/user', headers)

            return true;
        } catch (error) {
            return false;
        }
    }

    handleLogin = async (event) => {
        event.preventDefault();

        !this.state.username ? this.setState({ userNameEmpty: true }) : this.setState({ userNameEmpty: false })
        !this.state.password ? this.setState({ passwordEmpty: true }) : this.setState({ passwordEmpty: false })

        if (!this.state.passwordEmpty && !this.state.userNameEmpty) {
            let authenticated = await this.authenticateToGithub();
            
            console.log(authenticated);
            if (!authenticated) {
                this.setState({ errorOccurred: true });
                return;
            }

            this.props.loginUser({
                userName: this.state.username,
                password: this.state.password
            })

            this.props.history.push('/view');
        }
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        let userNameErrorMessage;
        let passwordErrorMessage;
        let authenticationError;

        if (this.state.userNameEmpty) {
            userNameErrorMessage =
                <Form.Text className="text-muted">
                    Username is required
                </Form.Text>
        }

        if (this.state.passwordEmpty) {
            passwordErrorMessage =
                <Form.Text className="text-muted">
                    Password is required
                </Form.Text>
        }

        if (this.state.errorOccurred) {
            authenticationError =
                <Form.Text className="text-muted">
                    Error Authenticating
                </Form.Text>
        }

        return (
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "900px", width: "600px" }}>
                <Form onSubmit={this.handleLogin}>
                    <h3 style={{ textAlign: "center" }}>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" onChange={this.handleUsername} value={this.state.username} />
                        {userNameErrorMessage}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password} />
                        {passwordErrorMessage}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    {authenticationError}
                </Form>
            </Container>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        loginUser: user => dispatch(loginUser(user))
    };
}

const ConnectedLoginPage = connect(null, mapDispatchToProps)(LoginPage);

export default ConnectedLoginPage;