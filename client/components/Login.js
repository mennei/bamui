import React, { Component } from "react";
import dynamic from 'next/dynamic';
// fetch client
// const fetchApi = require('menora.libs.ssl.fetch');
import fetch from 'isomorphic-unfetch';

const conf = require('../../server.config');
let FilterableProductTable = '';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            data: [],
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handleNameChange(e) {
        e.preventDefault();
        this.setState({
            // username: e.target.value 
            // username: conf.ADMIN_TOKEN_USERNAME
            username: 'digital'
        });
    }

    handlePassChange(e) {
        e.preventDefault();
        this.setState({
            // password: e.target.value
            // password: conf.ADMIN_TOKEN_PASSWORD
            password: 'digital'
        });
    }

    handleLogin(e) {
        e.preventDefault();
        const { username, password } = this.state;
        fetchLogin(username, password).then((t) => {
            this.setState({
                token: t
            });
        });

        getValues(this.state.token).then((list) => {
            this.setState({
                data: list.data
            });
        });
    }

    render() {
        let shows = this.state.data;
        // console.log(shows);
        FilterableProductTable = dynamic(() => import('./FilterableProductTable'));
        return (
            !this.state.token ?
                <div>
                    <input type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleNameChange} />
                    <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange} />
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                :
                <FilterableProductTable products={shows}/>
        );
    }
}

// Init props by getting values from DB
async function getValues(token) {
    const res = await fetch(conf.VALUES_URL + '?token=' + token);
    const data = await res.json();
    console.log(data);
    if (res.status != 200) throw Error("Error!!");
    return data;
}

async function fetchLogin(user, pass) {
    console.log(user + ":" + pass);
    let authorization = window.btoa(`${user}:${pass}`);
    console.log(authorization);
    try {
        const url = conf.LOGIN_URL;
        const body = {
            username: user,
            password: pass
        }
        const config = {
            timeout: 1000,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            },
            body: JSON.stringify(body)
        }
        const res = await fetch(url, config);
        const data = await res.json();
        console.log(data);
        if (res.status != 200) throw Error("Error!!");
        return data;
    } catch (error) {
        console.error(`error: ${error.stack}`);
        return null;
    }
}

export default Login;