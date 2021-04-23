import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return (
            <span>
                <form className="LogIn">
                    <h3>Log In</h3>
                    <br />
                    <label>Username:</label>
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </span>
        );
    }
}